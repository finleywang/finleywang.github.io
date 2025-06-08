require "active_support/all"
require 'json'
require 'open3'

module Helpers
  extend ActiveSupport::NumberHelper
end

module Jekyll
  class GoogleScholarCitationsTag < Liquid::Tag
    Citations = { }

    def initialize(tag_name, params, tokens)
      super
      splitted = params.split(" ").map(&:strip)
      @scholar_id = splitted[0]
      @article_id = splitted[1]
    end

    def render(context)
      article_id = context[@article_id.strip] || @article_id.strip
      scholar_id = context[@scholar_id.strip] || @scholar_id.strip

      begin
        # If the citation count has already been fetched, return it
        if GoogleScholarCitationsTag::Citations[article_id]
          return GoogleScholarCitationsTag::Citations[article_id]
        end

        # Use the shell wrapper script to run the Python script with the proper environment
        wrapper_script_path = File.join(Dir.pwd, "bin", "run_fetch_scholar_citations.sh")
        command = "#{wrapper_script_path} #{scholar_id} #{article_id}"
        
        # Execute the script
        stdout, stderr, status = Open3.capture3(command)
        
        if status.success?
          # Parse the JSON output from the script
          result = JSON.parse(stdout)
          citation_count = result["citations"]
        else
          # Log the error but continue
          puts "Error fetching citation count: #{stderr}"
          citation_count = 0
        end

        # Format the citation count for readability
        citation_count = Helpers.number_to_human(citation_count, format: '%n%u', precision: 0, units: { thousand: 'K', million: 'M', billion: 'B' })

      rescue Exception => e
        # Handle any errors that may occur during fetching
        citation_count = "N/A"

        # Print the error message including the exception class and message
        puts "Error fetching citation count for #{article_id}: #{e.class} - #{e.message}"
      end

      GoogleScholarCitationsTag::Citations[article_id] = citation_count
      return "#{citation_count}"
    end
  end
end

Liquid::Template.register_tag('google_scholar_citations', Jekyll::GoogleScholarCitationsTag)
