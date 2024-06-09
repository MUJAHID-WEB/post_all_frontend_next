import React, { FC, ReactNode, useEffect, useRef } from 'react';

type modalProps = {
  children: ReactNode;
  toggleState: boolean;
  varient?: 'user' | 'admin';
  actionOnBlur?: () => void;
  bodyClass?: string;
};

const Modal: FC<modalProps> = ({
  children,
  toggleState: toggleState,
  varient = 'user',
  actionOnBlur,
  bodyClass,
}) => {
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (body.current && !body.current.contains(event.target)) {
        actionOnBlur && actionOnBlur();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [body, actionOnBlur]);

  
  return (
    <section
      className={`fixed inset-0 z-[999] h-screen w-screen items-center justify-center overflow-hidden ${
        toggleState
          ? 'flex bg-black/20'
          : 'hidden bg-black/0'
      } `}
    >
      <div
        className={`max-h-[1000px] min-h-[389px] overflow-y-auto rounded-xl bg-white p-6 ${bodyClass} `}
        ref={body}
      >
        {children}
      </div>
    </section>
  );
};

export default Modal;