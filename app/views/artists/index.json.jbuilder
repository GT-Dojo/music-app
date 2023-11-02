# frozen_string_literal: true

json.data do
  json.array! @artists do |artist|
    json.call(artist,
              :id,
              :name,
              :created_at,
              :updated_at)
  end
end
