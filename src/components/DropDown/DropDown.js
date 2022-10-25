import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, family, size, WP, scrWidth} from '../../shared/exporter';
import {Dropdown} from 'react-native-element-dropdown';
import {Icon} from 'react-native-elements';

export const DropDown = ({
  options,
  placeholder,
  value,
  onChangeValue,
  label,
  containerStyle,
  touched,
  error,
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
        dropdownPosition={'auto'}
        containerStyle={styles.menuStyle}
        data={options || []}
        placeholder={placeholder}
        placeholderStyle={styles.textItemStyle}
        selectedTextStyle={styles.textItemStyle}
        value={value}
        onChange={onChangeValue}
        valueField="value"
        autoScroll
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
        renderItem={item => renderItem(item)}
        // onBlur={onBlur}
        // onFocus={onFocus}
        // errorMessage={touched && errorMessage}
        // errorStyle={styles.errorStyle}
        // renderErrorMessage={renderErrorMessage}
        // inputSearchStyle={styles.inputSearchStyle}
        // search
        // searchPlaceholder="Specify here"
      />
      {touched && error && (
        <View>
          <Text style={styles.errorStyle}>{error}</Text>
        </View>
      )}
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
    elevation: 2,
    overflow: 'hidden',
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
    fontSize: size.text_12,
    color: colors.red,
    paddingHorizontal: 13,
    textAlign: 'left',
    fontFamily: family.Poppin_Regular,
    marginTop: WP('2'),
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
