import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LabelForm = styled.label`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const InputForm = styled(Field)`
  display: block;
  width: 440px;
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.gray};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Error = styled(ErrorMessage)`
  font-weight: ${p => p.theme.fontWeights.body};
  margin: ${p => p.theme.space[0]};
  padding-top: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.red};
`;
