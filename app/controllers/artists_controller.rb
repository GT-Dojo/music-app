# frozen_string_literal: true

class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def create
    permitted_param = params.permit(:name)

    @artist = Artist.create!(permitted_param)

    # render status: :created
  end

  def update
    permitted_params = params.require(:artist).permit(:name)

    @artist = Artist.find(params[:id])
    @artist.assign_attributes(permitted_params)
    @artist.save!
  end

  def destroy
    Artist.destroy(params[:id])
  end
end
