import { FC } from 'react'
import styled from 'styled-components'
type ButtonProps = {
  className?: string
  as?: React.ElementType | keyof JSX.IntrinsicElements
  onClick: () => void
  text?: string
  icon?: JSX.Element
}

const ButtonWrapper = styled.div<ButtonProps>`
  background-color: #2196f3;
  color: white;
  border: none;
  height: 40px;
  user-select: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d8bf2;
  }

  &:active {
    background-color: #0b6ec6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.5);
  }
`

const Button: FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <ButtonWrapper icon={icon} onClick={onClick}>
      {text}
    </ButtonWrapper>
  )
}

export default Button
