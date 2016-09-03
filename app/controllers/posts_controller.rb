class PostsController < ApplicationController
  # before_filter :authenticate_user!

  def index
      @posts = Post.all
      render json:@posts
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
