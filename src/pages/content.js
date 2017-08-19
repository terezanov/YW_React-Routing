import React, { Component } from 'react';
import styled from 'styled-components';

export const StyledContent = styled.div`
  background-color: ${props => props.bgColor};
  padding: 5px 15px;
  font-size: 16px;
  text-align: center;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FadeIn = styled.div`
  @keyframes fadeIn {
    from {opacity: 0}
    to {opacity: 1}
  }
  animation-name: fadeIn;
  animation-duration: .5s;
  animation-fill-mode: both;
`;

const FadeInUp = styled.div`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  animation-name: fadeInUp;
  animation-duration: .5s;
  animation-fill-mode: both;
`;

export class Content extends Component {
  render() {
    return <FadeIn>{this.props.children || null}</FadeIn>;
  }
}