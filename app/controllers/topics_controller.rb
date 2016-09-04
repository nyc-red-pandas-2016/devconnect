class TopicsController < ApplicationController
  def json
    @topics = Topic.all
    render json: @topics
    # render 'topics.json.jbuilder'
  end

  def index
  end

end
