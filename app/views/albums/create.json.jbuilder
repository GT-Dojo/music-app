# frozen_string_literal: true

json.id @album.id
json.name @album.name
json.released_date @album.released_date

json.songs do
  json.array! @album.songs do |song|
    json.id song.id
    json.track_no song.track_no
    json.title song.title
  end
end
