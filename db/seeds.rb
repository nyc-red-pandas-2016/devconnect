Cohort.create(name: "Red Pandas", location: "New York", year: 2016)
Cohort.create(name: "Salamanders", location: "New York", year: 2016)
Cohort.create(name: "Wolves", location: "New York", year: 2016)
#
mentor = [true, false]

5.times do
  User.create!(email: Faker::Internet.email, password: 'password', first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, cohort_id: Cohort.all.sample.id, location: "New York", status: "Unemployed", goals: Faker::Hacker.say_something_smart, bio: Faker::Hipster.sentences(1),is_mentor: mentor.sample)
end

skills = ["Ruby", "Interview prep", "Algorithms", "Java", "Python", "React Native", "Mobile Design", "Front end design", "Javascript", "jQuery"]


skills.each do |skill|
  Skill.create(name: skill)
end

10.times do
  Endorsement.create(endorsed_id: User.all.sample.id, endorser_id: User.all.sample.id, skill_id: Skill.all.sample.id)
end

topics = ["Job opportunities", "Front-End Development", "Back-End development", "Nerd Life", "Data Nerds", "Anything Interesting"]

topics.each do |topic|
  Topic.create(name: topic, description: Faker::Hipster.paragraph(2))
end

15.times do
  Post.create(user_id: User.all.sample.id, title: Faker::Hacker.say_something_smart, content: Faker::Hipster.sentences(1), postable_id: Topic.all.sample.id, postable_type: "Topic")
end

5.times do
  Post.create(user_id: User.all.sample.id, title: Faker::Hipster.sentence, content: Faker::Hipster.sentences(1), postable_id: Cohort.all.sample.id, postable_type: "Cohort")
end

50.times do
  Response.create(user_id: User.all.sample.id, post_id: Post.all.sample.id, content: Faker::Hipster.sentence)
end

contact_type = ["LinkedIn", "Twitter", "Facebook", "Github", "Slack"]
10.times do
  contact_type.each do |type|
    ContactInfo.create(contact_type: type, contact_link: Faker::Internet.email, user_id: User.all.sample.id)
  end
end
