// @flow

import * as React from 'react';
// Note that this is not the Modal we export. It has a slide animation on native.
import Modal from './Modal';
import Icon from '../Icon';
import {
  ActionRow,
  LinkContainer,
  LinkInner,
  ModalContainer,
  Label,
  BackLink,
} from './StyledComponents.native.js';

type RequiredProps = {
  actions: any,
  icon: string,
};
type OptionalProps = {
  children: any,
};
type Props = RequiredProps & OptionalProps;

type State = {
  active: boolean,
};

class Dropdown extends React.Component<Props, State> {
  state = {
    active: false,
  };

  render() {
    const { actions, icon = 'more-vert', children } = this.props;

    return (
      <LinkContainer>
        <LinkInner onPress={() => this.setState({ active: true })}>
          {children || <Icon name={icon} />}
        </LinkInner>
        <Modal onRequestClose={this._close} visible={this.state.active}>
          <ModalContainer>
            <BackLink onPress={this._close}>
              <Icon name="arrow-back-ios" />
            </BackLink>
            {actions.map(this.renderAction)}
          </ModalContainer>
        </Modal>
      </LinkContainer>
    );
  }

  renderAction = (action: any) => (
    <ActionRow
      key={action.label}
      onPress={() => {
        this._close();
        action.onPress();
      }}
    >
      {action.icon && <Icon name={action.icon} />}
      <Label>{action.label}</Label>
    </ActionRow>
  );

  _close = () => this.setState({ active: false });
}

export default Dropdown;
