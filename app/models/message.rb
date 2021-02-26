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
  validates :title, :body, :author_id, :project_id, presence: true

  belongs_to :project_messages,
    foreign_key: :project_id,
    source: :Project

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
