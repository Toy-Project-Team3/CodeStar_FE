import Layout from '@/components/Layout/BaseLayout';
import React from 'react';
import * as S from '@/styles/postStyled';
import IconDislike from '@/asset/img/IconDislike';
import Comment from '@/components/Comment';
import CreditScore from '@/components/CreditScore';
import IconLike from '@/asset/img/IconLike';
import { getPost } from '@/utils/requests';
import { CommentList, PostInterface } from '@/types/RequestInterface';
import { getDate } from '@/utils/dateFormat';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = context.query.slug;
  if (!query) {
    return null;
  }
  const res = await getPost(query[0], query[1]);
  return { props: { post: res } };
}

function Index({ post }: { post: PostInterface }) {
  const [scrollYValue, setScrollYValue] = React.useState(false);
  const [like, setLike] = React.useState(false);
  const [disLike, setDisLike] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 290 ? setScrollYValue(true) : setScrollYValue(false);
    });
  });

  const handleClickLike = () => {
    setLike(!like);
  };
  const handleClickDisLike = () => {
    setDisLike(!disLike);
  };

  return (
    <Layout hasHeader>
      <S.MainContainer>
        <S.TitleContainer>
          <div className="title-wrapper">
            <h1>{post?.title}</h1>
          </div>
          {/* ButtonContainer 자신의 게시글에서만 표시 */}
          <S.ButtonContainer>
            <Link href={{ pathname: '/posts', query: { id: post?.postId } }} as={`/posts/${post?.postId}`}>
              <button>수정</button>
            </Link>
            <button>삭제</button>
          </S.ButtonContainer>
          <S.InformContainer>
            <div>
              <span className="username">
                <Link href={{ pathname: `/blog/${post.author.id}` }}>{post?.author.userName}</Link>
              </span>
              <span className="separator">·</span>
              <span>{getDate(post?.createdAt)}</span>
            </div>
          </S.InformContainer>
          <div style={{ position: 'relative', marginTop: '2rem' }}>
            <S.StickyContainer>
              <S.StickyWrapper scrollY={scrollYValue} like={like} dislike={disLike}>
                <div className="sticky--icon like" onClick={handleClickLike}>
                  <IconLike color={like ? '#000' : '#acacac'} />
                </div>
                <div className="count">{post?.likes?.length}</div>
                <div className="sticky--icon dislike" onClick={handleClickDisLike}>
                  <IconDislike color={disLike ? '#000' : '#acacac'} />
                </div>
                <div className="count">{post?.dislikes?.length}</div>
              </S.StickyWrapper>
            </S.StickyContainer>
          </div>
          <S.ThumbnailImage src={post?.thumbnail} />
        </S.TitleContainer>
      </S.MainContainer>
      <S.ContentContainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum asperiores minus, necessitatibus similique, quos
        et molestiae, deleniti maiores sed libero recusandae veniam quae dolor accusantium ex expedita officiis velit
        voluptatem, <br />
        <br />
        post:
        {post?.content}
      </S.ContentContainer>
      <S.WriterContainer>
        <S.WriterWrapper>
          <Link href={{ pathname: `/blog/${post.author.id}` }}>
            <img src={post?.author.profileImg} alt="profile" />
          </Link>
          <div className="writerInfo">
            <div className="name">
              <Link href={{ pathname: `/blog/${post.author.id}` }}>{post?.author.userName}</Link>
            </div>
            <div className="description">{post?.author.bio}</div>
          </div>
          <div className="score">
            <CreditScore width={10} height={10} />
          </div>
        </S.WriterWrapper>
        <S.UnderLine></S.UnderLine>
      </S.WriterContainer>
      <S.CommentContainer>
        <h4>{post?.commentList.length}개의 댓글</h4>
        <div>
          <S.CommentWrapper>
            <S.CommentTextArea placeholder="댓글을 작성하세요" />
            <S.ButtonWrapper>
              <button>댓글 작성</button>
            </S.ButtonWrapper>
          </S.CommentWrapper>
        </div>
        <div className="comment--container">
          {post?.commentList.map((comment: CommentList) => (
            <Comment key={comment.commentID} comment={comment} />
          ))}
        </div>
      </S.CommentContainer>
    </Layout>
  );
}

export default Index;