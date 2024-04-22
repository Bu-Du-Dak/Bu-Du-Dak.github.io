import { useEffect, useState } from "react";
import IntroUI from "./intro.presenter";

const TypingEffect = () => {
  const letters = ["JavaScript", "TypeScript", "NextJs","React"];
  const [text, setText] = useState("");
  const [currentWord, setCurrentWord] = useState(letters[0].split(""));
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (!isDeleting && currentWord.length > 0) {
        // 글자 추가
        setText((prevText) => {
          const updatedText = prevText + currentWord.shift();
          // 글자가 모두 추가된 후 일정 시간 대기
          if (!currentWord.length) { // 모든 글자가 입력된 경우
            setTimeout(() => {
              setIsDeleting(true);
            }, 1000); // 작성 완료 후 1000ms 후에 삭제 시작
          }
          return updatedText;
        });
      } else if (isDeleting && text.length > 0) {
        // 글자 제거
        setText((prevText) => prevText.slice(0, -1));
      }

      if (isDeleting && text.length === 0) {
        handleNextWord();
      }
    }, isDeleting ? 50 : 100); // 지우기 속도와 타이핑 속도

    return () => clearTimeout(typingTimeout);
  }, [text, currentWord, isDeleting, letters, loopNum]);

  const handleNextWord = () => {
    const nextWordIndex = (loopNum + 1) % letters.length;
    setLoopNum(nextWordIndex);
    setCurrentWord(letters[nextWordIndex].split(""));
    setIsDeleting(false);
  };

  return (
    <IntroUI text={text}/>
  );
};

export default TypingEffect;
