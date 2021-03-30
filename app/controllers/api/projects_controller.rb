class ProjectsController < ApplicationController
  def index
    # @projects = current_user.owned_projects
    @projects = Project.all
    if (Object.keys(@projects).length === 0)
      @errors = ['Projects not found']
    end
    render "api/projects/index.json.jbuilder"
  end

  def show
    begin
      @project = Project.find(params[:id])
    rescue
      @errors = ['Project not found']
    end
    if @project
      render 'api/projects/show.json.jbuilder'
    else
      render 'api/projects/show.json.jbuilder', status: 404
    end
  end

  def create
    @project = Project.create(project_params)
    @project.owner_id = current_user.id
    if @project.save
      # save current_user.user_teams
      render 'api/projects/show.json.jbuilder'
    else
      # @errors = @project.errors.full_messages
      render 'api/projects/show.json.jbuilder', status: 422
    end
  end

  def project_params
    params.require(:project).permit(:description, :title)
  end
end
