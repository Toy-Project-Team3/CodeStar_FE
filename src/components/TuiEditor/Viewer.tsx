import React from 'react';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer as EditorViewer } from '@toast-ui/react-editor';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
const Viewer = (props: any) => {
  return <EditorViewer {...props} plugins={[codeSyntaxHighlight]} />;
};

export default Viewer;
