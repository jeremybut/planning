# frozen_string_literal: true

# == Schema Information
#
# Table name: employees
#
#  id           :integer          not null, primary key
#  display_name :string
#  work_time    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Employee < ApplicationRecord
  has_many :events

  validates :display_name, :work_time, presence: true

  scope :available, lambda { |day|
    where.not(id:
      joins(:events)
        .where(
          'start_time >= ? AND end_time <= ?',
          day.to_datetime.beginning_of_day, day.to_datetime.end_of_day
        ).ids)
  }

  def unavailable?(from, to)
    events.between(from, to).map(&:duration).sum >= work_time
  end
end
