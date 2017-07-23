# frozen_string_literal: true
# app/helpers/application_helper.rb
module ApplicationHelper
  def flash_class(level)
    case level.to_sym
    when :notice then 'alert alert-success'
    when :success then 'alert alert-success'
    when :error then 'alert alert-danger'
    when :alert then 'alert alert-danger'
    end
  end

  def controller?(name)
    params[:controller].present? && params[:controller].include?(name)
  end

  def bool_to_icon(value)
    '✓'.html_safe if value
  end
end
