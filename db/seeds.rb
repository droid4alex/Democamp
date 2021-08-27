# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'
User.destroy_all
Project.destroy_all
Team.destroy_all
Todo.destroy_all
Message.destroy_all
Reply.destroy_all

demouser = User.create!(email: "demo@gmail.com", name: "Demo", role: "Demo", password: '123456')
user1 = User.create!(email: "test@gmail.com", name: "Alex Lang", role: "Tester", password: '123456')
user2 = User.create!(email: "jane@gmail.com", name: "Jane Anderson", role: "CEO", password: '123456')
demoproject1 = Project.create!(title: "Weekly Product Review", description: "Enhancements / bugs and feasibility / timelines", owner_id: demouser.id)
demoproject2 = Project.create!(title: "Redesign Website Template", description: "HTML, CSS, UI and User tests", owner_id: demouser.id)
demoproject3 = Project.create!(title: "Design JavaScript Game", description: "CSS, UI and User tests", owner_id: demouser.id)
demoproject4 = Project.create!(title: "Design LiveChat Application", description: "UI and User tests", owner_id: demouser.id)
demoproject5 = Project.create!(title: "Random Number Generator", description: "UI", owner_id: demouser.id)
demoproject6 = Project.create!(title: "Web Scraping Using Python", description: "User tests", owner_id: demouser.id)
demoproject7 = Project.create!(title: "Build Online Store", description: "Enhancements / bugs and feasibility / timelines", owner_id: demouser.id)
demoproject8 = Project.create!(title: "Contribute to Open Source", description: "HTML, CSS, UI and User tests", owner_id: demouser.id)
demoproject9 = Project.create!(title: "Finish Phase 1 of MVP", description: "CSS, UI and User tests", owner_id: demouser.id)
demoproject10 = Project.create!(title: "Finish Phase 2 of MVP", description: "UI and User tests", owner_id: demouser.id)
demoproject11 = Project.create!(title: "Finish Phase 3 of MVP", description: "UI", owner_id: demouser.id)
demoproject12 = Project.create!(title: "Finish Phase 4 of MVP", description: "User tests", owner_id: demouser.id)
project1 = Project.create!(title: "Update system", description: "Ongoing system updates", owner_id: user1.id)
project2 = Project.create!(title: "Customer outreach", description: "Gather valued customers and feedback", owner_id: user2.id)
team1 = Team.create!(project_id: demoproject1.id, member_id: demouser.id)
team2 = Team.create!(project_id: demoproject1.id, member_id: user1.id)
team3 = Team.create!(project_id: demoproject1.id, member_id: user2.id)
team4 = Team.create!(project_id: demoproject2.id, member_id: demouser.id)
team5 = Team.create!(project_id: demoproject2.id, member_id: user2.id)
todo1 = Todo.create!(title: "Recruitment", status: false, project_id: demoproject1.id, assignee_id: demouser.id, due_date: (DateTime.now()))
todo2 = Todo.create!(title: "Decide on ice cream expenses", status: false, project_id: demoproject1.id, assignee_id: demouser.id, due_date: (DateTime.now() + 1))
todo3 = Todo.create!(title: "Decide on office expenses", status: false, project_id: demoproject2.id, assignee_id: demouser.id, due_date: (DateTime.now() + 2))
todo4 = Todo.create!(title: "Talk with stakeholders who have concerns", status: false, project_id: demoproject1.id, assignee_id: demouser.id, due_date: (DateTime.now() + 7))
todo5 = Todo.create!(title: "Talk with customers", status: false, project_id: demoproject1.id, assignee_id: demouser.id, due_date: (DateTime.now() + 11))
todo6 = Todo.create!(title: "Collect ideas from team", status: false, project_id: demoproject2.id, assignee_id: demouser.id, due_date: (DateTime.now() + 12))
todo7 = Todo.create!(title: "Write drafts of letters and memos", status: false, project_id: demoproject1.id, assignee_id: demouser.id, due_date: (DateTime.now() + 18))
todo8 = Todo.create!(title: "Organize public profile", status: false, project_id: demoproject1.id, assignee_id: demouser.id, due_date: (DateTime.now() + 23))
todo9 = Todo.create!(title: "Copy flyers for distribution", status: false, project_id: demoproject2.id, assignee_id: demouser.id, due_date: (DateTime.now() + 28))
message1 = Message.create!(title: "Who to recruit?", body: "We need more team members!", project_id: demoproject1.id, author_id: demouser.id)
message2 = Message.create!(title: "Budget", body: "Lets discuss our overall financial situation", project_id: demoproject1.id, author_id: user1.id)
message3 = Message.create!(title: "Send me all open purchase orders", body: "I need to check something", project_id: demoproject1.id, author_id: demouser.id)
message4 = Message.create!(title: "Bring your dog to the office!", body: "Woof Woof", project_id: demoproject1.id, author_id: user1.id)
message5 = Message.create!(title: "Free Lunch", body: "In the breakroom", project_id: demoproject1.id, author_id: demouser.id)
message6 = Message.create!(title: "Award ceremony prep", body: "Award ceremony prep comments go here...", project_id: demoproject1.id, author_id: user1.id)
message7 = Message.create!(title: "Test message title", body: "Test message body", project_id: demoproject1.id, author_id: demouser.id)
reply1 = Reply.create!(body: "Found a potential new advisor, I will draft the interview questions", message_id: message1.id, author_id:user1.id)
reply2 = Reply.create!(body: "Company is doing fine, I'm worried about my own finances!", message_id: message2.id, author_id:demouser.id)
