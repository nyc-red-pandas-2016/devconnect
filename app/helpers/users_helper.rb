module UsersHelper
  def render_component(user)
    skills = user.skills
    posts= user.posts

    render component:"Profile",props:{user: user,skills:skills,posts:posts}
  end
end
