/* eslint-disable react/jsx-sort-props */

import React from 'react';
import UIExplorer, {
  AppText,
  Code,
  Description,
  DocItem,
  Section,
  storiesOf,
  WebLink,
} from '../../../ui-explorer';
import AllIcons from './AllIcons';

const IconScreen = () => (
  <UIExplorer title="Icon" url="2-components/Icon">
    <WebLink
      href="https://github.com/bappogroup/bappo-components/tree/master/src/components/Icon"
      text="Source Code"
    />
    <Description>
      <AppText>Icon.</AppText>
    </Description>

    <Section title="Props">
      <DocItem name="name" typeInfo="string" description="Icon name." />

      <DocItem name="style?" typeInfo="style" description="Styles" />
    </Section>

    <Section title="All Icons">
      <AllIcons />
    </Section>
  </UIExplorer>
);

storiesOf('Components', module).add('Icon', IconScreen);
