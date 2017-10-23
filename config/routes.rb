Rails.application.routes.draw do
  devise_for :users
  root to: 'planning#index'

  resources :planning, only: :create do
    get :events, on: :collection
  end
end
