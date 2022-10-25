import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textStyle: {
    paddingHorizontal: WP('6'),
    marginBottom: 10,
    color: colors.b1,
    fontSize: size.text_16,
    fontFamily: family.Poppin_Medium,
  },
  contentContainer: {
    alignItems: 'center',
  },
  uploadImageContainer: {
    width: WP('29'),
    height: WP('29'),
    borderRadius: 20,
    backgroundColor: colors.g2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.g7,
    borderStyle: 'dashed',
    margin: 4,
  },
  cameraContainer: {
    height: 28,
    width: 28,
  },
  uriImageContainer: {
    height: WP('29'),
    width: WP('29'),
    borderRadius: 20,
  },
  ButtonContainer: {
    padding: WP('4'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export {styles};
