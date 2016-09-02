class CreateEndorsements < ActiveRecord::Migration[5.0]
  def change
    create_table :endorsements do |t|
      t.integer :endorsed_id, null: false
      t.integer :endorser_id, null: false
      t.references :skill, null: false
      t.timestamps
    end
    add_index :endorsements, :endorser_id
    add_index :endorsements, :endorsed_id
    add_index :endorsements, [:endorser_id, :endorsed_id], unique: true
  end
end
