import Layout from '@/components/Layout/BaseLayout';
import React from 'react';
import * as S from '@/styles/postStyled';
import IconDislike from '@/components/IconDislike';
import Comment from '@/components/Comment';
import CreditScore from '@/components/CreditScore';
import IconLike from '@/components/IconLike';

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
                <div className="count">20</div>
                <div className="sticky--icon">
                  <IconDislike />
                </div>
                <div className="count">4</div>
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
          <div className="score">
            <CreditScore width={10} height={10} />
          </div>
        </S.WriterWrapper>
        <S.UnderLine></S.UnderLine>
      </S.WriterContainer>
      <S.CommentContainer>
        <h4>N개의 댓글</h4>
        <div>
          <S.CommentWrapper>
            <S.CommentTextArea placeholder="댓글을 작성하세요" />
            <S.ButtonWrapper>
              <button>댓글 작성</button>
            </S.ButtonWrapper>
          </S.CommentWrapper>
        </div>
        <div className="comment--container">
          {[1, 2, 3, 4].map((key) => (
            <Comment key={key} />
          ))}
        </div>
      </S.CommentContainer>
    </Layout>
  );
}

export default Index;
