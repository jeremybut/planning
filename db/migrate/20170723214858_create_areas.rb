class CreateAreas < ActiveRecord::Migration[5.1]
  def change
    create_table :areas do |t|
      t.string :display_name
      t.string :color

      t.timestamps
    end
  end
end
