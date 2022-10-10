import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, family, size, WP, scrWidth} from '../../shared/exporter';
import {Dropdown} from 'react-native-element-dropdown';
import {Divider, Icon} from 'react-native-elements';
import {AppInput} from '../Inputs/AppInput';

export const DropDown = ({
  options,
  placeholder,
  value,
  onChangeValue,
  label,
  containerStyle,
  touched,
  error,
  searchInput,
}) => {
  const renderItem = item => {
    return (
      <View style={styles.itemStyle}>
        <Text style={styles.textItemStyle}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, {...containerStyle}]}>
      {label && <Text style={styles.textStyle}>{label}</Text>}
      <Dropdown
        dropdownPosition={'bottom'}
        containerStyle={styles.menuStyle}
        data={options || []}
        placeholder={placeholder}
        placeholderStyle={styles.textItemStyle}
        selectedTextStyle={styles.textItemStyle}
        value={value}
        onChange={onChangeValue}
        valueField="value"
        labelField="title"
        renderRightIcon={() => (
          <Icon
            name="arrow-drop-down"
            type="MaterialIcons"
            size={30}
            color={colors.g4}
          />
        )}
        style={styles.dropStyle}
        fontFamily={family.Poppin_SemiBold}
        renderItem={item => renderItem(item)}
        // inputSearchStyle={styles.inputSearchStyle}
        // search
        // searchPlaceholder="Specify here"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: WP('2'),
  },
  menuStyle: {
    borderRadius: 15,
    height: WP('35'),
    width: scrWidth / 1.1,
  },
  dropStyle: {
    width: WP('90'),
    padding: WP('1.5'),
    marginHorizontal: WP('2.5'),
    borderRadius: 30,
    backgroundColor: colors.g2,
    paddingHorizontal: WP('5'),
  },
  itemStyle: {
    backgroundColor: colors.white,
    paddingHorizontal: WP('2'),
    paddingVertical: WP('2'),
  },
  textItemStyle: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_14,
    color: colors.g3,
    marginVertical: WP('1'),
  },
  textStyle: {
    // marginVertical: WP('2'),
    paddingHorizontal: WP('3.5'),
    marginBottom: 10,
    color: colors.b1,
    fontSize: size.text_14,
    fontFamily: family.Poppin_Medium,
    fontWeight: '500',
  },
  errorStyle: {
    fontSize: size.text_10,
    color: colors.p1,
    paddingHorizontal: 25,
    textAlign: 'left',
    fontFamily: family.Poppin_Regular,
    marginVertical: WP('-5'),
  },
  inputSearchStyle: {
    height: 40,
    width: WP('80'),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.g7,
    marginHorizontal: WP('1.5'),
    fontSize: 16,
    position: 'absolute',
    top: 65,
  },
});
