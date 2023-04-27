import { instance } from '@/utils/axiosInstance';
import { PostInterface } from '@/types/RequestInterface';
import { User } from '@/types/User';





export const getPosts = async () => {
  const res = await instance.get<PostInterface[]>(`posts`);
  return res.data;
};

export const getPost = async (userId: String, postId: String) => {
  const res = await instance.get<PostInterface>(`posts/${userId}/${postId}`);
  return res.data;
};

export const getblogPosts = async (userId: string) => {
  const res = await instance.get<PostInterface[]>(`posts/${userId}`);
  return res.data;
};

export const createPost = async (post: any) => {
  const response = await instance.post('posts', post);
  return response.data;
};

export const updatePost = async (postId: string) => {
  const response = await instance.put(`posts/${postId}`)
  return response.data
}

export const deletePost = async (userId: string, postId: string)=> {
 const response = await instance.delete(`posts/${userId}/${postId}`)
 return response.data
}

export const postLikeDislike = async (userId: String, postId: String) => {
  const response = await instance.post(`posts/${userId}/${postId}/like`);
  return response.data;
};

export const postComment = async (userId: String, postId: String, post: string) => {
  const response = await instance.post(`posts/${userId}/${postId}/comments`, post);
  return response.data;
};


export const getMyInfo = async (userId: string): Promise<User>=> {
 const response = await instance.get(`auth/mypage/${userId}`)
 return response.data
}

export const updateMyInfo = async (userId: string): Promise<User>=> {
 const response = await instance.get(`auth/mypage/${userId}`)
 return response.data
}