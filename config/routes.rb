Rails.application.routes.draw do


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
