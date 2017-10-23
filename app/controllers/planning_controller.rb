# frozen_string_literal: true

class PlanningController < ApplicationController
  def events
    res = []
    events = Event.between(params[:start], params[:end])
                  .includes(:employee, :area)

    events.each do |event|
      res << {
        id: event.id,
        title: event.employee.display_name,
        start: event.start_time,
        end: event.end_time,
        color: event.area.color
      }
    end

    render json: res
  end

  def create
    Area.schedule(planning_params[:date].to_date)
  end

  private

  def planning_params
    params.require(:planning).permit(:date)
  end
end
