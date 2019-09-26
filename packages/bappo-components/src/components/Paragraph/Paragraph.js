// @flow

import * as React from 'react';
import { styled } from '../../apis/Style';
import Text from '../../primitives/Text';

type Props = {
  children?: string,
  type?: 'default' | 'bold' | 'small' | 'error' | 'success' | 'white',
};

/**
 * Fixed height text component, no matter there's content or not
 * Reserve 1 line of space by default, and increase height if needed
 */
const Paragraph = ({ children, type }: Props) => {
  return (
    <StyledText selectable type={type}>
      {children}
    </StyledText>
  );
};

Paragraph.defaultProps = {
  type: 'default',
};

export default Paragraph;

const StyledText = styled(Text)`
  margin-bottom: 8px;
  line-height: 22px;

  ${({ type }) => {
    switch (type) {
      case 'bold':
        return `
          font-weight: bold;
        `;
      case 'small':
        return `
          font-size: 12px;
          color: #2B2826;
          min-height: 15px;
          line-height: 15px;
        `;
      case 'error':
        return `
          font-size: 12px;
          color: #C23934;
          min-height: 20px;
          line-height: 20px;
        `;
      case 'success':
        return `
          color: #04844B;
          text-transform: uppercase;
        `;
      case 'white':
        return `
          color: white;
        `;
      default:
        break;
    }
  }};
`;
