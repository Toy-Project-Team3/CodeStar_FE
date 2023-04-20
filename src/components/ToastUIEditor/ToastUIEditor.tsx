import React from 'react';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('./Editor'), { ssr: false });
const ToastUIEditor = () => {
  return (
    <>
      <Editor />
    </>
  );
};

export default ToastUIEditor;
