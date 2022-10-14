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
    borderRadius: WP('30'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  uploadImageContainer: {
    width: WP('40'),
    height: WP('40'),
    borderRadius: WP('30'),
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
    alignItems: 'center',
    marginTop: WP('10'),
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
  renderCameraContainer: {
    borderRadius: WP('60'),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: WP('60'),
    width: WP('60'),
    alignSelf: 'center',
    marginVertical: WP('20'),
  },
  CameraContainer: {
    height: WP('60'),
    width: WP('60'),
  },
  ImageContainer: {
    height: WP('60'),
    width: WP('60'),
    borderRadius: WP('60'),
    alignSelf: 'center',
    marginVertical: WP('22.2'),
  },
  buttonContainer2: {
    padding: WP('5'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: WP('5'),
  },
});

export default styles;
