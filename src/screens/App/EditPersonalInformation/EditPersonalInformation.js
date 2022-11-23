import React, {useState, useEffect, useRef} from 'react';
import {View, Text, SafeAreaView, StatusBar, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppHeader,
  AppInput,
  AppLoader,
  DropDown,
  Header,
  Load,
} from '../../../components';
// import * as TYPES from '../../../../redux/actions/types/auth_types';
import styles from './styles';
import {
  colors,
  WP,
  Selection_List,
  Pronoun_List,
  ExperienceList,
  updateBestieInfo,
  UpdateBestieInfoSVS,
  updateEndUserInfo,
  updateEnduserInfoFields,
} from '../../../shared/exporter';
import {Formik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {
  validateEmailAction,
  validateSocialPhoneAction,
  updateSignupObject,
  updateProfileAction,
} from '../../../redux/actions';
const Register = ({navigation, route}) => {
  const {userInfo, userType} = useSelector(state => state.auth);

  // const [data, setdata] = useState(route?.params?.data);
  const [location, setlocation] = useState('');
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [sex, setsex] = useState(userInfo?.data?.sex);
  const [experience, setExperience] = useState(userInfo?.data?.experience);
  const [pronoun, setPronoun] = useState(userInfo?.data?.pronoun);
  const ref = useRef();

  const onPressUpdate = value => {
    setloading(true);
    try {
      const data = new FormData();
      data.append('profile[first_name]', value.firstName),
        data.append('profile[email]', value.email?.toLowerCase()),
        data.append('profile[last_name]', value.lastName);
      data.append('profile[age]', value.age),
        data.append('profile[phone_number]', value.phone),
        data.append('profile[sex]', sex);

      if (userType == 'user') {
        data.append('profile[pronoun]', pronoun);
        data.append('profile[city]', value.city);
        data.append('profile[country]', value.country);
      }
      if (userType == 'bestie') {
        data.append('profile[location]', value.location);
        data.append('profile[experience]', experience);
      }

      const cbSuccess = res => {
        setloading(false);
        Alert.alert(
          'Alert',
          'Your personal information has updated successfully.',
        );

        navigation.goBack();
      };
      const cbFailure = err => {
        console.log('RES==> ', err);

        setloading(false);
        Alert.alert('Error', 'Something went wrong.');
      };
      dispatch(updateProfileAction(data, cbSuccess, cbFailure));
    } catch (error) {
      setloading(false);
    }
  };

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
          initialValues={
            userType == 'bestie' ? updateBestieInfo : updateEnduserInfoFields
          }
          onSubmit={values => {
            onPressUpdate(values);
          }}
          innerRef={ref}
          validationSchema={
            userType == 'bestie' ? UpdateBestieInfoSVS : updateEndUserInfo
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
              const {data} = userInfo;
              setFieldValue('age', data?.age?.toString());
              setFieldValue('firstName', data?.first_name);
              setFieldValue('lastName', data?.last_name);
              setFieldValue('email', data?.email);
              setFieldValue('phone', data?.phone_number);
              if (userType == 'user') {
                setFieldValue('country', data?.country);
                setFieldValue('city', data?.city);
              }
              if (userType == 'bestie') {
                setFieldValue('location', 'USA');
              }
            }, []);
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
                  value={values?.email}
                  touched={touched.email}
                  errorMessage={errors.email}
                  keyboardType={'email-address'}
                  editable={
                    userInfo?.data?.login_type == 'social login' ? false : true
                  }
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
