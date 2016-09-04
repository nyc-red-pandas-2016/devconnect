class ForumsController < ApplicationController
  def index
    # @topics = Topic.all
    # render json: @topics#, include: 'posts.responses, posts.user', fields: {posts: {responses: [:content], user: [:id, :first_name]} }
  end

end
