import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin:  0 auto;
  padding: ${p => p.theme.space[3]}px;
  width: 200px;
  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  font-size:  ${p => p.theme.fontSizes.m};
  font-weight: bold;
  border:  ${p => p.theme.borders.none};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15), -2px -2px 4px rgba(0, 0, 0, 0.15);
  :active {
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.15),
      inset -2px -2px 4px rgba(0, 0, 0, 0.15); 
   }
`;
