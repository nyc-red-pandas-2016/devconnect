class PostsController < ApplicationController
  # before_filter :authenticate_user!

  def index
      @posts = Post.all
      render json:@posts
  end

  def new
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    end
  end

  def update
  end

  def delete
  end

  def show
  end
  private

  def post_params
    params.require(:post).permit(:title, :content, :postable_id, :postable_type, :user_id)
  end
end
