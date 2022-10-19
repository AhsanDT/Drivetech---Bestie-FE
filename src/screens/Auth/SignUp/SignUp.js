import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppHeader, AppInput, DropDown} from '../../../components';
import styles from './styles';
import {
  colors,
  SignUPFormFields,
  WP,
  SignUpVS,
  Selection_List,
  Pronoun_List,
  SocailSignUpVS,
  SocialSignUPFormFields,
} from '../../../shared/exporter';
import {Formik} from 'formik';
useSelector;
import {updateSignupObject} from '../../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import * as types from '../../../redux/actions/types/auth_types';

const SignUp = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [sex, setsex] = useState('Male');
  const [pronoun, setPronoun] = useState('he/him');
  const [data, setdata] = useState(route?.params?.data);

  const onSubmit = value => {
    console.log('VALUES ', value);
    // return;
    // dispatch({
    //   type: types.UPDATE_SIGNUP_OBJECT,
    //   payload: {
    //     lastName: value.lastName,
    //     firstName: value.firstName,
    //     profileType: 'user',
    //     age: value.age,
    //     country: value.country,
    //     city: value.city,
    //     sex: sex,
    //     pronoun: pronoun,
    //     password: value.password,
    //     email: value.email,
    //   },
    // });
    dispatch(updateSignupObject({firstName: value.firstName}));
    dispatch(updateSignupObject({lastName: value.lastName}));
    dispatch(updateSignupObject({password: value.password || ''}));
    dispatch(updateSignupObject({email: value.email}));
    dispatch(updateSignupObject({city: value.city}));
    dispatch(updateSignupObject({sex: sex}));
    dispatch(updateSignupObject({pronoun: pronoun}));
    dispatch(updateSignupObject({age: value.age}));
    dispatch(updateSignupObject({country: value.country}));
    dispatch(updateSignupObject({phoneNumber: value.phone}));
    dispatch(
      updateSignupObject({profileType: data ? data?.profile_type : 'user'}),
    );
    dispatch(
      updateSignupObject({login_type: data ? 'social login' : 'manual'}),
    );

    navigation.navigate('ProfileImage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          backgroundColor={'#fff'}
          translucent={false}
          barStyle={'dark-content'}
        />

        <AppHeader title={'Create Your\nAccount'} />
        <ScrollView>
          <Formik
            initialValues={
              data?.login_type == 'social login'
                ? SocialSignUPFormFields
                : SignUPFormFields
            }
            onSubmit={values => {
              onSubmit(values);
            }}
            validationSchema={
              data?.login_type == 'social login' ? SocailSignUpVS : SignUpVS
            }>
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
              handleReset,
              setFieldValue,
            }) => {
              useEffect(() => {
                setFieldValue(
                  'firstName',
                  data?.login_type == 'social login'
                    ? data.first_name
                    : values?.firstName,
                );
                setFieldValue(
                  'lastName',
                  data?.login_type == 'social login'
                    ? data.last_name
                    : values?.lastName,
                );
                setFieldValue(
                  'email',
                  data?.login_type == 'social login'
                    ? data?.email
                    : values?.email,
                );
              }, []);
              return (
                <View>
                  <AppInput
                    title={'First Name'}
                    placeholder={'Enter your first name'}
                    placeholderTextColor={colors.g3}
                    onChangeText={handleChange('firstName')}
                    value={
                      data?.first_name ? data?.first_name : values?.firstName
                    }
                    touched={touched.firstName}
                    errorMessage={errors.firstName}
                    editable={data?.first_name ? false : true}
                  />
                  <AppInput
                    title={'Last Name'}
                    placeholder={'Enter your last name'}
                    placeholderTextColor={colors.g3}
                    onChangeText={handleChange('lastName')}
                    value={data?.last_name ? data?.last_name : values?.lastName}
                    // value={data?.last_name ? data?.last_name : values.lastName}

                    touched={touched.lastName}
                    errorMessage={errors.lastName}
                    editable={data?.last_name ? false : true}
                  />
                  <AppInput
                    title={'Email'}
                    placeholder={'Email'}
                    placeholderTextColor={colors.g3}
                    onChangeText={handleChange('email')}
                    value={data?.email ? data?.email : values?.email}
                    touched={touched.email}
                    errorMessage={errors.email}
                    keyboardType={'email-address'}
                    editable={data?.email ? false : true}
                  />
                  {data ? null : (
                    <AppInput
                      title={'Password'}
                      placeholder={'Password'}
                      placeholderTextColor={colors.g3}
                      onChangeText={handleChange('password')}
                      value={values?.password}
                      touched={touched.password}
                      errorMessage={errors.password}
                      secureTextEntry={true}
                    />
                  )}
                  <AppInput
                    title={'Phone Number'}
                    placeholder={'Type here'}
                    placeholderTextColor={colors.g3}
                    onChangeText={handleChange('phone')}
                    value={values?.phone}
                    touched={touched.phone}
                    errorMessage={errors.phone}
                    keyboardType={'number-pad'}
                  />
                  <AppInput
                    title={'Country'}
                    placeholder={'Type here'}
                    placeholderTextColor={colors.g3}
                    onChangeText={handleChange('country')}
                    value={values?.country}
                    touched={touched.country}
                    errorMessage={errors.country}
                  />
                  <AppInput
                    title={'City'}
                    placeholder={'Type here'}
                    placeholderTextColor={colors.g3}
                    onChangeText={handleChange('city')}
                    value={values?.city}
                    touched={touched.city}
                    errorMessage={errors.city}
                  />
                  <AppInput
                    title={'Age'}
                    placeholder={'Type here'}
                    placeholderTextColor={colors.g3}
                    onChangeText={handleChange('age')}
                    value={values?.age}
                    touched={touched.age}
                    errorMessage={errors.age}
                    keyboardType={'number-pad'}
                    maxLength={2}
                  />
                  <DropDown
                    label={'Sex'}
                    placeholder={sex}
                    containerStyle={styles.dropContainer}
                    options={Selection_List}
                    value={values?.pronoun}
                    onChangeValue={text => {
                      setsex(text.value);
                    }}
                  />

                  <DropDown
                    label={'Pronoun'}
                    placeholder={'Select'}
                    containerStyle={styles.dropContainer}
                    options={Pronoun_List}
                    value={pronoun}
                    onChangeValue={text => {
                      setPronoun(text.value);
                    }}
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
              );
            }}
          </Formik>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
