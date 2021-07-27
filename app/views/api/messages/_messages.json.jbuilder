messages.each do |message|
  json.set! message.id do 
    json.extract! message, :id, :title, :body, :author_id, :project_id
  end
end