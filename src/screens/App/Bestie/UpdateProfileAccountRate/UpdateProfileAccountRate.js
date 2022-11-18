import {Formik} from 'formik';
import React, {useRef, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  AppButton,
  AppHeader,
  AppInput,
  AppLoader,
} from '../../../../components';
import {
  account_RateFormField,
  account_RateVS,
  appIcons,
  colors,
  WP,
} from '../../../../shared/exporter';
import {styles} from './styles';
import {updateProfileAction} from '../../../../redux/actions';

const UpdateProfileAccountRate = ({navigation}) => {
  const {userInfo} = useSelector(state => state.auth);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef();

  const handleSubmit = values => {
    try {
      setloading(true);
      const data = new FormData();
      data.append('profile[rate]', values.rate);
      data.append('profile[profile_completed]', true);

      const cbSuccess = res => {
        setloading(false);
        navigation.replace('MainStack');
      };
      const cbFailure = err => {
        setloading(false);
        Alert.alert('Error', 'Something went wrong.');
      };
      dispatch(updateProfileAction(data, cbSuccess, cbFailure));
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
      <AppHeader title={'Set Your Rate'} />
      <Formik
        innerRef={ref}
        initialValues={account_RateFormField}
        onSubmit={values => {
          handleSubmit(values);
        }}
        validationSchema={account_RateVS}>
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
            setFieldValue('rate', userInfo?.data?.rate?.toString() || '');
          }, []);
          return (
            <View style={{flexGrow: 0.98}}>
              <ScrollView>
                <View style={styles.textContainer}>
                  <AppInput
                    title={'Rate'}
                    value={values.rate}
                    onChangeText={handleChange('rate')}
                    errorMessage={errors?.rate}
                    touched={touched?.rate}
                    renderErrorMessage={true}
                    keyboardType="number-pad"
                    maxLength={2}
                    leftIcon={
                      <Image
                        source={appIcons.dollar}
                        resizeMode={'contain'}
                        style={styles.iconStyle}
                      />
                    }
                  />
                  <Text style={styles.textStyle}>/h</Text>
                </View>
              </ScrollView>
              <View style={styles.buttonContainer}>
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
              <AppLoader loading={loading} />
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default UpdateProfileAccountRate;
