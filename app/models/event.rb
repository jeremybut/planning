# frozen_string_literal: true

# == Schema Information
#
# Table name: events
#
#  id           :integer          not null, primary key
#  display_name :string
#  area_id      :integer
#  employee_id  :integer
#  start_time   :datetime
#  end_time     :datetime
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Event < ApplicationRecord
  belongs_to :area
  belongs_to :employee

  validates :area, :employee, :start_time, :end_time, presence: true

  scope :between, lambda { |from, to|
    where('start_time >= ? AND end_time <= ?', from, to)
  }

  def duration
    ((end_time - start_time) / 60).round
  end
end
