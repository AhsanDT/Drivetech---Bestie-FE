import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Input, IconProps, Icon} from 'react-native-elements';
import {useStore} from 'react-redux';
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
  textEntry
}) => {
  const [showPass, setShowPass] = React.useState(secureTextEntry);

  return (
    <View style={styles.container}>
      {title && <Text style={styles.textStyle}>{title}</Text>}

      <Input
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={textEntry ||showPass}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        leftIcon={leftIcon}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        disableFullscreenUI={disableFullscreenUI}
        autoCapitalize={autoCapitalize}
        blurOnSubmit={blurOnSubmit}
        editable={editable}
        keyboardType={keyboardType}
        errorMessage={touched && errorMessage}
        renderErrorMessage={renderErrorMessage}
        autoCompleteType={undefined}
        onSubmitEditing={onSubmitEditing}
        maxLength={maxLength}
        rightIcon={
          secureTextEntry ? (
            <Icon
              onPress={() => {
                setShowPass(!showPass);
              }}
              name={showPass ? 'eye-with-line' : 'eye'}
              type={'entypo'}
              size={22}
              color={colors.g6}
              tvParallaxProperties={undefined}
            />
          ) : (
            rightIcon
          )
        }
      />
    </View>
  );
};

export {AppInput};

const styles = StyleSheet.create({
  container: {},
  inputStyle: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.tiny,
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
    // marginVertical: WP('2'),
    paddingHorizontal: WP('6'),
    marginBottom: 10,
    color: colors.b1,
    fontSize: size.normal,
    fontFamily: family.Poppin_Bold,
    fontWeight: '500',
  },

  errorStyle: {
    fontSize: size.xxxtiny,
    color: colors.p1,
    paddingHorizontal: 25,
    textAlign: 'left',
    fontFamily: family.Poppin_Regular,
    marginVertical: WP('-5'),
  },
});
