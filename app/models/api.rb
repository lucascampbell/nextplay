require 'rest-client'
class Api
  LIVE_PBP = "http://api.sportsdatallc.org/nfl-t1/2013/REG/7/MIN/NYG/pbp.xml?api_key=#{ENV['API_KEY']}"
  TEST_PBP = "http://developer.sportsdatallc.com/files/nfl_v1_pbp_example.xml"

  TEST_SCHEDULE = 'http://developer.sportsdatallc.com/files/nfl_v1_weekly_schedule_example.xml'
  LIVE_SCHEDULE = "http://api.sportsdatallc.org/nfl-t1/2013/REG/10/schedule.xml?api_key=#{ENV['API_KEY']}"

  class << self
    attr_accessor :quarter,:drive,:play,:season
  end

  def self.get_schedule
    puts "scehdule is #{LIVE_SCHEDULE}"
    schedule = []
    doc        = Nokogiri::HTML(RestClient.get(LIVE_SCHEDULE).body)
    Api.season = {:week=>doc.css("games").first["week"],:season=>doc.css("games").first["season"]}
    doc.css("game").each do |g|
      schedule << {:home=>g["home"],:away=>g["away"],:status=>g["status"],
        :network=>g.css("broadcast").first["network"],:satellite=>g.css("broadcast").first["satellite"],:scheduled=>Time.parse(g["scheduled"]).strftime("%A-%H:%M")}
    end
    schedule
  end

  # def self.poll_play
  #   doc = Nokogiri::HTML(RestClient.get(LIVE_PBP).body)
  #   Api.quarter = doc.xpath("quarter").last
  #   Api.drive   = doc.css("drive").last
  #   play        = doc.css("play").last

  #   res = true
  #   res = false unless ["rush","pass"].include?(play["type"])

  #   if Api.play and res
  #     res = play["id"] == Api.play["id"] ? false : true
  #   else
  #     res = false
  #   end
  #   Api.play = play
  #   res
  # end
end
