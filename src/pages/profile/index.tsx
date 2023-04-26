import React from 'react';
import ProfileLayout from '@/components/Layout/ProfileLayout';

function Index() {
  return (
    <ProfileLayout hasHeader={true}>
      <h1 className="none-content">
        프로필의 메인 페이지 입니다. 위의 표 밑에 있는 숫자를 클릭하여 활동 내역을 확인 할 수 있습니다.
      </h1>
    </ProfileLayout>
  );
}

export default Index;
