import React, { useState } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

export default function ToastViewer(props) {
  const contents = props.contents;
  return <Viewer initialValue={contents || ''} />;
}
