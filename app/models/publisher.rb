# frozen_string_literal: true

class Publisher < ApplicationRecord
  validates :name, presence: true
  validates :name, length: { maximum: 200 }
end
