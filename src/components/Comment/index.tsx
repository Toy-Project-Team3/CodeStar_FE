import React from 'react';
import * as S from '@/styles/commentStyled';
import Link from 'next/link';

function Index() {
  return (
    <S.CommentContainer>
      <S.WriterContainer>
        <div className="profile">
          <Link href="#">
            <img src="https://picsum.photos/200/300" />
          </Link>
          <div className="comment-info">
            <div className="username">
              <Link href="#">사용자</Link>
            </div>
            <div className="date">5일 전</div>
          </div>
        </div>
      </S.WriterContainer>
      <S.ContentContainer>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus obcaecati sunt unde asperiores dolores
          dolor ad. Perferendis vitae earum quod architecto reiciendis suscipit voluptates, voluptatem odit mollitia
          adipisci, fugiat praesentium.
        </p>
      </S.ContentContainer>
    </S.CommentContainer>
  );
}

export default Index;
