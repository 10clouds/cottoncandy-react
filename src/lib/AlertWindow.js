import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ModalWindow from "./ModalWindow";
import Button from "./Button";

const InfoText = styled.div`
  text-align: center;
`;

const ButtonRow = styled.div`
  text-align: center;
  margin-top: 32px;
  
  button {
    margin: 0 16px;
  }
`;

const AlertWindow = (props) => {
  const {buttons, info, ...rest} = props;
  return (
    <ModalWindow {...rest}>
      <InfoText>{info}</InfoText>
      <ButtonRow>
        {buttons.map((button, idx) =>
          <Button key={button.name + idx}
                  rounded
                  size="medium"
                  onClick={button.onClick}
                  theme={button.theme}>
            {button.name}
          </Button>
        )}
      </ButtonRow>
    </ModalWindow>
  );
};

AlertWindow.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  info: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object),
};

AlertWindow.defaultProps = {
  height: '240px',
  width: '530px',
  buttons: [{name: 'OK'}]
};

export default AlertWindow;
