import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  WP,
  size,
  colors,
  family,
  appImages,
  platformOrientedCode,
} from '../../shared/exporter';
import {Icon} from 'react-native-elements';
import {drawerList} from '../../shared/utilities/constant';

// redux stuff
import {useDispatch, useSelector} from 'react-redux';
import {logoutRequest} from '../../redux/actions';

const DrawerHeader = ({navigation}) => {
  const dispatch = useDispatch(null);
  const {profileInfo} = useSelector(state => state?.profile);
  const {access_token, userType} = useSelector(state => state?.auth);

  const handleLogout = () => {
    const type =
      userType === 'fighter'
        ? 'users'
        : userType === 'referee'
        ? 'referees'
        : 'venues';
    dispatch(
      logoutRequest(
        type,
        access_token,
        res => {
          console.log('Res is ==> ', res);
          navigation.replace('Auth');
        },
        err => {
          console.log('Logout err ==> ', err);
        },
      ),
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerView}>
        <Image
          source={
            profileInfo?.profile_image
              ? {uri: profileInfo?.profile_image}
              : appImages.ph
          }
          style={styles.imgStyle}
        />
        <View>
          <Text style={styles.nameTxtStyle}>
            {profileInfo?.data?.first_name}
          </Text>
          <Text style={styles.emailTxtStyle}>{profileInfo?.data?.email}</Text>
        </View>
      </View>
      <View style={styles.drawerIconContainer}>
        {drawerList.map((item, i) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.rowContainer}
            onPress={() => navigation.navigate(item.screen)}>
            {item.label === 'Home' ? (
              <Icon name={'home'} type={'entypo'} size={16} color={colors.p1} />
            ) : (
              <Image
                resizeMode={'contain'}
                source={item.icon}
                style={
                  item.label === 'My Events'
                    ? styles.calIconStyle
                    : styles.iconStyle
                }
              />
            )}
            <Text style={styles.labelTextStyle}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.footerTxtStyle} onPress={() => handleLogout()}>
        Log Out
      </Text>
    </SafeAreaView>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerView: {
    width: WP('72'),
    marginTop: WP('8'),
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: WP('2'),
    paddingHorizontal: WP('9'),
  },
  imgStyle: {
    width: WP('13'),
    height: WP('13'),
    borderRadius: 30,
  },
  nameTxtStyle: {
    marginLeft: 9,
    color: colors.b4,
    fontSize: size.tiny,
    fontFamily: family.SourceSansPro_Bold,
  },
  emailTxtStyle: {
    marginTop: 4,
    marginLeft: 9,
    color: colors.b4,
    fontSize: size.xxxtiny,
    fontFamily: family.SourceSansPro_SemiBold,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: platformOrientedCode(WP('7.7'), WP('8.2')),
    paddingHorizontal: platformOrientedCode(WP('9.2'), WP('9.7')),
  },
  iconStyle: {
    width: 17,
    height: 17,
  },
  calIconStyle: {
    width: 14,
    height: 14,
    paddingRight: 15,
  },
  labelTextStyle: {
    left: 10,
    color: colors.b4,
    fontSize: size.xsmall,
    fontFamily: family.SamsungSans_Medium,
  },
  footerTxtStyle: {
    color: colors.b4,
    alignSelf: 'center',
    position: 'absolute',
    fontSize: size.xsmall,
    fontFamily: family.SamsungSans_Medium,
    bottom: platformOrientedCode(WP('7.7'), WP('12')),
  },
});
