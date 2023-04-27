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

  //글 수정 할 때 기존 데이터 불러오기
  useEffect(() => {
    editorRef.current.getInstance().insertText(oldContent);
  }, []);

  //에디터 너비값에 따라 마크다운/위지윅 변환
  useEffect(() => {
    if (viewWidth < 800) {
      editorRef.current.getInstance().changeMode('wysiwyg');
    } else {
      editorRef.current.getInstance().changeMode('markdown');
    }
  }, [viewWidth]);

  // base64 문자열 bufferArray 형태로 변환

  // const base64stringArr = content.match(^data:image\/[a-z]+;base64,([A-Za-z0-9+/=])+$)

  // bufferArray 를 base64로 변환

  //에디터 내의 데이터 변수 content 에 담기
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
