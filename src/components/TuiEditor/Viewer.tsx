import React from 'react';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer as EditorViewer } from '@toast-ui/react-editor';
const Viewer = (props: any) => {
  return <EditorViewer {...props} />;
};

export default Viewer;
