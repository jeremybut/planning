class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :display_name
      t.integer :work_time

      t.timestamps
    end
  end
end
