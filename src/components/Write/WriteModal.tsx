import React, { useState } from 'react';
import Image from 'next/image';
import EmptyThumbnail from '@/asset/img/IconEmptyThumbnail';
import * as S from '@/styles/writeModalStyled';
import * as B from '@/styles/buttonStyled';
import { File } from 'buffer';
import { Post, WriteModalProps } from '@/types/Posts';

const WriteModal: React.FC<Props> = (props: WriteModalProps) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const setIsClicked = props.setIsClicked;
  const title = props.title;
  const content = props.content;
  const [thumbnailSrc, setThumbnailSrc] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<File>();
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [post, setPost] = useState<Post>({
    title: title,
    content: content,
    thumbnail: thumbnail,
    isPrivate: isPrivate,
  });
  const postPost = props.postPost;
  const putEditPost = props.putEditPost;

  const formData = new FormData();

  for (const key in post) {
    formData.append(key, post[key]);
  }

  const uploadThumbnail = async (e) => {
    const file: File = e.target.files[0];
    const url = URL.createObjectURL(file);
    // console.log(url);
    // console.log(typeof url);
    setThumbnail(file);
    setThumbnailSrc(url);
  };
  const clickPostBtn = async () => {
    if (title) {
      const post: Post = { title: title, content: content, thumbnail: thumbnail, isPrivate: isPrivate };
      console.log(post);
      console.log(formData);
      await setPost(post);
      postPost(formData);
      setIsClicked(false);
      // putEditPost({ title, content, thumbnail, isPrivate });
    } else {
      alert('제목을 작성해주세요');
    }
  };
  const addClassName = () => {
    setIsActive(!isActive);
  };
  // useEffect(() => {
  //   setIsPrivate(false);
  // }, []);
  return (
    <>
      <S.Background>
        <S.Container>
          <div className="thumbnailContainer">
            <h3>포스트 썸네일</h3>
            <div className={thumbnailSrc && 'btnContainer'}>
              {thumbnail && (
                <B.UnderlinedBtn
                  onClick={() => {
                    setThumbnailSrc('');
                  }}
                >
                  제거
                </B.UnderlinedBtn>
              )}
            </div>

            <div className="thumbnailImgContainer">
              {thumbnailSrc ? (
                <Image src={thumbnailSrc} alt="thumbnail" fill object-fit="cover" />
              ) : (
                <div className="emptyThumbnail">
                  <EmptyThumbnail />
                  <input
                    onChange={uploadThumbnail}
                    accept="image/*"
                    type="file"
                    id="uploadBtn"
                    name="uploadBtn"
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="uploadBtn">
                    <span>썸네일 업로드</span>
                  </label>
                </div>
              )}
            </div>
          </div>
          <div className="titleContainer">
            <h3>제목</h3>
            <h4>{title}</h4>
          </div>
          <div className="item">
            <h3>공개 설정</h3>
            <div className="buttons">
              <B.DarkLightBtn
                onClick={() => {
                  setIsPrivate(isPrivate);
                  addClassName();
                }}
                className={isActive && 'active'}
              >
                전체공개
              </B.DarkLightBtn>
              <B.DarkLightBtn
                onClick={() => {
                  setIsPrivate(!isPrivate);
                  addClassName();
                }}
                className={!isActive && 'active'}
              >
                비공개
              </B.DarkLightBtn>
            </div>
          </div>
          <div className="item">
            <div className="buttons">
              <B.DarkHighlightBtn
                onClick={() => {
                  setIsClicked(false);
                }}
              >
                <span>취소</span>
              </B.DarkHighlightBtn>
              <B.HighlightDarkBtn onClick={clickPostBtn}>
                <span>출간하기</span>
              </B.HighlightDarkBtn>
            </div>
          </div>
        </S.Container>
      </S.Background>
    </>
  );
};

export default WriteModal;
