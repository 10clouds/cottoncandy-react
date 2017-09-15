import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { palette, style } from '../constants';

// Loosely based on:
// https://tympanus.net/codrops/2014/04/09/how-to-create-a-circular-progress-button/
class SVGElement {
  constructor(el, progress) {
    this.paths = Array.from(el.querySelectorAll( 'path' ));
    this.pathsArr = [];
    this.lengthsArr = [];
    this._init(progress);
  }

  _init(progress = 0) {
    this.paths.forEach(( path, i ) => {
      this.pathsArr[i] = path;
      path.style.strokeDasharray = this.lengthsArr[i] = path.getTotalLength();
    } );
    this.draw(progress);
  }

  // [0,1] : 0 - no stroke is visible, 1 - stroke is fully visible
  draw(progress) {
    this.pathsArr.forEach((element, i) => {
      element.style.strokeDashoffset = this.lengthsArr[ i ] * ( 1 - progress );
    });
  }
}

const StyledProgress = styled.div`
  background: ${palette.SECONDARY.light};
  margin: 10px auto 30px;
  width: 250px;
  height: 3px;

  &::after {
    content: '';
    background: ${style.BACKGROUND.gradient};
    display: block;
    height: 3px;
    width: 100%;
    transform: scaleX(${p => p.value});
    transform-origin: left;
    transition: transform 0.3s ease-out;
  }
`;

const Path = styled.path`
  stroke: ${palette.PRIMARY.dark};
  stroke-width: 3;
  opacity: 1;
  transition: stroke-dashoffset 0.5s;
  fill: transparent;
`;

const CircleContainer = styled.div`
  position: relative;
  margin: 1rem;

  &::after {
    color: ${palette.PRIMARY.dark};
    content: '${p => p.value * 100}%';
    display: ${p => p.showLabel ? 'block' : 'none'};
    font-weight: 300;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    text-align: center;
    top: calc(50% - 0.7em);
    width: 100%;
  }
`;

class Progress extends Component {
  static propTypes = {
    showLabel: PropTypes.bool,
    type: PropTypes.oneOf(['bar', 'circle']),
    value: PropTypes.number,
  };

  static defaultProps = {
    showLabel: false,
    type: 'bar',
    value: 0,
  };

  componentDidMount() {
    this.initializeElements();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      this.progressEl.draw(this.value);
    }
    if (this.props.type !== prevProps.type) {
      this.initializeElements();
    }
  }

  initializeElements() {
    if (this.props.type === 'circle') {
      this.progressEl = new SVGElement(this.svgElement, this.value);
    }
  }

  get value() {
    return this.props.value === 1 ? 1 : this.props.value * 10 % 10 / 10;
  }

  render() {
    return (
      this.props.type === 'bar' ?
        <StyledProgress value={ this.value } /> : (
        <CircleContainer value={ this.value } showLabel={ this.props.showLabel }>
          <svg ref={ element => this.svgElement = element } width="70" height="70">
            <Path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" />
          </svg>
        </CircleContainer>
      )
    );
  }
}

export default Progress;
