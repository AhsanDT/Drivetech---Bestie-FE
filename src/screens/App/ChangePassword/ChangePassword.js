import React, {useState} from 'react';
import {View, SafeAreaView, Alert, Text} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppButton,
  AppHeader,
  AppInput,
  AppLoader,
  Header,
} from '../../../components';
import {
  colors,
  WP,
  CreatePasswordVS,
  createFormFields,
  checkConnected,
  networkText,
} from '../../../shared/exporter';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {resetPassRequest} from '../../../redux/actions';
const CreatePassword = ({navigation, route}) => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  const onPressSignIn = async value => {
    const email = route?.params?.email;
    const check = await checkConnected();
    if (check) {
      setloading(true);
      const data = new FormData();
      data.append('email', email?.toLowerCase());
      data.append('password', value.password);
      try {
        const cbSuccess = response => {
          setloading(false);
          Alert.alert('Alert', 'Your password has been changed.');

          navigation?.navigate('EditProfileMenu');
        };
        const cbFailure = err => {
          Alert.alert('' || err);
          setloading(false);
        };
        dispatch(resetPassRequest(data, cbSuccess, cbFailure));
      } catch (error) {
        setloading(false);
      }
    } else {
      Alert.alert('Error', networkText);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Header
          title={'Change Password '}
          backIcon
          onPressBack={() => navigation.goBack()}
        />
        <Text style={styles.verificationText}>Create New Password</Text>

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
                placeholderTextColor={colors.g3}
                value={values.password}
                touched={touched.password}
                errorMessage={errors.password}
                secureTextEntry={true}
              />
              <AppInput
                title={'Re-type Password'}
                placeholder={'Type here'}
                onChangeText={handleChange('confirmPassword')}
                placeholderTextColor={colors.g3}
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
        <AppLoader loading={loading} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default CreatePassword;
