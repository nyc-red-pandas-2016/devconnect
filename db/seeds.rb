Cohort.create(name: "Red Pandas", location: "New York", year: 2016)

User.create(email: 'peter@gmail.com', encrypted_password: 'password', first_name: 'peter', last_name: 'duke', cohort_id: 1, location: "New York", status: "Unemployed", goals: "Learn React Native", bio: "I love programming")

Skill.create(name: "Ruby")

Endorsement.create(endorsed_id: 1, endorser_id: 1, skill_id: 1)

Topic.create(name: "Nerd Life", description: "I geek all week")

Post.create(user_id: 1, title: "Computers man!", content: "something about computers", postable_id: 1, postable_type: "Topic")

Post.create(user_id: 1, title: "Cookies and Game Night", content: "something about cookies", postable_id: 1, postable_type: "Cohort")

Response.create(user_id: 1, post_id: 1, content: "yeah computers man..")

Response.create(user_id: 1, post_id: 2, content: "what are we playing?")
