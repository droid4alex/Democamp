todos.each do |todo|
  json.set! todo.id do 
    json.extract! todo, :id, :due_date, :status, :title, :assignee_id, :project_id
  end
end