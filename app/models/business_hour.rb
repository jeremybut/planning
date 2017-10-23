# frozen_string_literal: true

# == Schema Information
#
# Table name: business_hours
#
#  id           :integer          not null, primary key
#  area_id      :integer
#  opens        :time
#  closes       :time
#  day          :integer
#  max_employee :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class BusinessHour < ApplicationRecord
  belongs_to :area
  validates :closes, :opens, :area, presence: true

  scope :by_day, ->(wday) { find_by(day: wday) }

  private

  def open?
    opening_hours.where('? BETWEEN opens AND closes', Time.zone.now).any?
  end
end
