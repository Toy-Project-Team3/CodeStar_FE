export interface PostInterface {
  postId?: string;
  title: string;
  content?: string;
  thumbnail?: string;
  isPrivate: boolean;
  author: Author;
  commentList: CommentList[];
  likes?: Like[];
  dislikes?: Like[];
  createdAt: Date;
}

export interface Author {
  id: string;
  userId: string;
  userName: string;
  profileImg: string;
  bio?: string;
}

export interface CommentList {
  commentID: string;
  content: string;
  createdAt: Date;
  author: Author;
}

export interface Like {
  likeID: string;
}
