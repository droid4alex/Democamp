# == Schema Information
#
# Table name: todos
#
#  id          :bigint           not null, primary key
#  due_date    :datetime         not null
#  status      :boolean          default(FALSE), not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  assignee_id :integer          not null
#  project_id  :integer          not null
#
# Indexes
#
#  index_todos_on_assignee_id  (assignee_id)
#  index_todos_on_project_id   (project_id)
#
class Todo < ApplicationRecord
  validates :title, :assignee_id, :project_id, presence: true
  # before_validation :ensure_done_status

  belongs_to :project_todos,
    foreign_key: :project_id,
    source: :Project

  belongs_to :assignee,
    foreign_key: :assignee_id,
    source: :User
end
