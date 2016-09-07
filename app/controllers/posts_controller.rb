class PostsController < ApplicationController

  def index
    if !current_user
      redirect_to '/'
      return
    end
    @topic = Topic.find(params[:topic_id]).to_json
  end

  def json
    @topic = Topic.find(params[:topic_id])

    render 'posts.json.jbuilder'
  end

  def new
  end

  def create
    @topic = Topic.find(params[:topic_id])
    @post = @topic.posts.new(title: params[:title], content: params[:content], user_id: params[:user_id])

    if @post.save
      # render json: @post
      render 'posts.json.jbuilder'
    else
      render json: @post.errors.full_messages
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
    params.require(:post).permit(:title, :content, :user_id)
  end
end
