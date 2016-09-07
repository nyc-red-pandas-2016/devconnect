# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160902161546) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cohorts", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "location",   null: false
    t.integer  "year",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contact_infos", force: :cascade do |t|
    t.string   "contact_type", null: false
    t.string   "contact_link", null: false
    t.integer  "user_id",      null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["user_id"], name: "index_contact_infos_on_user_id", using: :btree
  end

  create_table "endorsements", force: :cascade do |t|
    t.integer  "endorsed_id", null: false
    t.integer  "endorser_id", null: false
    t.integer  "skill_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["endorsed_id"], name: "index_endorsements_on_endorsed_id", using: :btree
    t.index ["endorser_id"], name: "index_endorsements_on_endorser_id", using: :btree
    t.index ["skill_id"], name: "index_endorsements_on_skill_id", using: :btree
  end

  create_table "posts", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.string   "title",         null: false
    t.text     "content",       null: false
    t.integer  "postable_id",   null: false
    t.string   "postable_type", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["user_id"], name: "index_posts_on_user_id", using: :btree
  end

  create_table "responses", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "post_id",    null: false
    t.text     "content",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_responses_on_post_id", using: :btree
    t.index ["user_id"], name: "index_responses_on_user_id", using: :btree
  end

  create_table "skills", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "topics", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "first_name",                             null: false
    t.string   "last_name",                              null: false
    t.integer  "cohort_id",                              null: false
    t.string   "cohort_name",                            null: false
    t.string   "cohort_location",                        null: false
    t.integer  "cohort_year",                            null: false
    t.string   "location"
    t.integer  "contactinfo_id"
    t.string   "status"
    t.string   "place_of_work"
    t.string   "position"
    t.boolean  "is_mentor",              default: false
    t.text     "goals"
    t.text     "experience"
    t.text     "bio"
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.index ["cohort_id"], name: "index_users_on_cohort_id", using: :btree
    t.index ["contactinfo_id"], name: "index_users_on_contactinfo_id", using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
