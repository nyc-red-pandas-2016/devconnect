class HomeController < ApplicationController
  def index
    if !current_user
      redirect_to '/'
    end
  end

  def top_mentors
    @mentors = User.where("is_mentor = ?", true).joins(:endorsements).uniq
     @topMentores = Array.new
    @mentors.each do |mentor|
        @topMentores << mentor if mentor.endorsements.count >= 3
    end
    render json:@topMentores
  end

  def top_trending
    render json: Post.find_top_trending_posts
  end

  def most_recent
    render json: Post.find_most_recent
  end

  def forum_update
    @top_trending = Post.find_top_trending_posts
    @most_recent = Post.find_most_recent

    render 'forum.json.jbuilder'
  end

end
