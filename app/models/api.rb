require 'rest-client'
class Api
  PBP_URL = "http://api.sportsdatallc.org/nfl-t/1/2013/REG/7/MIN/NYG/?api_key=#{ENV['API_KEY']}"
  TEST_URL = "http://developer.sportsdatallc.com/files/nfl_v1_pbp_example.xml"

  class << self
    attr_accessor :quarter,:drive,:play
  end

  def self.poll_play
    doc = Nokogiri::HTML(RestClient.get(TEST_URL).body)
    Api.quarter = doc.xpath("quarter").last
    Api.drive   = doc.css("drive").last
    Api.play    = doc.css("play").last
  end
end
