Rails.application.routes.draw do

  # user routes
  get 'users/:id/show' => "users#show"
  get 'forums/index' => "forums#index"
  get 'topics/json' => 'topics#json'
  get 'topics/:topic_id/posts/json' => 'posts#json'

  # resources :topics, :only=> [:index]
  # resources :responses
  # resources :posts

  resources :topics, :only=> [:index] do
    resources :posts do
      resources :responses
    end
  end

  devise_for :users
  devise_scope :user do
    root to: "devise/sessions#new"
  end

  # authenticated :user do
  #   root to: 'topics#index', as: :authenticated_root
  # end

  match 'home/index' => "home#index", as: :user_root, via: [:get]
end
