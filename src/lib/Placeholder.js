import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

import * as palette from '../palette';

const GRAY_COLOR = '#f0f2f5';

const backgroundColorProvider = p => p.theme === 'primary' ? 'white' : p.theme === 'secondary' ? GRAY_COLOR : 'transparent';
const foregroundColorProvider = p => p.theme === 'primary' ? GRAY_COLOR : p.theme === 'secondary' ? 'white' : GRAY_COLOR;

const StyledPlaceholder = styled.div`
  width: 260px;
  padding: .7em .9em;
  background-color: ${backgroundColorProvider};
  border-radius: 5px;

  ul > li {
    width: 100%;
    height: 100%;
    min-height: 0.75em;
    border-radius: 5px;
    background-color: ${foregroundColorProvider};
    color: ${foregroundColorProvider};
    margin: .5em;
    display: inline-flex;
    align-items: center;
    position: relative;

    &:before {
      position: absolute;
      margin-left: -1.5em;
      content: '';
      display: inline-block;
      width: .8em;
      height: .8em;
      border-radius: 50%;
      background-color: ${foregroundColorProvider};
    }
  }

  p:empty {
    display: block;
    min-height: 4.8em;
    width: calc(100% - .5em);
    border-radius: 5px;
    background-color: ${foregroundColorProvider};
    color: ${foregroundColorProvider};
    margin: .5em;
  }

  p {
    color: ${foregroundColorProvider};
    padding: 0em;
    box-shadow: 0.2em 0 0 rgba(255,255,255,0.7), -0.2em 0 0 rgba(255,255,255,0.7);
    background-color: #fff;
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
    margin: .2em .5em 0 0;
  }

  div > img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    margin: auto;
  }

  img + div {
    flex: 1;
    margin-left: .5em;
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
    this.checkIfWithImage()
  }

  componentDidUpdate(prevProps) {
    if (this.props.children !== prevProps.children) {
      this.checkIfWithImage()
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
    }

    return (
      <StyledPlaceholder
        { ...this.props }
        style={ style }
        ref={ component => { this.element = findDOMNode(component) } }
      />
    );
  }
}

export default Placeholder;
