import { executeApi } from './api';

export interface Artist {
  id: number;
  name: string;
}

export type CreateArtistData = Pick<Artist, 'name'>;

export function apiCreateArtist(roleId: Artist['id'], data: CreateArtistData) {
  return executeApi<Artist>({
    url: `/artists`,
    method: 'POST',
    data,
  });
}
