import tw from 'tailwind-styled-components';

export interface ButtonProps {
  $disabled?: boolean;
}

// @ts-ignore
const Button = tw.button<ButtonProps>`
  ${(p) => (p.$disabled ? 'btn-disabled cursor-default' : 'btn-primary')}
  transition-colors
  flex-grow
  md:flex-grow-0
  ml-0
  md:ml-auto
`;

export default Button;
