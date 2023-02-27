import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  margin: ${p => p.theme.space[0]};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-family: ${p => p.theme.fonts.heading};
  padding: ${p => p.theme.space[2]}px;
  line-height: ${p => p.theme.lineHeights.body};
`;

export const ButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15), -2px -2px 4px rgba(0, 0, 0, 0.15);
  :active {
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.15),
      inset -2px -2px 4px rgba(0, 0, 0, 0.15);
  }
`;
