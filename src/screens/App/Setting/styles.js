import {StyleSheet} from 'react-native';
import {colors, family, WP, size} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white2,
  },
  bottonContainer: {
    flexDirection: 'row',
    width: WP('45'),
    padding: WP('4'),
    backgroundColor: colors.orange,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // marginTop: WP('20'),
    marginVertical: WP('10'),
    // bottom: 20,
  },
  listContainer: {
    width: WP('95'),
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 13,
  },
  iconStyle: {
    height: 22,
    width: 22,
  },
  logOutTextStyle: {
    fontFamily: family.Poppin_SemiBold,
    fontSize: size.text_14,
    color: colors.red2,
    marginHorizontal: 8,
  },

  switchContainer: {
    backgroundColor: '#fff',
    width: WP('95'),
    alignSelf: 'center',
    height: WP('18'),
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: WP('-2'),
  },
  toggleText: {
    fontFamily: family.Poppin_Medium,
    fontSize: size.text_14,
    lineHeight: 20,
    color: colors.b6,
    paddingTop: WP('4'),
    paddingLeft: WP('3'),
  },

  // mainContainer: {
  //   backgroundColor: colors.white,
  //   width: WP('95'),
  //   borderRadius: 13,
  //   alignSelf: 'center',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginVertical: WP('2'),
  //   // elevation: 1,
  // },
  userStyle: {
    height: 33,
    width: 33,
    borderRadius: 33,
    backgroundColor: '#ccc',
  },
  textContainer: {
    width: WP('70'),
  },
  nameStyle: {
    fontFamily: family.Poppin_Medium,
    fontSize: size.text_14,
    lineHeight: 20,
    color: colors.b6,
  },
  editStyle: {
    fontFamily: family.Poppin_Light,
    fontSize: size.text_10,
    color: colors.black2,
    paddingTop: 10,
  },
  rightarrowStyle: {
    width: WP('5'),
    height: WP('5'),
  },
  toggleContainer: {
    margin: -15,
  },
});

export {styles};
