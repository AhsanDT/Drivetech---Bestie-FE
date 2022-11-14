import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon, Switch} from 'react-native-elements';
import {
  appIcons,
  appImages,
  colors,
  family,
  size,
  WP,
} from '../../shared/exporter';

const SettingCard = ({
  onPress,
  icon,
  subtitle,
  title,
  source,
  toggle,
  userImage,
  value,
  toggleColor,
  trackColor,
  onValueChange,
  thumbColor,
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        {
          paddingHorizontal: !icon ? 15 : WP('4'),
          paddingVertical: !icon ? 3 : WP('4'),
        },
      ]}
      activeOpacity={0.7}
      onPress={onPress}>
      {icon && <Image source={userImage} style={styles.userStyle} />}

      <View
        style={[
          styles.textContainer,
          {paddingHorizontal: !icon ? 0 : WP('4')},
        ]}>
        <Text
          style={[
            styles.nameStyle,
            {
              paddingTop: !subtitle ? 10 : null,
            },
          ]}>
          {title + '\n' || 'Blair McLurkin\n'}
          {subtitle && <Text style={styles.editStyle}>Edit Profile</Text>}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: !icon ? WP('10') : 1,
        }}>
        {toggle ? (
          <View style={styles.toggleContainer}>
            <Switch
              value={value}
              onValueChange={onValueChange}
              style={{}}
              color={toggleColor}
              thumbColor={thumbColor}
              trackColor={trackColor}
            />
          </View>
        ) : (
          <Image
            source={appIcons.rightarrow}
            style={styles.rightarrowStyle}
            resizeMode={'contain'}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export {SettingCard};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: WP('95'),
    borderRadius: 13,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('2'),
    // elevation: 1,
  },
  userStyle: {
    height: 33,
    width: 33,
    borderRadius: 33,
    backgroundColor: '#ccc',
  },
  textContainer: {
    width: WP('70'),
  },
  nameStyle: {
    fontFamily: family.Poppin_Medium,
    fontSize: size.text_14,
    lineHeight: 20,
    color: colors.b6,
  },
  editStyle: {
    fontFamily: family.Poppin_Light,
    fontSize: size.text_10,
    color: colors.black2,
    paddingTop: 10,
  },
  rightarrowStyle: {
    width: WP('5'),
    height: WP('5'),
  },
  toggleContainer: {
    margin: -15,
  },
});
