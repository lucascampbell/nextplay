class ApiController < ApplicationController
  

  def poll_play
    Api.poll_play
    json = {team:Api.drive["team"],clock:Api.play["clock"],down:Api.play["down"],distance:Api.play["yfd"],togo:Api.play["yfd"],play:Api.play["type"],yardline:Api.play["yard_line"]}
    render :json=>json
  end
end
