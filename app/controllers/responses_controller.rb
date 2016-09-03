class ResponsesController < ApplicationController
  def index
    @responses = Reponse.all
    render json:@responses
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
