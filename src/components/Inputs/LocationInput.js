import React, {useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {colors, family, size, WP} from '../../shared/exporter';
const LocationInput = ({title, error, touched, placeholder, onChangeText}) => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('');
  }, []);
  return (
    <View style={styles.container}>
      {title && <Text style={styles.textStyle}>{title}</Text>}
      <GooglePlacesAutocomplete
        ref={ref}
        GooglePlacesDetailsQuery={{fields: 'geometry'}}
        keyboardShouldPersistTaps
        keepResultsAfterBlur
        viewIsInsideTabBar
        fetchDetails={true}
        textInputProps={{
          placeholderTextColor: colors.g3,
          onChangeText: onChangeText,
        }}
        styles={{
          textInput: styles.inputContainerStyle,
          textInputContainer: styles.textInputContainer,
          predefinedPlacesDescription: {
            color: colors.red,
          },
          description: {
            color: colors.b1,
          },
          container: {
            width: '95%',
            alignSelf: 'center',
          },
        }}
        clear={clr => {}}
        onFail={err => {
          console.log('[error while auto complete]', err);
        }}
        placeholder={placeholder}
        onPress={data => {
          console.log('data', data.description);
        }}
        query={{
          key: 'AIzaSyBq3-UEY9QO9X45s8w54-mrwjBQekzDlsA',
          language: 'en',
        }}
      />
      {touched && error && (
        <View>
          <Text style={styles.errorStyle}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export {LocationInput};

const styles = StyleSheet.create({
  container: {},
  inputContainerStyle: {
    width: WP('45'),
    height: WP('13.5'),
    marginHorizontal: WP('2.5'),
    borderRadius: 30,
    backgroundColor: colors.g2,
    borderBottomWidth: 0,
    paddingHorizontal: WP('5'),
    flex: 1,
    marginBottom: 10,
    color: colors.g3,
    fontSize: size.text_14,
    fontFamily: family.Poppin_Regular,
  },
  textStyle: {
    paddingHorizontal: WP('6'),
    marginBottom: 10,
    color: colors.b1,
    fontSize: size.text_16,
    fontFamily: family.Poppin_Medium,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: WP('95'),
  },
  errorStyle: {
    fontSize: size.text_12,
    color: colors.red,
    paddingHorizontal: 13,
    textAlign: 'left',
    fontFamily: family.Poppin_Regular,
    marginTop: WP('2'),
  },
});
