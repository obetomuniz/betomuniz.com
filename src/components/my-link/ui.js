import styled, { keyframes } from 'styled-components';
import { rem, rgba } from 'polished';

export const Container = styled.a`
  border-radius: ${rem('10px')};
  background-color: ${({ theme }) => `var(--${theme.bg})`};
  padding: ${rem('30px')};
  text-align: center;
  color: ${({ theme }) => `var(--${theme.color})`};
  display: block;
  font-size: ${rem('20px')};
  letter-spacing: ${rem('0.25px')};
  font-weight: bold;
  text-shadow: 0 0 15px
    ${({ theme }) => (theme.textAlt ? rgba('#000', 0.45) : rgba('#000', 0.8))};
  box-shadow: 0 0 ${rem('30px')} ${rem('5px')} ${rgba('#000', 0.2)};
  transform: scale3d(0.95, 0.95, 0.95);
  transition: transform ease-in-out 150ms;
  position: relative;

  &:hover {
    transform: scale3d(1, 1, 1);
  }

  @media screen and (max-width: 600px) {
    padding: ${rem('18px')};
    font-size: ${rem('16px')};

    box-shadow: 0 0 30px 5px ${rgba('#000', 0.2)}, inset 0 0 0 0 var(--WHITE);
  }
`;

export const Text = styled.span`
  display: block;
`;

const pulse = keyframes`
  70% {
    box-shadow: 0 0 0 ${rem('10px')} ${rgba('#fff', 0)};
  }

  100% {
    box-shadow: 0 0 0 0 ${rgba('#fff', 0)};
  }
`;

export const PulseDot = styled.div`
  position: absolute;
  right: ${rem('20px')};
  top: ${rem('20px')};
  width: ${rem('5px')};
  height: ${rem('5px')};
  border-radius: ${rem('10px')};
  background-color: #fff;
  animation: ${pulse} 1.5s infinite;
  box-shadow: 0 0 0 0 ${rgba('#fff', 0.5)};

  @media screen and (max-width: 600px) {
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const PulseDotAlt = styled.div`
  position: absolute;
  right: ${rem('20px')};
  top: ${rem('20px')};
  width: ${rem('5px')};
  height: ${rem('5px')};
  border-radius: ${rem('10px')};
  background-color: #000;
  animation: ${pulse} 1.5s infinite;
  box-shadow: 0 0 0 0 ${rgba('#000', 0.5)};

  @media screen and (max-width: 600px) {
    top: 50%;
    transform: translateY(-50%);
  }
`;
