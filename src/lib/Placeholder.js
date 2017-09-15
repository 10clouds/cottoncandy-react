import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

import { palette, style } from '../constants';

const backgroundColorProvider = p => p.theme === 'primary'
  ? palette.GRAY.white
  : p.theme === 'secondary'
    ? palette.GRAY.light
    : 'transparent';

const foregroundColorProvider = p => p.theme === 'primary'
  ? palette.GRAY.light
  : p.theme === 'secondary'
    ? palette.GRAY.white
    : palette.GRAY.light;

const StyledPlaceholder = styled.div`
  width: 260px;
  padding: 0.7em 0.9em;
  background-color: ${backgroundColorProvider};
  border-radius: 5px;

  ul > li {
    width: 100%;
    height: 100%;
    min-height: 0.75em;
    border-radius: 5px;
    background-color: ${foregroundColorProvider};
    color: ${foregroundColorProvider};
    margin: 0.5em;
    display: inline-flex;
    align-items: center;
    position: relative;

    &::before {
      position: absolute;
      margin-left: -1.5em;
      content: '';
      display: inline-block;
      width: 0.8em;
      height: 0.8em;
      border-radius: 50%;
      background-color: ${foregroundColorProvider};
    }
  }

  p:empty {
    display: block;
    min-height: 4.8em;
    width: calc(100% - 0.5em);
    border-radius: 5px;
    background-color: ${foregroundColorProvider};
    color: ${foregroundColorProvider};
    margin: 0.5em;
  }

  p {
    color: ${foregroundColorProvider};
    padding: 0;
    box-shadow: ${style.SHADOW.white};
    background-color: ${style.BACKGROUND.main};
    background-color: ${foregroundColorProvider};
    line-height: 1.8em;
    font-size: 0.65em;
    display: inline;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: ${foregroundColorProvider};
    display: inline-block;
    margin: 0.2em 0.5em 0 0;
  }

  div > img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }

  img + div {
    flex: 1;
    margin-left: 0.5em;
  }
`;

class Placeholder extends Component {
  static propTypes = {
    theme: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
    children: PropTypes.node,
  };

  static defaultProps = {
    theme: 'primary',
  };

  state = {
    paragraphWithImage: false,
  };

  componentDidMount() {
    this.checkIfWithImage();
  }

  componentDidUpdate(prevProps) {
    if (this.props.children !== prevProps.children) {
      this.checkIfWithImage();
    }
  }

  checkIfWithImage() {
    const paragraphWithImage = this.element && this.element.querySelector('img + div') !== null;
    this.setState({
      paragraphWithImage,
    });
  }

  render() {
    const style = {
      ...this.props.style,
      ...(this.state.paragraphWithImage ? {
        display: 'flex',
      }: {})
    };

    return (
      <StyledPlaceholder
        { ...this.props }
        style={ style }
        ref={ component => { this.element = findDOMNode(component); } }
      />
    );
  }
}

export default Placeholder;
