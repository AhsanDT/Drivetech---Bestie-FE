import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppHeader, AppInput, DropDown} from '../../../components';
import {Icon} from 'react-native-elements';
import styles from './styles';
import {
  colors,
  SignUPFormFields,
  WP,
  SignUpVS,
  Selection_List,
  Pronoun_List,
} from '../../../shared/exporter';
import {Formik} from 'formik';
const SignUp = ({navigation}) => {
  const onSubmit = e => {
    navigation.navigate('ProfileImage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <AppHeader title={'Create Your\nAccount'} />
        <Formik
          initialValues={SignUPFormFields}
          onSubmit={values => {
            onSubmit(values);
          }}
          validationSchema={SignUpVS}>
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
                title={'First Name'}
                placeholder={'Enter your first name'}
                placeholderTextColor={colors.g3}
                onChangeText={handleChange('firstName')}
                value={values.firstName}
                touched={touched.firstName}
                errorMessage={errors.firstName}
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
              <AppInput
                title={'Country'}
                placeholder={'Select'}
                placeholderTextColor={colors.g3}
                onChangeText={handleChange('country')}
                value={values.country}
                touched={touched.country}
                errorMessage={errors.country}
              />
              <AppInput
                title={'City'}
                placeholder={'Select'}
                placeholderTextColor={colors.g3}
                onChangeText={handleChange('city')}
                value={values.city}
                touched={touched.city}
                errorMessage={errors.city}
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
                value={values.sex}
                onChangeValue={txt => handleChange('sex', txt)}
                searchInput={true}
              />

              <DropDown
                label={'Pronoun'}
                placeholder={'Select'}
                containerStyle={styles.dropContainer}
                options={Pronoun_List}
                value={values.pronoun}
                onChangeValue={txt => handleChange('pronoun', txt)}
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

export default SignUp;
