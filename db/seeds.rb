# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(email: "test5000@gmail.com", name: "Alex Lang", role: "tester #1", password: '123456')
user2 = User.create!(email: "jdoe9182@gmail.com", name: "Jane Anderson", role: "CEO", password: '123456')
