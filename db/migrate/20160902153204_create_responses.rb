class CreateResponses < ActiveRecord::Migration[5.0]
  def change
    create_table :responses do |t|
      t.references :user, null: false
      t.references :post, null: false
      t.text :content, null: false
      t.timestamps null: false
    end
  end
end
