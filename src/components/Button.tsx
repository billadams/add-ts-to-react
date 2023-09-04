import React from 'react';

type ButtonProps = {
  buttonText: string;
  addTodo: () => void;
};

export default function Button({ buttonText, addTodo }: ButtonProps) {
  return (
    <button type='button' onClick={() => addTodo()}>
      {buttonText}
    </button>
  );
}
