import Layout from '@/components/Layout';
import React from 'react';
import * as S from '@/styles/postStyled';
import IconLike from '../../../public/IconLike.svg';
import IconBad from '../../../public/IconBad.svg';

function Index() {
  const [scrollYValue, setScrollYValue] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 290 ? setScrollYValue(true) : setScrollYValue(false);
    });
  });

  return (
    <Layout hasHeader>
      <S.MainContainer>
        <S.TitleContainer>
          <div className="title-wrapper">
            <h1>Title</h1>
          </div>
          {/* ButtonContainer 자신의 게시글에서만 표시 */}
          <S.ButtonContainer>
            <button>통계</button>
            <button>수정</button>
            <button>삭제</button>
          </S.ButtonContainer>
          <S.InformContainer>
            <div>
              <span className="username">
                <a href="#">작성자</a>
              </span>
              <span className="separator">·</span>
              <span>작성일</span>
            </div>
          </S.InformContainer>
          <div style={{ position: 'relative', marginTop: '2rem' }}>
            <S.StickyContainer>
              <S.StickyWrapper scrollY={scrollYValue}>
                <div className="sticky--icon">
                  <IconLike />
                </div>
                <div className="likeCount">20</div>
                <div className="sticky--icon">
                  <IconBad />
                </div>
              </S.StickyWrapper>
            </S.StickyContainer>
          </div>
          <S.ThumbnailImage src="/img_dummy.jpg" />
        </S.TitleContainer>
      </S.MainContainer>
      <S.ContentContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores minus, necessitatibus similique, quos
        et molestiae, deleniti maiores sed libero recusandae veniam quae dolor accusantium ex expedita officiis velit
        voluptatem
      </S.ContentContainer>
      <S.WriterContainer>
        <S.WriterWrapper>
          <a href="#">
            <img src="/img_dummy.jpg" alt="profile" />
          </a>
          <div className="writerInfo">
            <div className="name">
              <a href="#">작성자</a>
            </div>
            <div className="description">소개</div>
          </div>
        </S.WriterWrapper>
        <S.UnderLine></S.UnderLine>
      </S.WriterContainer>
    </Layout>
  );
}

export default Index;
