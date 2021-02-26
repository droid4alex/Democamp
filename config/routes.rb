# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#             project_todos GET    /projects/:project_id/todos(.:format)                                                    todos#index
#          project_messages GET    /projects/:project_id/messages(.:format)                                                 messages#index
#                  projects POST   /projects(.:format)                                                                      projects#create
#                   project GET    /projects/:id(.:format)                                                                  projects#show
#                           PATCH  /projects/:id(.:format)                                                                  projects#update
#                           PUT    /projects/:id(.:format)                                                                  projects#update
#                           DELETE /projects/:id(.:format)                                                                  projects#destroy
#                     todos POST   /todos(.:format)                                                                         todos#create
#                      todo GET    /todos/:id(.:format)                                                                     todos#show
#                           PATCH  /todos/:id(.:format)                                                                     todos#update
#                           PUT    /todos/:id(.:format)                                                                     todos#update
#                           DELETE /todos/:id(.:format)                                                                     todos#destroy
#           message_replies GET    /messages/:message_id/replies(.:format)                                                  replies#index
#                  messages POST   /messages(.:format)                                                                      messages#create
#                   message GET    /messages/:id(.:format)                                                                  messages#show
#                           PATCH  /messages/:id(.:format)                                                                  messages#update
#                           PUT    /messages/:id(.:format)                                                                  messages#update
#                           DELETE /messages/:id(.:format)                                                                  messages#destroy
#                   replies POST   /replies(.:format)                                                                       replies#create
#                     reply PATCH  /replies/:id(.:format)                                                                   replies#update
#                           PUT    /replies/:id(.:format)                                                                   replies#update
#                           DELETE /replies/:id(.:format)                                                                   replies#destroy
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

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
