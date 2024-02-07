import React from 'react';
import SizedConfetti from 'react-confetti';
import useWindowSize from '../hooks/useWindowSize';

interface MyConfettiProps {
  confetti: boolean;
  setConfetti: (boolean: boolean) => void;
}

function MyConfetti(props: MyConfettiProps) {
  const {confetti, setConfetti} = props;

  const { width, height } = useWindowSize();
  return (
    <SizedConfetti
      width={width}
      height={height}
      numberOfPieces={confetti ? 500 : 0}
      recycle={false}
      onConfettiComplete={c => {
        setConfetti(false)
        c?.reset()
      }}

    />

  )
}

export default MyConfetti;