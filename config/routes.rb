Rails.application.routes.draw do

  # user routes
  get 'users/:id/show' => "users#show"
  get '/users/data/json' => "users#json"

  #FindMentors
  resources :mentors,only:[:index]
  get '/mentors/search' => "mentors#search"

  post '/users/requestmentor' => "users#request_mentor"
  get '/users/avatar' => 'users#avatar', as: :user
  get '/users/avatar' => 'users#avatar'


  get 'forums/index' => "forums#index"
  get 'topics/json' => 'topics#json'
  get 'topics/:topic_id/posts/json' => 'posts#json'
  get '/topics/:topic_id/posts/:post_id/responses/json' => 'responses#json'
  get '/home/index/trending' => 'home#top_trending'
  get '/home/index/mostrecent' => 'home#most_recent'
  get '/home/index/forumupdate' => 'home#forum_update'

  # resources :topics, :only=> [:index]
  # resources :responses
  # resources :posts

  resources :topics, :only=> [:index] do
    resources :posts do
      resources :responses
    end
  end

  devise_for :users, :controllers => {:registrations => "registrations"}
  devise_scope :user do
    root to: "devise/sessions#new"
  end

  # authenticated :user do
  #   root to: 'topics#index', as: :authenticated_root
  # end

  match 'home/index' => "home#index", as: :user_root, via: [:get]
end
