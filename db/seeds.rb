# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all

demouser = User.create!(email: "demo@gmail.com", name: "demo", role: "demo", password: '123456')
user1 = User.create!(email: "test@gmail.com", name: "Alex Lang", role: "tester #1", password: '123456')
user2 = User.create!(email: "jane@gmail.com", name: "Jane Anderson", role: "CEO", password: '123456')
demoproject1 = Project.create!(title: "Finish Phase 4 of MVP", description: "HTML, CSS, UI and User tests", owner_id: demouser.id)
demoproject2 = Project.create!(title: "Weekly product review", description: "Enhancements / bugs and feasibility / timelines", owner_id: demouser.id)
project1 = Project.create!(title: "Update system", description: "Ongoing system updates", owner_id: user1.id)
project2 = Project.create!(title: "Customer outreach", description: "Gather valued customers and feedback", owner_id: user2.id)

# teams:{
#       1: {
#         id: 1,
#         project_id: 1
#       },
#       2: {
#         id: 2,
#         project_id: 2
#       },
#     },
#     todos:{
#       1: {
#         id: 1,
#         title: "Recruitment",
#         status: false,
#         project_id: 1,
#         assignee_id: 2
#       },
#       2: {
#         id: 2,
#         title: "Decide on office expenses",
#         status: false,
#         project_id: 2,
#         assignee_id: 1
#       },
#   },
#     messages:{
#       1: {
#         id: 1,
#         title: "Who to recruit?",
#         body: "We need more team members!",
#         project_id: 1,
#         author_id: 1
#       },
#       2: {
#         id: 2,
#         title: "Budget",
#         body: "Lets discuss our overall financial situation",
#         project_id: 2,
#         author_id: 2
#       },
#     },
#     replies:{
#       1: {
#         id: 1,
#         body: "Found a potential new advisor, I will draft the interview questions",
#         message_id: 1,
#         author_id: 2
#     },
#       2: {
#         id: 2,
#         body: "Company is doing fine, I'm worried about my own finances!",
#         message_id: 2,
#         author_id: 1
#     }
#   }