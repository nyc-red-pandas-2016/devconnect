class TopicsController < ApplicationController
  def index
   @topics = Topic.all
   render json:@topics
  end

  def show
    topic = Topic.find(params[:id])
      posts = topic.posts
      render json: posts
  end
end
