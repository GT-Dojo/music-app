# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'application#index'

  resources :artists, only: %i[index create update destroy] do
    resources :albums, only: %i[create]
  end

  get '*path', to: 'application#index'
end
