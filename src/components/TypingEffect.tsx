import { useState, useEffect } from 'react';

interface TypingEffectProps {
  words: string[];
  staticText: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export const TypingEffect = ({ 
  words, 
  staticText, 
  typeSpeed = 150, 
  deleteSpeed = 100, 
  pauseDuration = 2000 
}: TypingEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      } else {
        if (currentText === currentWord) {
          setIsWaiting(true);
        } else {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }
      }
    }, isWaiting ? pauseDuration : isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, isWaiting, words, typeSpeed, deleteSpeed, pauseDuration]);

  return (
    <span className="inline-block">
      {staticText}{' '}
      <span className="gradient-text font-bold">
        {currentText}
        <span className="animate-pulse text-primary">|</span>
      </span>
    </span>
  );
};