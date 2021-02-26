Rails.application.routes.draw do
    
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  resources :projects, only: [:show, :create, :update, :destroy] do
    resources :todos, only: [:index]
    resources :messages, only: [:index]
    # resources :teams, only: [:show, :create, :update]
  end

  resources :todos, only: [:show, :create, :update, :destroy]

  resources :messages, only: [:show, :create, :update, :destroy] do
    resources :replies, only: [:index]
  end

  resources :replies, only: [:create, :update, :destroy]

end