Rails.application.routes.draw do
  devise_for :users
  root to: 'planning#index'
end
