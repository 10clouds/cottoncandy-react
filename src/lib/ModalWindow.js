import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { palette, style } from '../constants';

const WindowDiv = styled.div`
  position: ${(p) => p.fixedPosition ? 'fixed' : 'relative'};
  top: ${(p) => p.fixedPosition ? `calc((100vh - ${p.height}) / 2)` : '0'};
  left: ${(p) => p.fixedPosition ? `calc((100vw - ${p.width}) / 2)` : '0'};
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  border-radius: 5px;
  background-color: ${style.BACKGROUND.main};
  box-shadow: ${style.SHADOW.big};
  padding: 0;
`;

const WindowCloseButton = styled.button`
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  color: ${palette.SECONDARY.midDark};
  padding: 0;
  border: none;
  background: ${style.BACKGROUND.main};

  ::after {
    content: '×';
    position: relative;
    top: -10px;
    font-size: 32px;
  }

  :focus {
    outline: 0;
    text-shadow: 0 0 2pt ${palette.PRIMARY.light};
  }
`;

const WindowTitle = styled.h2`
  color: ${palette.TYPOGRAPHY.heading};
  font-family: ${style.FONT.heading};
  font-size: 22px;
  text-align: center;
  margin: 32px 0 0;
  padding: 0 32px;
`;

const WindowContent = styled.div`
  padding: 32px;
  overflow: auto;
  position: absolute;
  height: calc(100% - ${(p) => p.hasTitle ? '128px' : '64px'});
  width: calc(100% - 64px);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

class ModalWindow extends Component {
  state = {
    visible: this.props.defaultVisible,
  };

  show = () => {
    this.setVisible(true);
  };

  hide = () => {
    this.setVisible(false);
  };

  setVisible = (value) => {
    if (value) {
      this.props.onShow && this.props.onShow();
    } else {
      this.props.onHide && this.props.onHide();
    }

    this.setState({
      visible: value,
    });
  };

  closeClicked = () => {
    this.props.onCloseClicked && this.props.onCloseClicked();
    this.hide();
  };

  render() {
    const window = (
      <WindowDiv
        width={this.props.width}
        height={this.props.height}
        fixedPosition={this.props.fixedPosition}
      >
        {this.props.withCloseButton && <WindowCloseButton onClick={this.closeClicked}/>}
        {this.props.title && <WindowTitle>{this.props.title}</WindowTitle>}
        <WindowContent hasTitle={!!this.props.title}>
          {this.props.children}
        </WindowContent>
      </WindowDiv>
    );

    return this.state.visible
      ? this.props.fixedPosition
        ? <Overlay>{window}</Overlay>
        : window
      : null;
  }
}

ModalWindow.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  withCloseButton: PropTypes.bool,
  defaultVisible: PropTypes.bool,
  fixedPosition: PropTypes.bool,

  onShow: PropTypes.func,
  onHide: PropTypes.func,
  onCloseClicked: PropTypes.func,
};

ModalWindow.defaultProps = {
  width: '50vw',
  height: '50vh',
  withCloseButton: true,
  defaultVisible: false,
  fixedPosition: true,
};

export default ModalWindow;
