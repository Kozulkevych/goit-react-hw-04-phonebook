import styled from 'styled-components';

export const TitlePrimary = styled.h1`
  font-family: ${p => p.theme.fonts.heading};
  margin: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[6]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.heading};
  text-align: center;
  color: ${p => p.theme.colors.primary};
  text-shadow: #8eb7d3 1px 0 10px;
`;

export const TitleSecondary = styled.h2`
  font-family: ${p => p.theme.fonts.heading};
  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[5]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
  text-align: center;
  color: ${p => p.theme.colors.primary};
`;

export const Text = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
`;
