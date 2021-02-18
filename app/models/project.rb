class Project < ApplicationRecord
  validates :title, presence: true, uniqueness: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
end
