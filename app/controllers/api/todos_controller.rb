class Api::TodosController < ApplicationController
  def index
  @projects = current_user.owned_projects
  @project = Project.find(params[:project_id])
    if @project
      @todos = @project.todos
      render 'api/todos/index'
    else
      render 'api/todos/index', status: 404
    end
  end

  def show
    @todo = Todo.find(params[:id])
    if @todo
      render 'api/todos/show'
    else
      render 'api/todos/show', status: 404
    end
  end

  def create
    @todo = Todo.create(todo_params)
    if @todo.save
      render 'api/todos/show'
    else
      @errors = @todo.errors.full_messages
      render 'api/todos/show', status: 422
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo
      if @todo.update(todo_params)
        render 'api/todos/show'
      else
        @errors = @todo.errors.full_messages
        render 'api/todos/show', status: 422
      end
    else
      render 'api/todos/show', status: 404
    end
  end

  def todo_params
    params.require(:todo).permit(:due_date, :status, :title, :assignee_id, :project_id)
  end

end
