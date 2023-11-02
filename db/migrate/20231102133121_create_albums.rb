# frozen_string_literal: true

class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.belongs_to :artist, foreign_key: true
      t.belongs_to :publisher, foreign_key: true
      t.text :name, null: false
      t.date :released_date, null: false

      t.timestamps
    end
  end
end
