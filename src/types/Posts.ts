import { PostInterface } from './RequestInterface';
//Posts

//WriteModal
export interface WriteModalProps {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  mutate: (post: Post) => void;
  putEditPost: (post: Post) => void;
}

export interface Post {
  title: string;
  content: string;
  thumbnail: File;
  isPrivate: boolean;
}
type PostType = Pick<PostInterface, 'title' | 'content' | 'thumbnail' | 'isPrivate'>;

export interface PostResponse {
  data: Post;
}
