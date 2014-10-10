class UsersController < ApplicationController
  def new
    @user = User.new
  end


  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      flash[:created] = "Account Created"
      redirect_to("/")
    else
      redirect_to("/")
      flash[:messages] = "The email address you entered is taken/invalid or the password you entered is invalid."
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
