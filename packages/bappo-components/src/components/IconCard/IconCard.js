// @flow

import * as React from 'react';
import { styled } from '../../apis/Style';
import TouchableView from '../../primitives/TouchableView';
import View from '../../primitives/View';
import Icon from '../Icon';
import Badge from '../Badge';
import SubHeading from '../SubHeading';

type Props = {
  icon?: string,
  color?: string,
  badge?: number,
  size?: string,
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string,
  text?: string,
  onPress?: () => void,
  style?: any,
};

const IconCard = ({
  icon,
  color,
  badge,
  size = 'small',
  testID,
  text,
  onPress,
  style,
}: Props) => {
  const sizes = {
    small: 40,
    medium: 80,
    large: 120,
  };
  return (
    // $FlowFixMe
    <Container
      size={sizes[size]}
      onPress={onPress}
      style={style}
      testID={testID}
    >
      {/* $FlowFixMe */}
      <StyledView color={color} size={sizes[size]}>
        {badge && <Badge number={badge} />}
        {/* $FlowFixMe */}
        <StyledIcon name={icon} color={color && 'white'} size={sizes[size]} />
      </StyledView>
      {text && <StyledSubHeading>{text}</StyledSubHeading>}
    </Container>
  );
};

IconCard.defaultProps = {};

export default IconCard;

const Container = styled(TouchableView)`
  align-items: center;
  width: ${props => `${props.size}px` || '40px'};
  margin: ${props => `${props.size / 10}px` || '8px'};
`;

const StyledSubHeading = styled(SubHeading)``;

const StyledView = styled(View)`
  padding: 8px;
  border-radius: 3px;
  width: 100%;
  height: ${props => `${props.size}px`};
  background: ${props => props.color || '#D8D8D8'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

const StyledIcon = styled(Icon)`
  width: ${props => `${(props.size * 2) / 5}px` || '16px'};
  font-size: ${props => `${props.size / 3}px` || '14px'};
`;
