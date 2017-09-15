import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ModalWindow from './ModalWindow';
import Button from './Button';

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

class AlertWindow extends Component {
  onButtonClick = (button) => () => {
    let hide = true;
    if (button.onClick) {
      hide = button.onClick();
    }
    if (hide !== false) {
      this.modal.hide();
    }
  };

  render() {
    const {buttons, info, ...rest} = this.props;
    return (
      <ModalWindow {...rest} ref={(modal) => this.modal = modal}>
        {info && <InfoText>{info}</InfoText>}
        <ButtonRow>
          {buttons.map((button, idx) =>
            <Button
              key={button.name + idx}
              rounded
              size="medium"
              onClick={this.onButtonClick(button)}
              theme={button.theme}>
              {button.name}
            </Button>
          )}
        </ButtonRow>
      </ModalWindow>
    );
  }
}

AlertWindow.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  info: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(['primary', 'secondary', 'ternary']),
    onClick: PropTypes.func,
  })),
};

AlertWindow.defaultProps = {
  height: '240px',
  width: '530px',
  buttons: [{name: 'OK'}],
};

export default AlertWindow;
