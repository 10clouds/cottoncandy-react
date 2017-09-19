import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {palette, style} from '../constants';

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${palette.SECONDARY.base};
  box-sizing: border-box;
  height: 32px;
  font-size: 13px;
  color: ${palette.TYPOGRAPHY.main};
  background: ${style.BACKGROUND.main};
  padding-right: 32px;

  :focus {
    outline: 0;

    & + button + div {
      display: block;
    }
  }

  ::placeholder {
    color: ${palette.SECONDARY.dark};
  }
`;

const StyledButton = styled.button`
  position: absolute;
  right: ${(p) => p.expandable ? '9px' : '0'};
  top: ${(p) => p.expandable ? '9px' : '0'};
  border: none;
  border-bottom: ${(p) => p.expandable ? 'none' : `1px solid ${palette.SECONDARY.base}`};
  box-sizing: border-box;
  height: 32px;
  width: 32px;
  color: ${palette.TYPOGRAPHY.main};
  background: ${style.BACKGROUND.main};
  cursor: pointer;

  :focus {
    outline: 0;

    > svg {
      filter: drop-shadow(0 0 2pt ${palette.PRIMARY.light});
    }
  }

  > svg {
    margin-top: 4px;
  }
`;

const Container = styled.div`
  position: relative;
`;

const ShadowBox = styled.div`
  box-shadow: ${style.SHADOW.outline};
  margin: 0 5px;
  display: none;
  height: 0;
`;

const ExpandableStyledInput = styled.input`
  color: ${palette.TYPOGRAPHY.main};
  background: ${style.BACKGROUND.main};
  border-radius: 40px;
  border: solid 1px ${palette.SECONDARY.midDark};
  box-sizing: border-box;
  height: 50px;
  padding: 16px 20px;
  width: ${(p) => p.expanded ? '255px' : '50px'};
  transition: ${style.TRANSITION.main};
  transition-property: width, background-position;
  font-size: 13px;
  cursor: ${(p) => p.expanded ? 'auto' : 'pointer'};

  &:focus,
  &:not(:placeholder-shown) {
    width: 255px;
    cursor: auto;

    ::placeholder {
      opacity: 1;
    }
  }

  &:focus {
    outline: 0;
    box-shadow: ${style.SHADOW.outline};
  }

  &:not(:focus):placeholder-shown + button {
    pointer-events: none;
  }

  ::placeholder {
    color: ${palette.SECONDARY.dark};
    transition: ${style.TRANSITION.main};
    transition-property: opacity;
    opacity: ${(p) => p.expanded ? '1' : '0'};
  }
`;

const SearchIcon = () => (
  <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="${encodeURI(palette.TYPOGRAPHY.main)}">
      <path d="M15.5608163,13.5026804 L11.3436735,9.24206186 C11.3436735,9.24206186 11.3436735,9.24206186
        11.2440816,9.24206186 C11.7453061,8.22762887 12.0473469,7.21319588 12.0473469,6.09814433
        C12.0473469,2.75134021 9.33714286,0.0131958763 6.0244898,0.0131958763 C2.71183673,0.0131958763
        0,2.75134021 0,6.09814433 C0,9.44494845 2.71020408,12.1830928 6.02285714,12.1830928 C7.12653061,12.1830928
        8.23183673,11.8795876 9.13469388,11.2709278 L9.13469388,11.2709278 L13.3502041,15.5298969
        C13.9526531,16.1385567 14.8555102,16.1385567 15.4579592,15.5298969 C16.1616327,15.0235052
        16.1616327,14.1113402 15.5608163,13.5026804 Z M2.00816327,6.09814433 C2.00816327,3.86639175
        3.8155102,2.04206186 6.02285714,2.04206186 C8.23183673,2.04206186 10.037551,3.86804124 10.037551,6.09814433
        C10.037551,8.32989691 8.23020408,10.1558763 6.02285714,10.1558763 C3.8155102,10.1558763
        2.00816327,8.32989691 2.00816327,6.09814433 Z" />
    </g>
  </svg>
);

const SearchInput = (props) => {
  const{expandable, expanded, onClick, ...rest} = props;
  return (
    <Container>
      {!expandable && <StyledInput {...rest} />}
      {expandable && <ExpandableStyledInput {...rest} expanded={expanded} />}
      <StyledButton expandable={expandable} onClick={onClick}>
        <SearchIcon/>
      </StyledButton>
      {!expandable && <ShadowBox/>}
    </Container>
  );
};

SearchInput.propTypes = {
  expandable: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
};

export default SearchInput;
