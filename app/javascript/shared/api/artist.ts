import { executeApi } from './api';

export interface Artist {
  id: number;
  name: string;
}

export type CreateArtistData = Pick<Artist, 'name'>;

export function apiCreateArtist(data: CreateArtistData) {
  return executeApi<Artist>({
    url: `/artists`,
    method: 'POST',
    data,
  });
}
