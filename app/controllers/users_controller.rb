class UsersController < ApplicationController
  def new
    @user = User.new
  end


  def create
    @user = User.new(user_params)
       if @user.save
        redirect_to("/")
      else
        render :new
      end
  end

  def show
    @user = User.find_by(id: params[:id])
    @users_workouts = @user.workouts

    respond_to do |format|
      format.html
      format.json { render :json => @users_workouts}
    end

  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end


end
