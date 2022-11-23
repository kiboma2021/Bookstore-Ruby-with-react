Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :books
    end
  end

  resources :books
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
