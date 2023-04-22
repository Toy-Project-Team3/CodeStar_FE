import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

export default function ToastEditor(props) {
  const getEditorContents = props.getEditorContents;
  const editorRef = useRef(null);
  const liftEditorContents = function () {
    //console.log(editorRef.current.getInstance());
    console.log(editorRef.current.getInstance().getMarkdown());
    console.log(editorRef.current.getInstance().getHTML());
    getEditorContents(editorRef.current.getInstance().getMarkdown());
    //setContents(editorRef.current.getInstance().getMarkdown())
  };
  const width = true;
  return (
    <div>
      <Editor
        ref={editorRef}
        onChange={liftEditorContents}
        previewStyle="vertical" // 미리보기 스타일 지정
        previewHighlight={false}
        language="ko-KR"
        initialEditType={width ? 'markdown' : 'wysiwyg'}
        hideModeSwitch={true}
        initialValue=" "
        placeholder="당신의 이야기를 적어보세요..."
        useCommandShortcut={true}
        toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['task'],
          ['table', 'image', 'link'],
          ['codeblock'],
        ]}
        height="75vh"
        theme="dark"
      />
    </div>
  );
}
