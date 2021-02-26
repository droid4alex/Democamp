# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#  project_id :integer          not null
#
# Indexes
#
#  index_messages_on_author_id   (author_id)
#  index_messages_on_project_id  (project_id)
#
class Message < ApplicationRecord
end
