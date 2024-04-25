import dynamic from 'next/dynamic';

const WriteUI = () => {
  const DynamicEditor = dynamic(
    () => import('../../toast/editor/textEditor'),
    { ssr: false } // 서버 사이드 렌더링 비활성화
  );
  return (
    <>
      title - <input />
      {/* <MyComponent/> */}
      <DynamicEditor />
    </>
  );
};
export default WriteUI;
