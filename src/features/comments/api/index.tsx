import { AxiosPromise } from 'axios';
import { AppComment, PaginationCommentsParams } from '../ts';
import { api } from '../../../api';

export const commentsGet = ({limit, offset}: PaginationCommentsParams): AxiosPromise<AppComment[]> => api.get(`comments`, {
  params: {
    _start: offset,
    _limit: limit,
  }
});
