if !@errors
  json.extract! @project, :id, :title, :description, :owner_id
end