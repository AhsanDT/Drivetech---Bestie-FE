import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  AppButton,
  AppHeader,
  AppInput,
  AppLoader,
} from '../../../../components';
import {signUpRequest, clearSignupObject} from '../../../../redux/actions';
import {
  appIcons,
  colors,
  WP,
  SocialLinks,
  socialMediaLinks,
} from '../../../../shared/exporter';
import {styles} from './styles';
const AccountRate = ({navigation}) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const {signupObject} = useSelector(state => state.auth);
  const [loading, setloading] = useState(false);

  const handleSubmit = values => {
    var newArr = [
      {title: 'instagram', link: values?.instagram},
      {title: 'tiktok', link: values?.tiktok},
      {title: 'linkedin', link: values.linkedIn},
      {title: 'pinterest', link: values.pinterest},
    ];
    setloading(true);
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        age,
        sex,
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
      console.log('LOGIN TYPe==> ', login_type);

      if (login_type == 'manual') {
        data.append('user[password]', password);
      }
      data.append('user[age]', age),
        data.append('user[phone_number]', phoneNumber),
        data.append('user[experience]', experience),
        data.append('user[sex]', sex),
        data.append('user[profile_type]', profileType);
      data.append('user[rate]', rate);
      data.append(
        'user[camera_detail_attributes]camera_type',
        cameraType[0]?.title,
      ),
        otherEquipments?.forEach(obj => {
          data.append('user[camera_detail_attributes]equipment[]', obj?.title);
        });

      talentList?.forEach(obj => {
        data.append('user[user_talents_attributes][]talent_id', obj.id);
      });
      otherInputEquipment?.forEach(obj => {
        data.append('user[camera_detail_attributes]others[]', obj?.value);
      });

      data.append('user[selfie]', {
        uri: selfie?.uri,
        name: selfie?.name,
        type: 'image/jpeg',
      }),
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
          uri: obj?.image.uri,
          name: obj?.image.fileName,
          type: obj?.image.type,
        });
      });

      data.append('user[profile_image]', {
        uri: profilePhoto?.uri,
        name: profilePhoto?.fileName,
        type: profilePhoto?.type,
      });
      data.append('user[social_media_attributes][]', newArr);

      const cbSuccess = res => {
        setloading(false);
        Alert.alert('Congrats', 'Signup Successfully');
        navigation.replace('Login');

        dispatch(clearSignupObject());
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      };
      const cbFailure = err => {
        setloading(false);
        console.log('Err.. bestie', err);
        Alert.alert('Error', err);
      };
      console.log('data==>', data);
      dispatch(signUpRequest(data, cbSuccess, cbFailure));
    } catch (error) {
      setloading(false);
      console.log('ERROR=> ', error);
    }
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
                    placeholderTextColor={colors.g3}
                  />
                  <AppInput
                    title={'Tiktok profile'}
                    value={values.tiktok}
                    onChangeText={handleChange('tiktok')}
                    errorMessage={errors?.tiktok}
                    touched={touched?.tiktok}
                    renderErrorMessage={true}
                    placeholder="Paste your tiktok profile link"
                    placeholderTextColor={colors.g3}
                  />
                  <AppInput
                    title={'Pinterest profile'}
                    value={values.pinterest}
                    onChangeText={handleChange('pinterest')}
                    errorMessage={errors?.pinterest}
                    touched={touched?.pinterest}
                    renderErrorMessage={true}
                    placeholder="Paste your pinterest profile link"
                    placeholderTextColor={colors.g3}
                  />
                  <AppInput
                    title={'Linkedin profile'}
                    value={values.linkedIn}
                    onChangeText={handleChange('linkedIn')}
                    errorMessage={errors?.linkedIn}
                    touched={touched?.linkedIn}
                    renderErrorMessage={true}
                    placeholder="Paste your linkedin profile link"
                    placeholderTextColor={colors.g3}
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
        <AppLoader loading={loading} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountRate;
