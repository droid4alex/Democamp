# == Schema Information
#
# Table name: replies
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#  message_id :integer          not null
#
# Indexes
#
#  index_replies_on_author_id   (author_id)
#  index_replies_on_message_id  (message_id)
#
class Reply < ApplicationRecord
end
