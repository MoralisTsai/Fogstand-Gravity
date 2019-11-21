/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';

export const useAnimateScroll = (targetPos: number): [boolean, React.MutableRefObject<any>] => {
  const [isDisplay, setDisplay] = React.useState(false);
  const el = React.useRef(null);
  React.useEffect(() => {
    const scrollAction = () => {
      // @ts-ignore
      const position = el.current.getBoundingClientRect().top;

      setDisplay(position < targetPos);
    };

    window.addEventListener('scroll', scrollAction);

    return (() => {
      window.removeEventListener('scroll', scrollAction);
    })
  }, []);

  return [
    isDisplay,
    el,
  ]
}
