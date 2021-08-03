# Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#         api_user_projects GET    /api/users/:user_id/projects(.:format)                                                   api/projects#index {:format=>:json}           api_user_todos GET    /api/users/:user_id/todos(.:format)                                                      api/todos#index {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#              api_projects GET    /api/projects(.:format)                                                                  api/projects#index {:format=>:json}                          POST   /api/projects(.:format)                                                                  api/projects#create {:format=>:json}
#               api_project GET    /api/projects/:id(.:format)                                                              api/projects#show {:format=>:json}
#                           PATCH  /api/projects/:id(.:format)                                                              api/projects#update {:format=>:json}
#                           PUT    /api/projects/:id(.:format)                                                              api/projects#update {:format=>:json}
#                           DELETE /api/projects/:id(.:format)                                                              api/projects#destroy {:format=>:json}
#                 api_todos GET    /api/todos(.:format)                                                                     api/todos#index {:format=>:json}
#                           POST   /api/todos(.:format)                                                                     api/todos#create {:format=>:json}
#                  api_todo GET    /api/todos/:id(.:format)                                                                 api/todos#show {:format=>:json}
#                           PATCH  /api/todos/:id(.:format)                                                                 api/todos#update {:format=>:json}
#                           PUT    /api/todos/:id(.:format)                                                                 api/todos#update {:format=>:json}
#                           DELETE /api/todos/:id(.:format)                                                                 api/todos#destroy {:format=>:json}
#              api_messages GET    /api/messages(.:format)                                                                  api/messages#index {:format=>:json}                          POST   /api/messages(.:format)                                                                  api/messages#create {:format=>:json}
#               api_message GET    /api/messages/:id(.:format)                                                              api/messages#show {:format=>:json}
#                           PATCH  /api/messages/:id(.:format)                                                              api/messages#update {:format=>:json}
#                           PUT    /api/messages/:id(.:format)                                                              api/messages#update {:format=>:json}
#                           DELETE /api/messages/:id(.:format)                                                              api/messages#destroy {:format=>:json}
#               api_replies GET    /api/replies(.:format)                                                                   api/replies#index {:format=>:json}
#                           POST   /api/replies(.:format)                                                                   api/replies#create {:format=>:json}                api_reply GET    /api/replies/:id(.:format)                                                               api/replies#show {:format=>:json}
#                           PATCH  /api/replies/:id(.:format)                                                               api/replies#update {:format=>:json}                          PUT    /api/replies/:id(.:format)                                                               api/replies#update {:format=>:json}                          DELETE /api/replies/:id(.:format)                                                               api/replies#destroy {:format=>:json}
#                 api_teams POST   /api/teams(.:format)                                                                     api/teams#create {:format=>:json}
#                  api_team GET    /api/teams/:id(.:format)                                                                 api/teams#show {:format=>:json}
#                           PATCH  /api/teams/:id(.:format)                                                                 api/teams#update {:format=>:json}
#                           PUT    /api/teams/:id(.:format)                                                                 api/teams#update {:format=>:json}
#                           DELETE /api/teams/:id(.:format)                                                                 api/teams#destroy {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show       rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create


Rails.application.routes.draw do
    
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show] do
      resources :projects, only: [:index]
      resources :todos, only: [:index]
    end
    resources :projects, only: [:index, :show, :create, :update, :destroy]
    resources :todos, only: [:index, :show, :create, :update, :destroy]
    resources :messages, only: [:index, :show, :create, :update, :destroy]
    resources :replies, only: [:index, :show, :create, :update, :destroy]
    resources :teams, only: [:show, :create, :update, :destroy]
  
    #not nested, send project ID through frontend + controller
    # resources :projects, only: [:show, :create, :update, :destroy] do
    #   resources :todos, only: [:index]
    #   resources :messages, only: [:index]
    #   # resources :teams, only: [:show, :create, :update]
    # end 
      
    #not nested, send project ID and message ID through frontend + controller
    # resources :messages, only: [:show, :create, :update, :destroy] do
    #   resources :replies, only: [:index]
    # end 
  
  end



end
