if !@errors
  json.extract! @message, :id, :title, :body, :author_id, :project_id
end