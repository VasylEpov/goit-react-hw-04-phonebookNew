import styled from 'styled-components';

export const Form = styled.form`
  background-color: rgb(2, 48, 85);
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 4px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  color: #fff;
`;

// label:last-child {
//   margin-bottom: 0px;
// }

export const Input = styled.input`
  margin-left: 28px;
`;
// .inputNumber {
//   margin-left: 10px;
// }

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #077ef6;
  color: #e60909;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
