class TasksController < ApplicationController
    def index
        @tasks = Task.all
        render json: @tasks
    end

    def create
        @task = Task.create(
            name: params[:name],
            checked: params[:checked],
            date: DateTime.now
        )
        render json: @task
    end

    def update
        @task = Task.find(params[:id])
        @task.update(
            checked: params[:checked]
        )
        render json: @task
    end

    def destroy
        @task = Task.find(params[:id])
        @task.destroy
        render status: 204
    end

end
