if !@errors
  @projects.each do |project|
    json.set! project.id do 
      json.extract! project, :id, :title, :description, :owner_id
    end
  end
end