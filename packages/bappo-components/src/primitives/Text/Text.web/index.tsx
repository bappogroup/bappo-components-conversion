import React from 'react';
import TextBase from '../../../internals/web/TextBase';
import { TextProps } from '../types';

type Props = TextProps & {
  // will be removed
  className?: string;
};

export default function Text({
  accessibilityLabel,
  children,
  className,
  numberOfLines,
  selectable,
  style,
  testID,
}: Props) {
  const props = {
    accessibilityLabel,
    children,
    className,
    numberOfLines,
    selectable,
    style,
    testID,
  };

  return <TextBase {...props} />;
}
