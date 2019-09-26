// @flow

import * as React from 'react';
import { ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import FontContext from '../../../primitives/Font/FontContext';
import Text from '../../../primitives/Text';

type Props = {
  /**
   * If true, the search bar is disabled.
   */
  disabled: ?boolean,
  inputRef?: ?(?React.ElementRef<typeof TextInput>) => void,
  isLoading: ?boolean,
  /**
   * Callback that is called when the search text changes.
   */
  onInputChange?: ?(searchText: string) => void,
  /**
   * Callback that is called when search is performed.
   */
  onInputSubmit?: ?(searchText: string) => void,
  /**
   * Current search text.
   */
  searchText: string,
  style?: any,
};

function normalizeSearchText(rawText) {
  if (!rawText) return '';
  return rawText
    .match(/\w|\s/g)
    .join('')
    .replace(/^\s+|\s+$/g, '')
    .replace(/\s+/g, ' ');
}

class SearchBar extends React.Component<Props> {
  static defaultProps = {
    disabled: false,
    isLoading: false,
  };

  render() {
    const { disabled, onInputChange, searchText, style } = this.props;

    return (
      <TouchableOpacity activeOpacity={1} onPress={this._onContainerPress}>
        <Container
          pointerEvents="none"
          style={style}
          testID="select-searchbar-container"
        >
          <InnerContainer>
            <IconContainer>
              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
              <IconText>🔍</IconText>
            </IconContainer>
            {disabled ? (
              <SearchText>{searchText}</SearchText>
            ) : (
              <FontContext.Consumer>
                {({ fontFamily }) => {
                  return (
                    <StyledTextInput
                      autoCorrect={false}
                      editable={!disabled}
                      innerRef={this._captureInputRef}
                      onChangeText={onInputChange}
                      onSubmitEditing={this._onInputSubmit}
                      returnKeyLabel="Search"
                      returnKeyType="search"
                      showUnderline={false}
                      value={searchText}
                      testID="select-searchbar-textinput"
                      fontFamily={fontFamily}
                    />
                  );
                }}
              </FontContext.Consumer>
            )}
            {this._renderSpinner()}
          </InnerContainer>
        </Container>
      </TouchableOpacity>
    );
  }

  _input: ?React.ElementRef<typeof TextInput>;

  _captureInputRef = (ref: ?React.ElementRef<typeof TextInput>) => {
    this._input = ref;
    const { inputRef } = this.props;
    inputRef && inputRef(ref);
  };

  _onContainerPress = () => {
    this._input && this._input.focus();
  };

  _onInputSubmit = (event: Object) => {
    const { onInputSubmit } = this.props;
    onInputSubmit && onInputSubmit(normalizeSearchText(event.nativeEvent.text));
  };

  _renderSpinner = () => {
    return (
      <SpinnerContainer>
        <ActivityIndicator animating={this.props.isLoading} />
      </SpinnerContainer>
    );
  };
}

export default SearchBar;

const Container = styled.View`
  background-color: #eee;
  padding: 6px;
  padding-top: 5px;
`;

const InnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  height: 31px;
  border-width: 0;
  border-color: #ddd;
  border-radius: 15px;
`;

const IconContainer = styled.View`
  justify-content: center;
  background-color: transparent;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
`;

const IconText = styled.Text``;

const SearchText = styled(Text).attrs({
  numberOfLines: 1,
})`
  margin-left: 34px;
  margin-right: 3px;
`;

const SpinnerContainer = styled.View`
  padding-horizontal: 10px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  font-family: ${props => props.fontFamily};
  font-size: 14px;
  height: 28px;
  margin-top: 2px;
  margin-bottom: 1px;
  margin-left: 38px;
`;
