import {StatusBar, StyleSheet} from 'react-native';
import {WP, colors, size, family} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    padding: WP('3'),
    alignItems: 'center',
  },
  uploadImageContainer: {
    width: WP('85'),
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
    height: 28,
    width: 28,
  },
  uriImageContainer: {
    height: WP('40'),
    width: WP('85'),
    borderRadius: 20,
  },
  textStyle: {
    paddingHorizontal: WP('2.5'),
    marginBottom: 10,
    color: colors.b1,
    fontSize: size.text_16,
    fontFamily: family.Poppin_Medium,
    alignSelf: 'flex-start',
  },
  ButtonContainer: {
    padding: WP('4'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: WP('33'),
  },
});
export {styles};
