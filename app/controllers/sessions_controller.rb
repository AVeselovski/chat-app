class SessionsController < ApplicationController
  before_action :redirect_logged_in, only: [:new, :create]

  def new; end

  def create
    user  = User.find_by_username(params[:session][:username])

    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      flash[:success] = "Succesfully logged in!"
      redirect_to root_path
    else
      flash.now[:danger] = "Wrong credentials!"
      render 'new'
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "Succesfully logged out!"
    redirect_to login_path
  end

  private

  def redirect_logged_in
    if logged_in?
      flash[:warning] = "You good..."
      redirect_to root_path
    end
  end
end
