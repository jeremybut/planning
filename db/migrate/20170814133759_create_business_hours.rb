class CreateBusinessHours < ActiveRecord::Migration[5.1]
  def change
    create_table :business_hours do |t|
      t.references :area, foreign_key: true
      t.time :opens
      t.time :closes
      t.integer :day
      t.integer :max_employee

      t.timestamps
    end
  end
end
