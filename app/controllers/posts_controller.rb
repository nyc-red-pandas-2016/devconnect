class PostsController < ApplicationController

  def index
    @topic = Topic.find(params[:topic_id]).to_json

  end

  def json
    @topic = Topic.find(params[:topic_id])

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
