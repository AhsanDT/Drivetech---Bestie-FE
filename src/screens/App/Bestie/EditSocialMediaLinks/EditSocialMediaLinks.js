import {Formik} from 'formik';
import React, {useRef, useState, useEffect} from 'react';
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
import {AppButton, Header, AppInput, AppLoader} from '../../../../components';
import {updateSocialMediaLinks} from '../../../../redux/actions';

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
  const {userInfo} = useSelector(state => state.auth);
  const [loading, setloading] = useState(false);
  console.log('Userinfo', userInfo);

  const handleSubmit = values => {
    console.log(userInfo?.social_media);
    var newArr = [
      {title: 'instagram', link: values?.instagram},
      {title: 'tiktok', link: values?.tiktok},
      {title: 'linkedin', link: values.linkedIn},
      {title: 'pinterest', link: values.pinterest},
    ];
    // console.log('new arr', newArr);
    // return;
    try {
      setloading(true);
      const data = new FormData();
      data.append('social_media', JSON.stringify(newArr));

      const cbSuccess = res => {
        console.log('RES UPDATE SOCIal==> ', res);
        setloading(false);
        // navigation.goBack();
      };
      const cbFailure = err => {
        setloading(false);
        Alert.alert('Error', 'Something went wrong.');
        console.log('error==>', err);
      };
      console.log('SOCIAL UPDATED==> ', data);
      dispatch(updateSocialMediaLinks(data, cbSuccess, cbFailure));
    } catch (error) {
      setloading(false);
      console.log('error==>', error);
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
        <Header
          title={'Update Social Media Links'}
          backIcon={true}
          onPressBack={() => {
            navigation.goBack();
          }}
        />
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
            setFieldValue,
          }) => {
            useEffect(() => {
              setFieldValue('tiktok', userInfo?.social_media[1]?.link);
              setFieldValue('instagram', userInfo?.social_media[0]?.link);
              setFieldValue('pinterest', userInfo?.social_media[3]?.link);
              setFieldValue('linkedIn', userInfo?.social_media[2]?.link);
            }, []);
            return (
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
                    title={'Update'}
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
            );
          }}
        </Formik>
        <AppLoader loading={loading} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountRate;
