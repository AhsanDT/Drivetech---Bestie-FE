import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    width: WP('30'),
    height: WP('30'),
    padding: WP('2'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  uploadImageContainer: {
    width: WP('40'),
    height: WP('40'),
    borderRadius: 20,
    backgroundColor: colors.g2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.g7,
    borderStyle: 'dashed',
  },
  cameraContainer: {
    height: WP('50'),
    width: WP('50'),
    marginVertical: WP('3'),
  },
  uriImageContainer: {
    height: WP('50'),
    width: WP('50'),
    borderRadius: WP('50'),
    marginVertical: WP('4'),
  },
  headerTextContainer: {
    padding: WP('1'),
    marginHorizontal: WP('5'),
  },
  buttonContainer: {
    padding: WP('5'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: WP('45'),
  },
  faceTextStyle: {
    fontFamily: family.Poppin_Medium,
    color: colors.b1,
    fontSize: size.text_16,
  },
  pictureTextStyle: {
    fontFamily: family.Poppin_Regular,
    fontSize: size.text_12,
    color: colors.b1,
  },
});

export default styles;
