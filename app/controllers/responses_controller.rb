class ResponsesController < ApplicationController
  def index
    @topic = Topic.find(params[:topic_id]).to_json
    @post = Post.find(params[:post_id]).to_json
  end

  def json
    @topic = Topic.find(params[:topic_id])
    @post = Post.find(params[:post_id])

    render 'responses.json.jbuilder'
  end

  def new
  end

  def create
    @topic = Topic.find(params[:topic_id])
    @post = @topic.posts.find(params[:post_id])
    @response = @post.responses.new(content: params[:content], user_id: params[:user_id])

    if @response.save
      render 'responses.json.jbuilder'
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

  def response_params
    params.require(:response).permit(:content, :user_id)
  end
end
