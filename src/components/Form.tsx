import styled from 'styled-components'

export const Label = styled.label`
  font-size: 12.5px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 0;
  padding-bottom: 0;
`

export const Input = styled.input`
  border-radius: 7.5px;
  box-shadow: none;
  height: 50px;
  padding: 5px;
  border-color: #fff;
  border-style: solid;
  background-color: #ecf0f1;
  font-size: 18px;
  font-weight: bold;
`

export const TextArea = styled.textarea.attrs({
  autocapitalize: true,
  autocomplete: false,
  minLength: 1,
  spellcheck: true,
})`
  resize: none;
  border-radius: 7.5px;
  box-shadow: none;
  height: 50px;
  padding: 5px;
  border-color: #fff;
  border-style: solid;
  background-color: #ecf0f1;
  font-size: 18px;
  font-weight: bold;
  height: 250px;
`

export const Button = styled.button`
  width: 150px;
  background-color: #ecf0f1;
  border: 3px solid #fff;
  border-radius: 7.5px;
  font-size: 18px;
  font-weight: bold;
  :hover {
    border: 3px solid #333;
  }
  :active {
    background-color: #333;
    color: #fff;
  }
`
