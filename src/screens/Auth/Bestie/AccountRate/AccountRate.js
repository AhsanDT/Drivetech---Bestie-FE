import {Formik} from 'formik';
import React, {useRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppButton, AppHeader, AppInput} from '../../../../components';
import {
  account_RateFormField,
  account_RateVS,
  appIcons,
  colors,
  WP,
} from '../../../../shared/exporter';
import {styles} from './styles';
import * as TYPES from '../../../../redux/actions/types/auth_types';

const AccountRate = ({navigation}) => {
  const {signupObject} = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const ref = useRef();
  const handleSubmit = values => {
    dispatch({type: TYPES.UPDATE_SIGNUP_OBJECT, payload: {rate: values.rate}});
    navigation.navigate('AddSocialMediaLinks');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />
      <AppHeader title={'Set Your\nRate'} />
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
        }) => (
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
                title={'Back'}
                width={WP('35')}
                height={WP('13')}
                bgColor={colors.g8}
                textColor={colors.g9}
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <AppButton
                title={'Next'}
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
    </SafeAreaView>
  );
};

export default AccountRate;
