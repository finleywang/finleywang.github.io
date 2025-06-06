#!/usr/bin/env python
"""
Script to fetch citation counts from Google Scholar and store them in _data/citations.yml
This script is designed to be run by a GitHub Action.
"""

import os
import yaml
import time
import random
from datetime import datetime
from scholarly import scholarly

# Configuration
SCHOLAR_USER_ID = "MuEc_JEAAAAJ"  # Your Google Scholar ID
OUTPUT_FILE = "_data/citations.yml"
MAX_RETRIES = 3

# Create data directory if it doesn't exist
os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)

def get_scholar_citations():
    """
    Fetch citation data from Google Scholar for all papers by the specified author
    """
    print(f"Fetching citations for Google Scholar ID: {SCHOLAR_USER_ID}")
    
    # Initialize citation data structure
    citation_data = {
        'metadata': {
            'last_updated': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        },
        'papers': {}  # Initialize as empty dict, not None
    }
    
    # Try to load existing data first to avoid unnecessary requests
    if os.path.exists(OUTPUT_FILE):
        try:
            with open(OUTPUT_FILE, 'r') as f:
                existing_data = yaml.safe_load(f)
                if existing_data and isinstance(existing_data, dict):
                    # Keep existing metadata if available
                    if 'papers' in existing_data and existing_data['papers'] is not None:
                        citation_data['papers'] = existing_data['papers']
        except Exception as e:
            print(f"Warning: Could not read existing citation data: {e}")

    # Fetch author data with retries
    author_data = None
    for attempt in range(MAX_RETRIES):
        try:
            author = scholarly.search_author_id(SCHOLAR_USER_ID)
            author_data = scholarly.fill(author)
            break
        except Exception as e:
            wait_time = (2 ** attempt) + random.uniform(0, 1)  # Exponential backoff
            print(f"Attempt {attempt + 1}/{MAX_RETRIES} failed: {e}")
            if attempt < MAX_RETRIES - 1:
                print(f"Retrying in {wait_time:.1f} seconds...")
                time.sleep(wait_time)
            else:
                print("All retries failed. Using existing data if available.")
                return citation_data
    
    if not author_data:
        print("Could not fetch author data")
        return citation_data
        
    # Process publications
    if 'publications' in author_data:
        for pub in author_data['publications']:
            try:
                # Get publication ID
                pub_id = None
                if 'pub_id' in pub and pub['pub_id']:
                    pub_id = pub['pub_id']
                elif 'author_pub_id' in pub and pub['author_pub_id']:
                    pub_id = pub['author_pub_id']
                
                if not pub_id:
                    print(f"Warning: No ID found for publication: {pub.get('bib', {}).get('title', 'Unknown')}")
                    continue
                
                # Get publication metadata
                title = "Unknown Title"
                year = "Unknown Year"
                citations = 0
                
                if 'bib' in pub:
                    if 'title' in pub['bib']:
                        title = pub['bib']['title']
                    if 'pub_year' in pub['bib']:
                        year = pub['bib']['pub_year']
                
                if 'num_citations' in pub:
                    citations = pub['num_citations']
                
                print(f"Found: {title} ({year}) - Citations: {citations}")
                
                # Store citation data
                citation_data['papers'][pub_id] = {
                    'title': title,
                    'year': year,
                    'citations': citations
                }
                
            except Exception as e:
                print(f"Error processing publication: {str(e)}")
    else:
        print("No publications found in author data")
    
    # Save to YAML file
    try:
        with open(OUTPUT_FILE, 'w') as f:
            yaml.dump(citation_data, f, default_flow_style=False, sort_keys=False)
        print(f"Citation data saved to {OUTPUT_FILE}")
    except Exception as e:
        print(f"Error saving citation data: {str(e)}")
    
    return citation_data

if __name__ == "__main__":
    get_scholar_citations()
