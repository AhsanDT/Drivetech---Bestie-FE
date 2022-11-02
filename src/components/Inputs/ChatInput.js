import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

const ChatInput = ({
  onPressSend,
  onPressAttach,
  onPressProof,
  onChangeText,
  value,
  attachIcon,
  proofIcon,
  disabled,
  imgStyle,
}) => {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={onPressAttach}>
        <Image
          source={attachIcon}
          style={[styles.imgStyle, {marginHorizontal: WP('2')}]}
        />
      </TouchableOpacity> */}
      <TouchableOpacity onPress={onPressProof}>
        <Image source={proofIcon} style={imgStyle} />
      </TouchableOpacity>
      <View>
        <Input
          multiline={true}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={[styles.inputStyle]}
          placeholder={'Send message'}
          placeholderTextColor={colors.g19}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      <TouchableOpacity onPress={onPressSend} disabled={disabled}>
        <Image source={appIcons.send} style={styles.sendStyle} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    padding: WP('2'),
    alignSelf: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.g8,
    // alignItems: 'center',
  },
  inputContainerStyle: {
    width: WP('70'),
    height: 30,
    borderRadius: 30,
    backgroundColor: colors.g18,
    paddingHorizontal: WP('5'),
    borderWidth: 1,
    borderColor: colors.g17,
    top: 3,
  },
  inputStyle: {
    fontSize: size.text_12,
    color: colors.g23,
    fontFamily: family.Poppin_Regular,
  },

  sendStyle: {
    height: 17,
    width: 17,
    resizeMode: 'contain',
    marginTop: WP('3'),
  },
  imgStyle: {
    height: 18,
    width: 17,
    resizeMode: 'contain',
    marginTop: WP('1.5'),
  },
});
export {ChatInput};
