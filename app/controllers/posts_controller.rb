class PostsController < ApplicationController
  # before_filter :authenticate_user!

  def index
  end

  def json
    @topic = Topic.find(params[:topic_id])

    # render json: {posts: @posts
    render 'posts.json.jbuilder'
  end

  def new
  end

  def update
  end

  def delete
  end

  def show
  end
end
