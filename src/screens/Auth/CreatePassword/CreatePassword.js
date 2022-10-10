import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppHeader, AppInput} from '../../../components';
import {
  colors,
  WP,
  CreatePasswordVS,
  createFormFields,
} from '../../../shared/exporter';
import {Formik} from 'formik';

const CreatePassword = ({navigation}) => {
  const onPressSignIn = e => {
    navigation.navigate('CreatePassword');
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <AppHeader
          title={'Create New Password'}
          backIcon={true}
          onPressBack={() => {
            navigation.goBack();
          }}
        />
        <Formik
          initialValues={createFormFields}
          onSubmit={values => {
            onPressSignIn(values);
          }}
          validationSchema={CreatePasswordVS}>
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
                title={'New Password'}
                placeholder={'Type here'}
                onChangeText={handleChange('password')}
                value={values.password}
                touched={touched.password}
                errorMessage={errors.password}
                secureTextEntry={true}
              />
              <AppInput
                title={'Re-type Password'}
                placeholder={'Type here'}
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                touched={touched.confirmPassword}
                errorMessage={errors.confirmPassword}
                secureTextEntry={true}
              />
              <AppButton
                width={WP('90')}
                bgColor={colors.b1}
                title={'Reset Password'}
                height={WP('14')}
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.btCon}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default CreatePassword;
