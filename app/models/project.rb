# == Schema Information
#
# Table name: projects
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  owner_id    :integer          not null
#
# Indexes
#
#  index_projects_on_owner_id  (owner_id)
#  index_projects_on_title     (title) UNIQUE
#
class Project < ApplicationRecord
  validates :title, presence: true, uniqueness: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :teams,
    foreign_key: :project_id,
    class_name: :Team

  has_many :todos,
    foreign_key: :project_id,
    source: :Todo

  has_many :messages,
    foreign_key: :project_id,
    source: :Message
end
