class TopicsController < ApplicationController
  def index
      @topics = Topic.all
      # binding.pry
      render json: @topics#, include: 'posts.responses, posts.user', fields: {posts: {responses: [:content], user: [:id, :first_name]} }
      # render component: 'TopicMain', props: { topics: @topics }
      # respond_to do |format|
      #   format.html
      #   format.json render component: 'TopicMain', props: {topics: @topics}
      # end
  end

end
