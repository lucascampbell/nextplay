class ApiController < ApplicationController
  
	def index
		@schedule = Api.get_schedule
	end

	def game
		@home = params[:home]
		@away = params[:away]

	end

  def poll_play
    good =  Api.poll_play
    json = {status:good,team:Api.drive["team"],clock:Api.play["clock"],down:Api.play["down"],distance:Api.play["yfd"],togo:Api.play["yfd"],play:Api.play["type"],yardline:Api.play["yard_line"]}
    render :json=>json
  end
end
