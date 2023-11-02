# frozen_string_literal: true

class AlbumsController < ApplicationController
  def create
    permitted_params = params.permit(
      :artist_id,
      :name,
      :released_date,
      :publisher_id,
      songs: %i[track_no title]
    )

    songs_attributes = permitted_params[:songs].map do |p|
      p.merge({
                artist_id: permitted_params[:artist_id],
              })
    end

    @album = Album.new
    @album.transaction do
      @album.assign_attributes(
        artist_id: permitted_params[:artist_id],
        name: permitted_params[:name],
        released_date: permitted_params[:released_date],
        publisher_id: permitted_params[:publisher_id],
        songs_attributes:
      )
      @album.save!
    end

    render status: :created
  end
end
