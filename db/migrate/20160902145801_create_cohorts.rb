class CreateCohorts < ActiveRecord::Migration[5.0]
  def change
    create_table :cohorts do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.integer :year, null: false
      t.timestamps null: false
    end
  end
end
