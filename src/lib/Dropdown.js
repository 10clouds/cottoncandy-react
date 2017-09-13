import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { palette, style } from '../constants';
import { noop } from './utils';

const StyledWrapper = styled.div`
  background-color: ${palette.GRAY.white};
  background: white;
  border-radius: 2px;
  border: ${p => p.focused ? `solid 1px ${palette.PRIMARY.base}` : p.valid ? `solid 1px ${palette.SECONDARY.base}` : `solid 1px ${palette.RED.base}`};
  color: ${palette.GRAY.black};
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  height: 24px;
  margin: 0 auto;
  max-width: 400px;
  min-height: 1.2em;
  min-width: 200px;
  outline: none;
  padding: 8px 12px;
  position: relative;
  width: 100%;

  &:after {
    border-color: ${p => p.active ? `${palette.GRAY.black} transparent` : `transparent ${palette.GRAY.black}`};
    border-style: solid;
    border-width: ${p => p.active ? '6px 6px 0 6px ' : '6px 0 6px 6px'};
    content: "";
    height: 0;
    margin-top: ${p => p.active ? '-3px ' : '-6px'};
    position: absolute;
    right: 16px;
    top: 50%;
    width: 0;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  color: ${p => p.isPlaceholder ? palette.GRAY.dark : palette.GRAY.black };
  cursor: pointer;
  display: block;
  font-size: 20px;
  height: 100%;
  outline: none;
  text-align: left;
  width: 100%;
`;

const StyledDropdown = styled.ul`
  background-color: ${style.BACKGROUND.main};
  background: ${style.BACKGROUND.main};
  border-radius: 5px;
  box-shadow: 0 0 ${p => p.shadowLevel * 8}px 0 ${palette.SECONDARY.base};
  color: ${palette.GRAY.black};
  font-weight: normal;
  left: 0;
  margin: 0;
  opacity: ${p => p.active ? '1' : '0'};
  overflow: hidden;
  padding: 0;
  pointer-events: ${p => p.active ? 'auto' : 'none'};
  position: absolute;
  right: 0;
  top: calc(100% + 2px);
  z-index: 1;
`;

const OptionButton = styled.button`
  background: none;
  border: none;
  color: ${palette.GRAY.black};
  cursor: pointer;
  display: block;
  display: block;
  font-size: 20px;
  outline: none;
  padding: 10px 20px;
  text-align: left;
  text-decoration: none;
  width: 100%;

  &:hover, &:focus {
    background: ${palette.SECONDARY.light};
    outline: none;
  }
`;

class Dropdown extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string,
    shadowLevel: PropTypes.number,
    valid: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    shadowLevel: 1,
    valid: true,
    onChange: noop,
  };

  state = {
    active: false,
    focused: false,
    value: null,
  };

  lastFocusTimeStamp = 0;

  componentDidMount() {
    this.setState(state => ({ active: !!this.props.active }));
    document.addEventListener('click', this.outsideClickListener);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.outsideClickListener);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.active !== prevProps.active) {
      this.setState(state => ({ active: !!this.props.active }));
    }
  }

  outsideClickListener = () => {
    if (this.props.autoHide !== false) {
      this.hide();
    }
  };

  hide = (e) => {
    this.toggleActive(false)
  };

  show = (e) => {
    this.toggleActive(true)
  };

  toggleActive = (active) => {
    this.setState(state => ({
      active: active !== undefined ? active : !state.active,
    }));
  };

  handleClick = (event) => {
    // HACK: Click event also fires the focus event, which already sets the state to active
    const clickTimeStamp = event.nativeEvent.timeStamp;
    if (clickTimeStamp - this.lastFocusTimeStamp > 300) {
      this.toggleActive();
    }

    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  handleFocus = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    this.lastFocusTimeStamp = event.nativeEvent.timeStamp;
    this.setState({ focused: true });
    this.show();
  };

  handleBlur = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    this.setState({ focused: false });
    if (this.props.autoHide !== false) {
      this.hide();
    }
  };

  handleOptionClick = (event, value) => {
    this.hide();
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    return (
      <StyledWrapper
        active={ this.state.active }
        focused={ this.state.focused }
        valid={ this.props.valid }
        onBlur={ this.handleBlur }
        onClick={ this.handleClick }
        onFocus={ this.handleFocus }
      >
        <StyledButton
          isPlaceholder={ this.state.value === null }
          valid={ this.props.valid }
          aria-haspopup="true"
        >
          { this.state.value || this.props.placeholder }
        </StyledButton>
        <StyledDropdown
          shadowLevel={ this.props.shadowLevel }
          active={ this.state.active }
          aria-hidden={ !this.state.active }
          aria-label="dropdown"
        >
          { this.props.options.map(option => (
              <OptionButton
                tabIndex="0"
                onClick={ (e) => this.handleOptionClick(e, option) }
                key={ option }
              >
                { option }
              </OptionButton>
            ))
          }
        </StyledDropdown>
      </StyledWrapper>
    );
  }
}

export default Dropdown;
