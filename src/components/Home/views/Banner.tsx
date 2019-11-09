import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

import { getFontSize } from 'helpers';
import { FontWeight } from 'styles';

/** Style */

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 80px;
`;

const Parallax = styled.div`
  background-image: url('https://res.cloudinary.com/defykcau3/image/upload/v1573259914/sub-1_pf2pgl.jpg');
  min-height: 800px;
  background-attachment: fixed;
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
`;

const PosedContent = posed.div({
  visible: {
    transition: {
      duration: 1000,
      delay: 1000,
    },
    opacity: 1,
    bottom: 50,
  },
  hidden: {
    opacity: 0,
    bottom: 10,
  },
});

const ContentWrapper = styled(PosedContent)`
  position: absolute;
  left: 50px;
  text-align: justify;
  display: flex;
  flex-flow: row nowrap;
`;

const Avatar = styled.div`
  background: url('https://res.cloudinary.com/defykcau3/image/upload/v1573259916/c-avatar-1_ttpeeu.png');
  background-size: cover;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const ChatWrapper = styled.div`
  ${getFontSize('EXTRA_SMALL')};
  font-weight: ${FontWeight.THIN};
  background-color: lightblue;
  padding: 10px 15px;
  border-radius: 10px;
  max-width: 300px;
`;

/** End */

export const Banner = () => {
  const [isDisplay, setDisplay] = React.useState(false);
  const el = React.useRef(null);
  React.useEffect(() => {
    const scrollAction = () => {
      const position = el.current.getBoundingClientRect().top;

      setDisplay(position < 1000);
    };

    window.addEventListener('scroll', scrollAction);

    return (() => {
      window.removeEventListener('scroll', scrollAction);
    })
  }, []);
  return (
    <Wrapper>
      <Parallax />
      <ContentWrapper
        ref={el}
        pose={isDisplay ? 'visible' : 'hidden'}
      >
        <Avatar />
        <ChatWrapper>
          我希望能藉由立霧工作坊這個平臺，將我腦袋中的東西掏出來分享給家鄉的居民，期望他們在未來能為自己創造一片天
        </ChatWrapper>
      </ContentWrapper>
      <ContentWrapper
        ref={el}
        pose={isDisplay ? 'visible' : 'hidden'}
      >
        <Avatar />
        <ChatWrapper>
          我希望能藉由立霧工作坊這個平臺，將我腦袋中的東西掏出來分享給家鄉的居民，期望他們在未來能為自己創造一片天
        </ChatWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
