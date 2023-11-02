# frozen_string_literal: true

class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.text :name, null: false
      t.date :debut_date
      t.timestamps
    end
  end
end
