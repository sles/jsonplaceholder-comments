export type AppComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type PaginationCommentsParams = {
  limit: number;
  offset: number;
}

export type CommentPostParams = Pick<AppComment, 'body' | 'name' | 'email'>;