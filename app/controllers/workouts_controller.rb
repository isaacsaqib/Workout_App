class WorkoutsController < ApplicationController
  def index
    @user = current_user
    @workouts = @user.workouts
  end

  def new
    @workout = Workout.new
    @user = current_user

     respond_to do |format|
      format.html
      format.json {render :json => @workout}
    end
  end

  def create
    @workout = Workout.create(:video_url => params[:video_url], :user_id => params[:user_id])
    @user = current_user
    respond_to do |format|
      format.html {}
      format.json { render json: @workout }
    end

  end


  # def workout_params
  #   params.require(@workout).permit(:video_url)
  # end


end
