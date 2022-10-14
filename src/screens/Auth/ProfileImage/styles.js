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
    height: 28,
    width: 28,
  },
  uriImageContainer: {
    height: WP('39'),
    width: WP('39'),
    borderRadius: WP('39'),
  },
  buttonContainer: {
    padding: WP('3'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: WP('100'),
  },
  buttonContainer2: {
    padding: WP('3'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: WP('120'),
  },
});
export {styles};
