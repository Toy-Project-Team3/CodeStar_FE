export interface PostInterface {
  postId?: string;
  title: string;
  content?: string;
  thumbnail?: File;
  isPrivate: boolean;
  author?: Author;
  commentList?: CommentList[];
  likes?: Like[];
}

export interface Author {
  id: string;
  userID: string;
  userName: string;
  profileImg?: string;
}

export interface CommentList {
  commentID: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Like {
  likeID: string;
}
