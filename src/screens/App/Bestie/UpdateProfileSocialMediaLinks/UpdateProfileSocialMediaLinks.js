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
import {Formik} from 'formik';

import {useDispatch, useSelector} from 'react-redux';
import {
  AppButton,
  Header,
  AppInput,
  AppLoader,
  AppHeader,
} from '../../../../components';
import {
  updateProfileAction,
  updateSocialMediaLinks,
} from '../../../../redux/actions';

import {
  appIcons,
  colors,
  WP,
  SocialLinks,
  socialMediaLinks,
} from '../../../../shared/exporter';
import {styles} from './styles';
const UpdateSocialMediaLink = ({navigation}) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const {userInfo} = useSelector(state => state.auth);
  const [loading, setloading] = useState(false);

  const handleSubmit = values => {
    var newArr = [
      {title: 'instagram', link: values?.instagram},
      {title: 'tiktok', link: values?.tiktok},
      {title: 'linkedin', link: values.linkedIn},
      {title: 'pinterest', link: values.pinterest},
    ];
    try {
      setloading(true);
      const data = new FormData();
      data.append('social_media', JSON.stringify(newArr));
      navigation.navigate('BestieStack', {
        screen: 'UpdateProfileAccountRate',
      });
      const cbSuccess = res => {
        setloading(false);
      };
      const cbFailure = err => {
        setloading(false);
        Alert.alert('Error', 'Something went wrong.');
      };
      dispatch(updateSocialMediaLinks(data, cbSuccess, cbFailure));
    } catch (error) {
      setloading(false);
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
            setFieldValue,
          }) => {
            useEffect(() => {
              setFieldValue('pinterest', '');
              setFieldValue('instagram', '');
              setFieldValue('tiktok', '');
              setFieldValue('linkedIn', '');
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
                      placeholder="Paste your instagram profile link here"
                      placeholderTextColor={colors.g3}
                    />
                    <AppInput
                      title={'Tiktok profile'}
                      value={values.tiktok}
                      onChangeText={handleChange('tiktok')}
                      errorMessage={errors?.tiktok}
                      touched={touched?.tiktok}
                      renderErrorMessage={true}
                      placeholder="Paste your tiktok profile link here"
                      placeholderTextColor={colors.g3}
                    />
                    <AppInput
                      title={'Pinterest profile'}
                      value={values.pinterest}
                      onChangeText={handleChange('pinterest')}
                      errorMessage={errors?.pinterest}
                      touched={touched?.pinterest}
                      renderErrorMessage={true}
                      placeholder="Paste your pinterest profile link here"
                      placeholderTextColor={colors.g3}
                    />
                    <AppInput
                      title={'Linkedin profile'}
                      value={values.linkedIn}
                      onChangeText={handleChange('linkedIn')}
                      errorMessage={errors?.linkedIn}
                      touched={touched?.linkedIn}
                      renderErrorMessage={true}
                      placeholder="Paste your linkedin profile link here"
                      placeholderTextColor={colors.g3}
                    />
                  </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                  <AppButton
                    title={'Update'}
                    width={WP('35')}
                    height={WP('13')}
                    bgColor={colors.b1}
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

export default UpdateSocialMediaLink;
