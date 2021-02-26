# == Schema Information
#
# Table name: teams
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  member_id  :integer          not null
#  project_id :integer          not null
#
# Indexes
#
#  index_teams_on_member_id   (member_id)
#  index_teams_on_project_id  (project_id)
#
require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
