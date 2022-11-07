import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppHeader,
  AppInput,
  AppLoader,
  DropDown,
  Header,
} from '../../../components';
// import * as TYPES from '../../../../redux/actions/types/auth_types';
import styles from './styles';
import {
  colors,
  SignUPFormFields,
  WP,
  Selection_List,
  Pronoun_List,
  RegisterVS,
  RegisterFields,
  ExperienceList,
  SignUpVS,
} from '../../../shared/exporter';
import {Formik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {
  validateEmailAction,
  validateSocialPhoneAction,
  updateSignupObject,
} from '../../../redux/actions';
const Register = ({navigation, route}) => {
  const [sex, setsex] = useState('Male');
  const [experience, setExperience] = useState('1 Year');
  const [data, setdata] = useState(route?.params?.data);
  const [location, setlocation] = useState('');
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const {userType, userInfo} = useSelector(state => state.auth);
  const [pronoun, setPronoun] = useState('he/him');

  const validateEmail = value => {
    setloading(true);
    try {
      const data = new FormData();
      data.append('user[email]', value.email.toLowerCase());
      data.append('user[phone_number]', value.phone);
      console.log(data);
      const cbSuccess = res => {
        onSubmit(value);
        setloading(false);
      };
      const cbFailure = err => {
        Alert.alert('ALert', err?.error);
        setloading(false);
      };
      dispatch(validateEmailAction(data, cbSuccess, cbFailure));
    } catch (error) {
      setloading(false);
    }
  };

  const validateSocialPhone = value => {
    setloading(true);
    try {
      const data = new FormData();
      data.append('user[phone_number]', value.phone);
      console.log(data);
      const cbSuccess = res => {
        onSubmit(value);
        setloading(false);
      };
      const cbFailure = err => {
        Alert.alert('ALert', err?.error);
        setloading(false);
        console.log('ERRor', err);
      };
      // dispatch(validateSocialPhoneAction(data, cbSuccess, cbFailure));
    } catch (error) {
      setloading(false);
      console.log('ERRor', error);
    }
  };

  const onSubmit = value => {};

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          backgroundColor={'#fff'}
          translucent={false}
          barStyle={'dark-content'}
        />
        <Header
          title={'Personal Information'}
          backIcon={true}
          onPressBack={() => {
            navigation.goBack();
          }}
        />
        <Formik
          initialValues={RegisterFields || SignUpVS}
          onSubmit={values => {
            {
              data ? validateSocialPhone(values) : validateEmail(values);
            }
          }}
          // onSubmit={values => validateEmail(values)}
          validationSchema={
            data?.login_type == 'social login' ? SocialRegisterVS : RegisterVS
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
            useEffect(() => {}, []);
            return (
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

                <AppInput
                  title={'Phone Number'}
                  placeholder={'Type here'}
                  placeholderTextColor={colors.g3}
                  onChangeText={handleChange('phone')}
                  value={values.phone}
                  touched={touched.phone}
                  errorMessage={errors.phone}
                  keyboardType={'number-pad'}
                />
                {userType == 'bestie' && (
                  <AppInput
                    title={'Location'}
                    placeholder={'Type here'}
                    placeholderTextColor={colors.g3}
                    onChangeText={handleChange('location')}
                    value={values.location}
                    touched={touched.location}
                    errorMessage={errors.location}
                  />
                )}
                {userType == 'user' && (
                  <AppInput
                    title={'Country'}
                    placeholder={'Type here'}
                    placeholderTextColor={colors.g3}
                    onChangeText={handleChange('country')}
                    value={values?.country}
                    touched={touched.country}
                    errorMessage={errors.country}
                  />
                )}
                {userType == 'user' && (
                  <AppInput
                    title={'City'}
                    placeholder={'Type here'}
                    placeholderTextColor={colors.g3}
                    onChangeText={handleChange('city')}
                    value={values?.city}
                    touched={touched.city}
                    errorMessage={errors.city}
                  />
                )}

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
                {/* we will use it later if need */}
                {/* <LocationInput
                title={'Location'}
                placeholder={'Set your location'}
              /> */}

                {userType == 'bestie' && (
                  <DropDown
                    label={'Experience'}
                    placeholder={'Select'}
                    containerStyle={styles.dropContainer}
                    options={ExperienceList}
                    value={experience}
                    onChangeValue={txt => setExperience(txt.value)}
                  />
                )}

                <DropDown
                  label={'Sex'}
                  placeholder={'Select'}
                  containerStyle={styles.dropContainer}
                  options={Selection_List}
                  value={sex}
                  onChangeValue={txt => setsex(txt.value)}
                  searchInput={true}
                />
                {userType == 'user' && (
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
                )}

                <AppButton
                  width={WP('40')}
                  bgColor={colors.b1}
                  title={'Update'}
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
        <AppLoader loading={loading} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;
