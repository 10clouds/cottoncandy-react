import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

import { palette, style } from '../palette';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledSliderValue = styled.span`
  display: inline-block;
  padding: 0 16px;
  min-width: 40px;
`;

const StyledSlider = styled.div`
  cursor: pointer;
  width: 100%;
  position: relative;
  display: block;
  height: 4px;
  border-radius: 6px;
  background-color: ${palette.SECONDARY.light};
  outline: none;
  padding: 0;
  margin: 0;
`;

const StyledSliderFill = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  background-image: ${style.BACKGROUND.gradient};
  border-radius: 10px;
`;

const StyledSliderHandle = styled.div`
  top: -7px;
  touch-action: pan-y;
  cursor: pointer;
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  background-image: ${style.BACKGROUND.gradient};
  border-radius: 50%;
`;

class RangeSlider extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
  };

  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
  };

  state = {
    leftOffset: 0,
    value: 0,
  };

  grabPosition = 8;

  componentDidMount() {
    if (typeof this.props.value === 'number') {
      this.setBasedOnValue(this.props.value);
    } else {
      this.setBasedOnValue(this.props.min);
    }
  }

  componentDidUpdate(prevProps) {
    if (typeof this.props.value === 'number' && this.props.value !== prevProps.value) {
      this.setBasedOnValue(this.props.value);
    }
  }

  onMouseDown = (e) => {
    e.preventDefault();
    this.grabPosition = e.clientX - (this.sliderElement.getBoundingClientRect().x + this.thumbElement.offsetLeft);
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseup', this.onMouseUp)
  };

  onMouseUp = (e) => {
    e.preventDefault();
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)
  };

  onMouseMove = (e) => {
    this.setBasedOnPosition(e.clientX);
  };

  handleClick = (e) => {
    this.setBasedOnPosition(e.clientX);
  };

  setBasedOnPosition(position) {
    const leftOffset = this.getLeftOffset(position, this.maxPosition);
    const value = this.getScaledValue(leftOffset, this.maxPosition)
    const steppedLeftOffset = (this.getValue(leftOffset, this.maxPosition) * this.maxPosition) / this.props.max;

    this.setState({
      leftOffset: steppedLeftOffset,
      value,
    })
  }

  setBasedOnValue(value) {
    const maxPosition = this.maxPosition;
    const leftOffset = maxPosition * (value - this.props.min) / this.props.max;
    const steppedLeftOffset = ((this.getValue(leftOffset, maxPosition) * maxPosition) / this.props.max);

    this.setState({
      leftOffset,
      value,
    });
  }

  getValue(leftOffset, maxOffset) {
    const value = Math.round(leftOffset / maxOffset * 100);
    const scaledValue = ((value) * (this.props.max)) / 100;
    const steppedValue = Math.min(Math.round(scaledValue / this.props.step) * this.props.step, this.props.max);
    return steppedValue;
  }

  getScaledValue(leftOffset, maxOffset) {
    const value = Math.round(leftOffset / maxOffset * 100);
    const scaledValue = (((value) * (this.props.max - this.props.min)) / 100) + this.props.min;
    const steppedValue = Math.min(Math.round(scaledValue / this.props.step) * this.props.step, this.props.max);
    return steppedValue;
  }

  getLeftOffset(pointerPosition, maxPosition) {
    const newPosition = Math.round(pointerPosition - this.sliderElement.getBoundingClientRect().x - this.grabPosition);
    const leftOffset = Math.max(0, Math.min(newPosition, maxPosition));
    return leftOffset;
  }

  get maxPosition() {
    const sliderElementHalfWidth = this.thumbElement.getBoundingClientRect().width / 2;
    const maxPosition = this.sliderElement.getBoundingClientRect().width - sliderElementHalfWidth;
    return maxPosition;
  }

  render() {
    return (
      <StyledContainer
        style={ { width: `${this.props.width || 300}px` } }
        onClick={ this.handleClick }
      >
        <input
          type="range"
          style={ { display: 'none' } }
          value={ this.state.value }
        />
        <StyledSlider ref={ el => this.sliderElement = findDOMNode(el) }>
          <StyledSliderFill style={ { width: this.state.leftOffset + 8 } } />
          <StyledSliderHandle
            ref={ el => this.thumbElement = findDOMNode(el) }
            style={ { left: this.state.leftOffset } }
            onMouseDown={ this.onMouseDown }
          />
        </StyledSlider>
        <StyledSliderValue>
         { this.state.value }
        </StyledSliderValue>
      </StyledContainer>
    );
  }
}

export default RangeSlider;
