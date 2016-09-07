class TopicsController < ApplicationController
  def json
    @topics = Topic.all
    render json: @topics
    # render 'topics.json.jbuilder'
  end

  def index
    if !current_user
      redirect_to '/'
      return
    end
  end

end
