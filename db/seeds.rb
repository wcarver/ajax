# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

CATS = %w(breakfast earl curie markov gizmo kiki sally)

CATS.each do |cat|
  u = User.create!(username: cat, password: "#{cat}#{cat}")
end

MESSAGES = [Faker::Hipster.sentence]
faker_block = Proc.new{Faker::Hipster.sentence}

User.all.each do |user|
  140.times do
    msg = faker_block.call
    Tweet.create!(user_id: user.id, content: msg, created_at: rand(10).years.ago)
  end
end
