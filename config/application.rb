require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Planning
  class Application < Rails::Application
    config.load_defaults 5.1

    # I18n locales
    I18n.enforce_available_locales = false
    I18n.config.available_locales = :fr
    config.i18n.default_locale = :fr
    config.i18n.fallbacks = [:fr]

    # Assets Paths
    config.assets.precompile = %w[manifest.js]

    config.assets.paths << Rails.root
                                .join('app', 'assets', 'fonts', 'lib', 'vendor')

    config.autoload_paths += Dir[Rails.root.join('lib').to_s,
                                 Rails.root.join(
                                   'app', 'models', 'concerns'
                                 ).to_s]

    config.assets.precompile += %w[*.png *.jpg *.jpeg *.gif]

    Dir.glob("#{Rails.root}/vendor/assets/**/").each do |path|
      config.assets.paths << path
    end
  end
end
