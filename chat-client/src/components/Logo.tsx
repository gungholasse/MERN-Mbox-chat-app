import fireLogo from '@app/logos/fireLogo.png';
import * as React from 'react';
import styled from 'styled-components';

const Logo = styled(props => (
  <span {...props}>
    <img src={fireLogo} />
  </span>
))`
  img {
    padding: 15px;
    width: 150px;
    border-radius: 100px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export default Logo;