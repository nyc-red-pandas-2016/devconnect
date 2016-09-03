class TopicsController < ApplicationController
  def index
    if request.xhr?
      @topics = Topic.all
      @
      # render json: @topics#, include: 'posts.responses, posts.user', fields: {posts: {responses: [:content], user: [:id, :first_name]} }
    end
  end


end
