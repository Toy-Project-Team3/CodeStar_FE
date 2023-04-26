import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

const ToastEditor = forwardRef((props, ref) => {
  const oldContent = props.content;
  const getEditorContent = props.getEditorContent;
  const viewWidth = props.viewWidth;
  const editorRef = useRef({});

  useEffect(() => {
    editorRef.current.getInstance().insertText(oldContent);
  }, []);
  useEffect(() => {
    if (viewWidth < 800) {
      editorRef.current.getInstance().changeMode('wysiwyg');
    } else {
      editorRef.current.getInstance().changeMode('markdown');
    }
  }, [viewWidth]);

  const liftEditorContent = function () {
    console.log(editorRef.current.getInstance().getMarkdown());
    console.log(editorRef.current.getInstance().getHTML());
    getEditorContent(editorRef.current.getInstance().getMarkdown());
  };
  function resetEditor() {
    editorRef.current.getInstance().reset();
  }
  useImperativeHandle(ref, () => ({
    resetEditor,
  }));

  return (
    <Editor
      ref={editorRef}
      onChange={liftEditorContent}
      previewStyle="vertical" // 미리보기 스타일 지정
      previewHighlight={false}
      language="ko-KR"
      initialEditType={'markdown'}
      hideModeSwitch={true}
      initialValue=" "
      placeholder="당신의 이야기를 적어보세요..."
      useCommandShortcut={true}
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['task'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
      ]}
      height="75vh"
      theme="dark"
    />
  );
});
ToastEditor.displayName = 'ToastEditor';
export default ToastEditor;
