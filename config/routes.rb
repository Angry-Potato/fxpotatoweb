Rails.application.routes.draw do
  root 'dashboard#index'
  namespace :api do
    post '/convert', to: 'convert#index'
  end
end
