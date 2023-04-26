import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import EmptyThumbnail from '../EmptyThumbnail';
import { Button } from '@/components/Button';
import * as S from '@/styles/writeModalStyled';
import * as B from '@/styles/buttonStyled';

// interface WriteModalProps {
//   title: string;
//   contents:
// }

const WriteModal = (props: any) => {
  const [isActive, setIsActive] = useState(true);
  const setIsClicked = props.setIsClicked;
  const title = props.title;
  const contents = props.contents;
  const [thumbnail, setThumbnail] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const createdAt = props.createdAt;
  const [post, setPost] = useState({
    title,
    contents,
    thumbnail,
    isPrivate,
    createdAt,
  });
  const putEditWrite = props.putEditWrite;

  const uploadThumbnail = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setThumbnail(reader.result as string);
    };
  };
  const clickPostBtn = () => {
    if (title) {
      console.log('title:', title);
      console.log('contents:', contents);
      console.log('thumbnail:', thumbnail);
      console.log('isPrivate:', isPrivate);
      console.log('createdAt:', createdAt);
      setPost({ title, contents, thumbnail, isPrivate, createdAt });
      putEditWrite({ title, contents, thumbnail, isPrivate, createdAt });
    } else {
      alert('제목을 작성해주세요');
    }
  };
  const addClassName = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    setIsPrivate(false);
  }, []);
  return (
    <>
      <S.Background>
        <S.Container>
          <div className="item">
            <h3>포스트 썸네일</h3>
            <div className={thumbnail && 'btnContainer'}>
              {thumbnail && (
                <B.UnderlinedBtn
                  onClick={() => {
                    setThumbnail('');
                  }}
                >
                  제거
                </B.UnderlinedBtn>
              )}
            </div>
            <div className="thumbnailImgContainer">
              {thumbnail ? (
                <Image src={thumbnail} alt="thumbnail" fill object-fit="cover" />
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
            <h3>제목</h3>
            <h4>{title}</h4>
          </div>
          <div className="item">
            <h3>공개 설정</h3>
            <div className="buttons">
              <B.DarkLightBtn
                onClick={() => {
                  setIsPrivate(false);
                  addClassName();
                }}
                className={isActive && 'active'}
              >
                전체공개
              </B.DarkLightBtn>
              <B.DarkLightBtn
                onClick={() => {
                  setIsPrivate(true);
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
