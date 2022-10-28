import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppButton, AppHeader, AppInput} from '../../../../components';
import {
  account_RateFormField,
  account_RateVS,
  appIcons,
  colors,
  WP,
  SocialLinks,
  socialMediaLinks,
} from '../../../../shared/exporter';
import {styles} from './styles';
import * as TYPES from '../../../../redux/actions/types/auth_types';
const AccountRate = ({navigation}) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const {signupObject} = useSelector(state => state.auth);
  const [loading, setloading] = useState(false);

  console.log('SIGNUP obj==> ', signupObject);

  const handleSubmit = values => {
    let arrayLinks = [];
    let arrayTitle = ['instagram', 'tiktok', 'pinterest', 'linkedin'];
    arrayLinks.push(
      values.instagram,
      values.tiktok,
      values.pinterest,
      values.linkedIn,
    );

    setloading(true);
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        country,
        city,
        phoneNumber,
        age,
        sex,
        pronoun,
        profilePhoto,
        interestList,
        idCardfront,
        idCardBack,
        login_type,
        selfie,
        profileType,
        experience,
        portfolio,
        rate,
        talentList,
        cameraType,
        otherEquipments,
        otherInputEquipment,
      } = signupObject;
      const data = new FormData();
      data.append('user[first_name]', firstName),
        data.append('user[email]', email?.toLowerCase()),
        data.append('user[last_name]', lastName);
      if (login_type == 'manual') {
        data.append('user[password]', password);
      }
      data.append('user[age]', age),
        data.append('user[phone_number]', phoneNumber),
        data.append('user[experience]', experience),
        data.append('user[sex]', sex),
        data.append('user[profile_type]', profileType);
      data.append('user[rate]', rate);
      data.append('user[camera_detail_attributes]camera_type', cameraType),
        data.append(
          'user[camera_detail_attributes]equipment[]',
          otherEquipments,
        ),
        talentList.forEach(obj => {
          data.append('user[user_talents_attributes][]talent_id', obj.id);
        });

      data.append(
        'user[camera_detail_attributes]others[]',
        otherInputEquipment,
      ),
        //
        // data.append('user[selfie]', {
        //   uri: `file://${showPhoto}`,
        //   name: showPhoto,
        //   type: 'image/jpeg',
        // }),
        data.append('user[id_front_image]', {
          uri: idCardfront?.uri,
          name: idCardfront?.fileName,
          type: idCardfront?.type,
        }),
        data.append('user[id_back_image]', {
          uri: idCardBack?.uri,
          name: idCardBack?.fileName,
          type: idCardBack?.type,
        }),
        interestList.forEach(obj => {
          data.append('user[user_interests_attributes][]interest_id', obj.id);
        });

      portfolio.forEach(obj => {
        data.append('user[portfolio][]', {
          uri: obj.uri,
          name: obj.name,
          type: obj.type,
        });
      });

      data.append('user[profile_image]', {
        uri: profilePhoto?.uri,
        name: profilePhoto?.fileName,
        type: profilePhoto?.type,
      });

      const cbSuccess = res => {
        setloading(false);
        Alert.alert('Congrats', 'Signup Successfully');
        // navigation.replace('Login');
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      };
      const cbFailure = err => {
        console.log('Err..', err);
        Alert.alert('Error', err);
        setloading(false);
      };
      // dispatch(signUpRequest(data, cbSuccess, cbFailure));
      console.log('FINAL FORM DATA==> ', data);
    } catch (error) {
      console.log('ERROR=> ', error);

      setloading(false);
    }

    // dispatch({type: TYPES.UPDATE_SIGNUP_OBJECT, payload: {rate: values.rate}});
    // navigation.navigate('PaymentMethod');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />
      <ScrollView>
        <AppHeader title={'Connect Your\nSocial Media'} />
        <Formik
          innerRef={ref}
          initialValues={socialMediaLinks}
          onSubmit={values => {
            handleSubmit(values);
          }}
          validationSchema={SocialLinks}>
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
            <View style={{flexGrow: 0.98}}>
              <ScrollView>
                <View style={styles.textContainer}>
                  <AppInput
                    title={'Instagram profile'}
                    value={values.instagram}
                    onChangeText={handleChange('instagram')}
                    errorMessage={errors?.instagram}
                    touched={touched?.instagram}
                    renderErrorMessage={true}
                    placeholder="Paste your instagram profile link"
                  />
                  <AppInput
                    title={'Tiktok profile'}
                    value={values.tiktok}
                    onChangeText={handleChange('tiktok')}
                    errorMessage={errors?.tiktok}
                    touched={touched?.tiktok}
                    renderErrorMessage={true}
                    placeholder="Paste your tiktok profile link"
                  />
                  <AppInput
                    title={'Pinterest profile'}
                    value={values.pinterest}
                    onChangeText={handleChange('pinterest')}
                    errorMessage={errors?.pinterest}
                    touched={touched?.pinterest}
                    renderErrorMessage={true}
                    placeholder="Paste your pinterest profile link"
                  />
                  <AppInput
                    title={'Linkedin profile'}
                    value={values.linkedIn}
                    onChangeText={handleChange('linkedIn')}
                    errorMessage={errors?.linkedIn}
                    touched={touched?.linkedIn}
                    renderErrorMessage={true}
                    placeholder="Paste your linkedin profile link"
                  />
                </View>
              </ScrollView>
              <View style={styles.buttonContainer}>
                {/* <AppButton
                title={'Back'}
                width={WP('35')}
                height={WP('13')}
                bgColor={colors.g8}
                textColor={colors.g9}
                onPress={() => {
                  navigation.goBack();
                }}
              /> */}
                <AppButton
                  title={'Finish'}
                  width={WP('35')}
                  height={WP('13')}
                  bgColor={colors.b1}
                  //   disabled={image ? false : true}
                  onPress={() => {
                    handleSubmit();
                  }}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountRate;
