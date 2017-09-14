import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {palette, style} from '../constants';


const searchIcon = `<svg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000'>
<path fill='${encodeURI(palette.TYPOGRAPHY.main)}' d='M963.1,833.6L704.8,575.3c0,0,0,0-6.1,0c30.7-61.5,49.2-123,
49.2-190.6c0-202.9-166-368.9-368.9-368.9S10,181.8,10,384.7c0,202.9,166,368.9,368.9,368.9c67.6,0,135.3-18.4,190.6-55.3l0,
0l258.2,258.2c36.9,36.9,92.2,36.9,129.1,0C999.9,925.8,999.9,870.5,963.1,833.6z M133,384.7c0-135.3,110.7-245.9,
245.9-245.9c135.3,0,245.9,110.7,245.9,245.9c0,135.3-110.7,246-245.9,246C243.7,630.7,133,520,133,384.7z'/>
</svg>`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${palette.SECONDARY.base};
  box-sizing: border-box;
  height: 32px;
  font-size: 13px;
  color: ${palette.TYPOGRAPHY.main};
  
  background-color: ${style.BACKGROUND.main};
  background-image: url("data:image/svg+xml;utf8,${searchIcon}");
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
  
  :focus {
    outline: 0;
    
    & + div {
      display: block;
    }
  }
  
  ::placeholder {
    color: ${palette.SECONDARY.dark};
  }
`;

const ExpandableStyledInput = styled.input`
  color: ${palette.TYPOGRAPHY.main};
  background-color: ${style.BACKGROUND.main};
  border-radius: 40px;
  border: solid 1px ${palette.SECONDARY.midDark};
  box-sizing: border-box;
  height: 50px;
  padding: 16px 20px;
  width: 50px;
  transition: ${style.TRANSITION.main};
  transition-property: width, background-position;
  font-size: 13px;
  cursor: pointer;
  
  background-image: url("data:image/svg+xml;utf8,${searchIcon}");
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position: center center;

  &:focus, &:not(:placeholder-shown) {
    background-position: calc(100% - 16px) center;
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
  
  ::placeholder {
    color: ${palette.SECONDARY.dark};
    transition: ${style.TRANSITION.main};
    transition-property: opacity;
    opacity: 0;
  }
`;

const ShadowBox = styled.div`
  box-shadow: ${style.SHADOW.outline};
  margin: 0 5px;
  display: none;
  height: 0;
`;

const SearchInput = (props) =>
  props.expandable ? (
    <ExpandableStyledInput {...props} />
  ) : (
  <div>
    <StyledInput {...props} />
    <ShadowBox/>
  </div>
);

SearchInput.propTypes = {
  expandable: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
};

export default SearchInput;
