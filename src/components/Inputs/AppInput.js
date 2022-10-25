import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {family, size, colors, WP} from '../../shared/exporter';

const AppInput = ({
  placeholder,
  placeholderTextColor,
  lable,
  leftIcon,
  rightIcon,
  secureTextEntry,
  renderErrorMessage,
  errorMessage,
  onChangeText,
  disableFullscreenUI,
  autoCapitalize,
  touched,
  blurOnSubmit,
  onBlur,
  value,
  onSubmitEditing,
  editable,
  title,
  keyboardType,
  maxLength,
  error,
  textEntry,
  inputContainerStyle,
  icon,
  inputStyle,
  disabled,
  numberOfLines,
  multiline,
}) => {
  const [showPass, setShowPass] = React.useState(secureTextEntry);

  return (
    <View style={styles.container}>
      {title && <Text style={styles.textStyle}>{title}</Text>}

      <Input
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={textEntry || showPass}
        inputContainerStyle={[
          styles.inputContainerStyle,
          {...inputContainerStyle},
        ]}
        inputStyle={[styles.inputStyle, {...inputStyle}]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        disableFullscreenUI={disableFullscreenUI}
        autoCapitalize={autoCapitalize}
        blurOnSubmit={blurOnSubmit}
        editable={editable}
        keyboardType={keyboardType}
        errorMessage={touched && errorMessage}
        errorStyle={styles.errorStyle}
        renderErrorMessage={renderErrorMessage}
        autoCompleteType={undefined}
        onSubmitEditing={onSubmitEditing}
        maxLength={maxLength}
        disabled={disabled}
        rightIcon={
          secureTextEntry ? (
            <Icon
              onPress={() => {
                setShowPass(!showPass);
              }}
              name={showPass ? 'eye-with-line' : 'eye'}
              type={'entypo'}
              size={22}
              color={colors.g5}
              tvParallaxProperties={undefined}
            />
          ) : (
            rightIcon
          )
        }
        leftIcon={leftIcon}
      />
    </View>
  );
};

export {AppInput};

const styles = StyleSheet.create({
  container: {},
  inputStyle: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
    borderBottomWidth: 0,
    color: colors.g3,
  },
  inputContainerStyle: {
    width: WP('90'),
    marginHorizontal: WP('2.5'),
    borderRadius: 30,
    backgroundColor: colors.g2,
    borderBottomWidth: 0,
    paddingHorizontal: WP('5'),
  },
  textStyle: {
    paddingHorizontal: WP('6'),
    marginBottom: 8,
    color: colors.b1,
    fontSize: size.text_16,
    fontFamily: family.Poppin_Medium,
  },

  errorStyle: {
    marginHorizontal: WP('3.5'),
  },
});
