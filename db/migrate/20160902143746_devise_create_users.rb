class DeviseCreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :cohort_name, null: false
      t.string :cohort_location, null: false
      t.integer :cohort_year, null: false
      t.references :cohort, null: false
      t.string :location
      t.references :contactinfo
      t.string :status
      t.string :place_of_work
      t.string :position
      t.boolean :is_mentor, default: false
      t.text :goals
      t.text :experience
      t.text :bio

      # <!-- <div class="field">
      #   <%= f.label :cohortlocation %><br />
      #   <%= f.text_field :cohortlocation, autofocus: true %>
      # </div> -->

      # <div class="field">
      #   <%= f.label :currentlocation %><br />
      #   <%= f.text_field :currentlocation, autofocus: true %>
      # </div>
      #
      # <div class="field">
      #   <%= f.label :mentor %><br />
      #   <%= f.text_field :mentor, autofocus: true %>
      # </div>
      #
      # <div class="field">
      #   <%= f.label :firstskill %><br />
      #   <%= f.text_field :firstskill, autofocus: true %>
      # </div>
      #
      # <div class="field">
      #   <%= f.label :secondskill %><br />
      #   <%= f.text_field :secondskill, autofocus: true %>
      # </div>
      #
      # <div class="field">
      #   <%= f.label :thridskill %><br />
      #   <%= f.text_field :thirdskill, autofocus: true %>
      # </div>
      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.inet     :current_sign_in_ip
      t.inet     :last_sign_in_ip

      ## Confirmable
      # t.string   :confirmation_token
      # t.datetime :confirmed_at
      # t.datetime :confirmation_sent_at
      # t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at


      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
    # add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,         unique: true
  end
end
