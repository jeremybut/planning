source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'bootstrap-sass', '~> 3.3', '>= 3.3.6'
gem 'devise', '~> 4.3'
gem 'haml', '~> 5.0', '>= 5.0.1'
gem 'jquery-rails', '~> 4.3', '>= 4.3.1'
gem 'pg', '~> 0.21.0'
gem 'puma', '~> 3.7'
gem 'rails', '~> 5.1.2'
gem 'sass-rails', '~> 5.0'
gem 'simple_form', '~> 3.5'
gem 'uglifier', '>= 1.3.0'

group :development do
  gem 'annotate', '~> 2.7', '>= 2.7.1'
  gem 'better_errors', '~> 2.1', '>= 2.1.1'
  gem 'binding_of_caller', '~> 0.7.2'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :development, :test do
  gem 'pry-byebug'
  gem 'pry-rails'
end
