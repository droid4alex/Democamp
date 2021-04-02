class MessagesController < ApplicationController
 def index
  @project = Project.find(params[:project_id])
  if @project
    @messages = @project.messages
    render 'api/messages/index'
  else
    @errors = ['Project not found']
    render 'api/messages/index', status: 404
  end
 end

  def show
    @message = Message.find(params[:id])
    if @message
      render 'api/messages/show'
    else
      render 'api/messages/show', status: 404
    end
  end

  def create
    @message = Message.create(message_params)
    if @message.save
      render 'api/messages/show'
    else
      @errors = @message.errors.full_messages
      render 'api/messages/show', status: 422
    end
  end

  def update
    @message = Message.find(params[:id]) 
    if @message
      if @message.update(message_params)
        render 'api/messages/show'
      else
        @errors = @message.errors.full_messages
        render 'api/messages/show', status: 422
      end
    else
      render 'api/messages/show', status: 404
    end
  end

  def message_params
    params.require(:message).permit(:title, :body, :author_id, :project_id)
  end
end
