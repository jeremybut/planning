# frozen_string_literal: true

# == Schema Information
#
# Table name: areas
#
#  id           :integer          not null, primary key
#  display_name :string
#  color        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Area < ApplicationRecord
  has_many :business_hours, dependent: :destroy
  has_many :events, dependent: :destroy

  validates :display_name, presence: true

  def self.schedule(date)
    cweek = date.cweek
    year = date.year

    Event.between(
      Date.commercial(year, cweek, 1), Date.commercial(year, cweek, 6)
    ).destroy_all

    ranges = (
      Date.commercial(year, cweek, 1)..Date.commercial(year, cweek, 6)
    ).to_a

    all.find_each do |area|
      ranges.each do |day|
        business_hour = area.business_hours.by_day(day.wday)

        employee_ids = Employee.available(day).ids
        employee_ids.delete_if do |e|
          Employee.find(e).unavailable?(day.beginning_of_week, day.end_of_week)
        end

        day = day.to_datetime
        employee_ids.sample(business_hour.max_employee).each do |employee_id|

          Event.create(
            area: area,
            employee_id: employee_id,
            start_time: day.change(
              hour: business_hour.opens.hour, min: business_hour.opens.min
            ),
            end_time: day.change(
              hour: business_hour.closes.hour, min: business_hour.closes.min
            )
          )
        end
      end
    end
  end
end
