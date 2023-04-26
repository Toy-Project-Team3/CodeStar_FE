import React, { useState } from 'react';
import * as S from '@/styles/modal';
import Image from 'next/image';
import close from '../asset/img/close.svg';
import welcome from '../asset/img/welcome.svg';
import LoginForm from './Auth/LoginForm';
import JoinForm from './Auth/JoinForm';

function Modal({ setModalOpen }: { setModalOpen: (value: boolean) => void }) {
  const [login, setLogin] = useState(true);
  return (
    <S.modalWrapper>
      <div className="dim" onClick={() => setModalOpen(false)}></div>
      <S.modalForm>
        <Image className="close" src={close} alt="닫기" onClick={() => setModalOpen(false)} />
        <div className="contents">
          <S.modalLeft>
            <Image src={welcome} alt="환영" />
            <h4>환영합니다</h4>
          </S.modalLeft>
          <S.modalRight>
            {login ? <LoginForm setLogin={setLogin} setModalOpen={setModalOpen} /> : <JoinForm setLogin={setLogin} />}
          </S.modalRight>
        </div>
      </S.modalForm>
    </S.modalWrapper>
  );
}

export default Modal;
