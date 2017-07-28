import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import * as palette from '../palette';

const StyledStep = styled.div`
  background-color: #ebeff5;
  border-radius: 6px;
  display: inline-block;
  height: 4px;
  margin-top: 4rem;
  padding: 0 4rem;
  position: relative;

  &:before {
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 15px 0 #ebebeb;
    content: '';
    display: inline-block;
    height: 30px;
    left: calc(50% - 15px);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    z-index: 2;
  }

  &:after {
    background: ${p => p.active ? 'linear-gradient(to bottom, #6f8aee, #4862e1)' : '#ebeff5'};
    border-radius: 50%;
    content: '';
    height: 16px;
    left: calc(50% - 8px);
    opacity: 1;
    position: absolute;
    top: calc(50% - 8px);
    transform: scale(1);
    transition: all 0.2s ease;
    width: 16px;
    z-index: 2;
  }
`;

const StyledLabel = styled.span`
  bottom: 22px;
  color: ${ p => p.active ? '#5973e7' : '#758092' };
  display: inline-block;
  left: 0;
  padding: 0 .5rem;
  position: absolute;
  right: 0;
  text-align: center;
`;

const StyledFill = styled.span`
  background-image: linear-gradient(to bottom, #6f8aee, #4862e1);
  display: block;
  height: 4px;
  left: 0;
  position: absolute;
  width: ${ p => p.active ? '100%' : p.half ? '50%' : '0%' };
  z-index: 1;
`;

class StepProgress extends Component {
  static propTypes = {
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeStep: PropTypes.string.isRequired,
  };

  render() {
    let activeFound = false;
    return (
      <div>
        { this.props.steps.map(step => {
            activeFound = activeFound || step === this.props.activeStep;
            const markActive = !activeFound || step === this.props.activeStep;
            return (
              <StyledStep active={ markActive } key={ step }>
                <StyledLabel active={ markActive }>{ step }</StyledLabel>
                <StyledFill active={ !activeFound } half={ step === this.props.activeStep }></StyledFill>
              </StyledStep>
            );
          })
        }
      </div>
    );
  }
};

export default StepProgress;
