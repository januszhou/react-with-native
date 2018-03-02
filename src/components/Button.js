import styled from 'styled-components';


const Button = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  height: calc(4.8 * 10px);
  justify-content: center;
  letter-spacing: 0;
  line-height: 1;
  outline: none;
  padding: 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition-background-color: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition-border-color: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition-color: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  vertical-align: middle;
  white-space: nowrap;
  background-color: rgb(0, 93, 232);

  &:hover,
  &:focus {
    background-color: rgb(36, 15, 110);
    border-color: rgb(36, 15, 110);
  }

  &:active {
    background-color: rgb(0, 93, 232);
    border-color: rgb(0, 93, 232);
  }

  &[disabled] {
    background-color: color(rgb(0, 0, 0) a(12%));
  }
  
  border: calc(0.2 * 10px) solid transparent;
  border-radius: calc(2.4 * 10px);
  min-width: calc(9 * 10px);
  padding: 0 calc(2.4 * 10px);
`;

export default Button;