import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    padding: WP('2'),
    alignItems: 'center',
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
    height: WP('45'),
    width: WP('45'),
    borderRadius: WP('45'),
  },
  headerTextContainer: {
    padding: WP('1'),
    marginHorizontal: WP('5'),
  },
  buttonContainer: {
    padding: WP('5'),
    flexDirection: 'row',
    justifyContent: 'space-between',
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
