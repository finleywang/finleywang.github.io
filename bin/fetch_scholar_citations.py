#!/usr/bin/env python3
import argparse
import json
import time
import random
import sys

try:
    from scholarly import scholarly
    from scholarly import ProxyGenerator
except ImportError:
    print("Error: scholarly package not installed. Run 'pip install scholarly'", file=sys.stderr)
    sys.exit(1)

def setup_proxy():
    """Configure scholarly to use a proxy to avoid being blocked by Google Scholar"""
    pg = ProxyGenerator()
    
    # Try to use FreeProxy (will be used automatically by scholarly)
    success = pg.FreeProxies()
    
    # If not successful, fall back to Tor if available
    if not success:
        success = pg.Tor_Internal(tor_cmd="tor")
    
    if not success:
        # As a last resort, try to use a Selenium-based approach
        try:
            success = pg.Selenium(selenium_option='headless')
        except:
            pass
    
    if success:
        scholarly.use_proxy(pg)
        return True
    
    return False

def get_citation_count(author_id, publication_id):
    """
    Retrieve citation count for a specific publication
    
    Args:
        author_id (str): Google Scholar author ID
        publication_id (str): Google Scholar publication ID
    
    Returns:
        int: Citation count for the publication
    """
    try:
        # Configure proxy 
        proxy_setup = setup_proxy()
        if not proxy_setup:
            print("Warning: Failed to set up proxy", file=sys.stderr)
        
        # Get author data
        author = scholarly.search_author_id(author_id)
        
        # Fill in all publications
        author = scholarly.fill(author, sections=['publications'])
        
        # Find the requested publication
        for pub in author['publications']:
            if pub['author_pub_id'] == publication_id:
                # Return citation count
                return pub.get('num_citations', 0)
                
        print(f"Publication ID {publication_id} not found for author {author_id}", file=sys.stderr)
        return 0
        
    except Exception as e:
        print(f"Error fetching citation count: {str(e)}", file=sys.stderr)
        return 0

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Fetch Google Scholar citation count')
    parser.add_argument('author_id', help='Google Scholar author ID')
    parser.add_argument('publication_id', help='Google Scholar publication ID')
    
    args = parser.parse_args()
    
    # Add a small delay to avoid rate limiting if multiple requests are made
    time.sleep(random.uniform(1, 3))
    
    citations = get_citation_count(args.author_id, args.publication_id)
    
    # Output as JSON for easy parsing by Ruby
    print(json.dumps({"citations": citations}))