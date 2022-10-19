import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppHeader,
  AppInput,
  DropDown,
  LocationInput,
} from '../../../components';
import {Icon} from 'react-native-elements';
import styles from './styles';
import {
  colors,
  SignUPFormFields,
  WP,
  SignUpVS,
  Selection_List,
  Pronoun_List,
  RegisterVS,
  RegisterFields,
} from '../../../shared/exporter';
import {Formik} from 'formik';
const Register = ({navigation}) => {
  const onSubmit = e => {
    navigation.navigate('ProfileImage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <AppHeader title={'Create Your\nAccount'} />
        <Formik
          initialValues={RegisterFields}
          onSubmit={values => {
            onSubmit(values);
          }}
          validationSchema={RegisterVS}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
            handleReset,
          }) => (
            <View>
              <AppInput
                title={'Full Name'}
                placeholder={'Enter your Full name'}
                placeholderTextColor={colors.g3}
                onChangeText={handleChange('fullName')}
                value={values.fullName}
                touched={touched.fullName}
                errorMessage={errors.fullName}
              />
              <AppInput
                title={'Last Name'}
                placeholder={'Enter your last name'}
                placeholderTextColor={colors.g3}
                onChangeText={handleChange('lastName')}
                value={values.lastName}
                touched={touched.lastName}
                errorMessage={errors.lastName}
              />
              <AppInput
                title={'Phone Number'}
                placeholder={'Type her'}
                placeholderTextColor={colors.g3}
                onChangeText={handleChange('phone')}
                value={values.phone}
                touched={touched.phone}
                errorMessage={errors.phone}
                keyboardType={'number-pad'}
              />

              <LocationInput
                title={'Location'}
                placeholder={'Set your location'}
                // error={errors.location}
                // touched={touched.location}
                onChangeText={value => {
                  console.log('value', value);
                  handleChange('location', value);
                }}
              />
              <DropDown
                label={'Experience'}
                placeholder={'Select'}
                containerStyle={styles.dropContainer}
                options={Pronoun_List}
                value={values.experience}
                // touched={touched.experience}
                // error={errors.experience}
                onChangeValue={txt => handleChange('experience', txt)}
              />
              <AppInput
                title={'Age'}
                placeholder={'Type here'}
                placeholderTextColor={colors.g3}
                onChangeText={handleChange('age')}
                value={values.age}
                touched={touched.age}
                errorMessage={errors.age}
                keyboardType={'number-pad'}
                maxLength={2}
              />
              <DropDown
                label={'Sex'}
                placeholder={'Select'}
                containerStyle={styles.dropContainer}
                options={Selection_List}
                value={values.gender}
                // touched={touched.gender}
                // error={errors.gender}
                onChangeValue={txt => handleChange('gender', txt)}
                searchInput={true}
              />

              <AppButton
                width={WP('40')}
                bgColor={colors.b1}
                title={'Next'}
                height={WP('10')}
                style={styles.btnContainer}
                onPress={() => {
                  handleSubmit();
                }}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;
