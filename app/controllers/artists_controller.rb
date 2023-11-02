# frozen_string_literal: true

class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end
end
