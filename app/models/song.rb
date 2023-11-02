# frozen_string_literal: true

class Song < ApplicationRecord
  belongs_to :artist
  belongs_to :album

  validates :title, :track_no, presence: true
  validates :title, length: { maximum: 200 }
  validates :track_no, numericality: { greater_than: 0, only_integer: true }
end
