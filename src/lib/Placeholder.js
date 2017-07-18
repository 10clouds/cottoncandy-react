import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

import * as palette from '../palette';

const GRAY_COLOR = '#f0f2f5';

const StyledPlaceholder = styled.div`
  width: 260px;

  ul > li {
    width: 100%;
    height: 100%;
    min-height: 0.75em;
    border-radius: 5px;
    background-color: ${GRAY_COLOR};
    color: ${GRAY_COLOR};
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
      background-color: ${GRAY_COLOR};
    }
  }

  p:empty {
    display: block;
    min-height: 4.8em;
    width: calc(100% - .5em);
    border-radius: 5px;
    background-color: ${GRAY_COLOR};
    color: ${GRAY_COLOR};
    margin: .5em;
  }

  p {
    color: ${GRAY_COLOR};
    padding: 0em;
    box-shadow: 0.2em 0 0 rgba(255,255,255,0.7), -0.2em 0 0 rgba(255,255,255,0.7);
    background-color: #fff;
    background-color: ${GRAY_COLOR};
    line-height: 1.8em;
    font-size: 0.75em;
    display: inline;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: #f0f2f5;
    display: inline-block;
    margin: .5em;
  }

  img + div {
    flex: 1;
    margin: .5em;
  }
`;

class Placeholder extends Component {
  componentDidMount() {
    this.paragraphWithImage = this.element && this.element.querySelector('img + div');
  }

  render() {
    const style = {
      ...this.props.style,
      ...(this.paragraphWithImage ? {
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
