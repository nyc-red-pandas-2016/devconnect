class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.references :user, null: false
      t.string :title, null: false
      t.text :content, null: false
      t.integer :postable_id, null: false
      t.string :postable_type, null: false

      t.timestamps null: false
    end
  end
end
