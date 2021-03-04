import axios, { AxiosPromise } from 'axios';
import { AppComment, CommentPostParams, PaginationCommentsParams } from '../ts';
import { api } from '../../../api';

export const commentsGet = ({limit, offset}: PaginationCommentsParams): AxiosPromise<AppComment[]> => api.get(`comments`, {
  params: {
    _start: offset,
    _limit: limit,
  }
});

export const commentPost = (data: CommentPostParams): AxiosPromise<void> =>
  axios.post(`https://test.steps.me/test/testAssignComment`, {...data, postId: 1});

