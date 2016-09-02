class CreateContactInfos < ActiveRecord::Migration[5.0]
  def change
    create_table :contact_infos do |t|
      t.string :contact_type, null:false
      t.string :contact_link, null:false
      t.timestamps null: false
    end
  end
end
