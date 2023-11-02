# frozen_string_literal: true

class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.belongs_to :album, foreign_key: true
      t.belongs_to :artist, foreign_key: true

      t.text :title, null: false
      t.integer :track_no, null: false
      t.jsonb :metadata

      t.timestamps
    end
  end
end
