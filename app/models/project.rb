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
end
