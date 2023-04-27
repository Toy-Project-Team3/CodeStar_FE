import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { instance } from '@/utils/axiosInstance';
import { AxiosError } from 'axios';
import { Post, PostResponse } from '@/types/Posts';
import * as S from '@/styles/writeStyled';
import * as B from '@/styles/buttonStyled';
import dynamic from 'next/dynamic';
import { useMutation, useQueryClient } from 'react-query';
import { createPost } from '@/utils/requests';
import { QueryClient } from 'react-query';
const Editor = dynamic(() => import('@/components/TuiEditor/Editor'), { ssr: false });
const WriteModal = dynamic(() => import('@/components/Write/WriteModal'), { ssr: false });

const WritePage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [vw, setVw] = useState<number>(800);
  const [title, setTitle] = useState<string>('');
  const titleRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const toastEditorRef = useRef();

  const { mutate, isLoading, error } = useMutation<PostResponse, AxiosError, Post>(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  // useEffect(() => {
  //   const getPost = async (writtenTitle: string) => {
  //     const response = await instance.get(`/posts/${writtenTitle}`);
  //     console.log(response);
  //     setTitle(response.data.title);
  //     setContent(response.data.content);
  //   };
  //   router.asPath === '/posts' ? null : getPost(router.asPath.slice(7));
  // }, []);

  useEffect(() => {
    const getWindowWidth = () => {
      setVw(window.innerWidth);
    };
    window.addEventListener('resize', getWindowWidth);
    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);

  const postPost = (post) => {
    // const response = await instance.post('/posts', post);
    // console.log(response);
    mutate(post);
  };

  const putEditPost = async (writtenTitle: string, post: object) => {
    const response = await instance.put(`/posts/${writtenTitle}`, post);
    console.log(response);
  };

  const getEditorContent = (params: string) => {
    setContent(params);
  };
  // const clickResetBtn = () => {
  //   toastEditorRef.current.getInstance().resetEditor();
  // };
  const clickExitBtn = () => {
    router.back();
  };
  const clickBtn = () => {
    setTitle(titleRef.current.value);
    setContent(content);
    setIsClicked(true);
  };

  return (
    <S.Background>
      {isClicked && (
        <WriteModal
          title={title}
          content={content}
          setIsClicked={setIsClicked}
          postPost={postPost}
          putEditPost={putEditPost}
        />
      )}
      {!isClicked && (
        <S.Wrapper>
          <S.TitleContainer>
            <input type="text" placeholder="제목을 입력하세요" ref={titleRef} />
          </S.TitleContainer>
          <Editor getEditorContent={getEditorContent} viewWidth={vw} content={content} ref={toastEditorRef} />
          <S.WriteFooter>
            <B.DarkLightBtn onClick={clickExitBtn}>나가기</B.DarkLightBtn>
            <div className="buttons">
              {/* <B.DarkHighlightBtn onClick={clickResetBtn}>초기화</B.DarkHighlightBtn> */}
              <B.HighlightDarkBtn onClick={clickBtn}>발행하기</B.HighlightDarkBtn>
            </div>
          </S.WriteFooter>
        </S.Wrapper>
      )}
    </S.Background>
  );
};

export default WritePage;
