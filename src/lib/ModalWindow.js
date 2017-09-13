import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { palette, style } from '../constants';

const WindowDiv = styled.div`
  position: relative;
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  border-radius: 5px;
  background-color: ${style.BACKGROUND.main};
  box-shadow: ${style.SHADOW.big};
  padding: 0;
`;

const WindowCloseButton = styled.span`
  overflow: hidden;
  :after {
    position: absolute;
    z-index: 10;
    cursor: pointer;
    display: block;
    top: 22px;
    right: 22px;
    content: '×';
    width: 16px;
    height: 16px;
    font-size: 30px;
    line-height: 12px;
    color: ${palette.SECONDARY.midDark};
  }
`;

const WindowTitle = styled.h2`
  color: ${palette.TYPOGRAPHY.heading};
  font-family: ${style.FONT.heading};
  font-size: 22px;
  text-align: center;
  margin: 32px 0 0 0;
  padding: 0 32px;
`;

const WindowContent = styled.div`
  padding: 32px;
  height: 32px;
  overflow: auto;
  position: absolute;
  height: calc(100% - ${(p) => p.hasTitle ? '128px' : '64px'});
  width: calc(100% - 64px);
`;

const ModalWindow = (props) => (
  <WindowDiv {...props}>
    {props.withCloseButton && <WindowCloseButton onClick={props.onClose} />}
    {props.title && <WindowTitle>{props.title}</WindowTitle>}
    <WindowContent hasTitle={!!props.title}>
      {props.children}
    </WindowContent>
  </WindowDiv>
);

ModalWindow.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  withCloseButton: PropTypes.bool,
  onClose: PropTypes.func,
};

ModalWindow.defaultProps = {
  width: '50vw',
  height: '50vh',
  withCloseButton: true,
};

export default ModalWindow;