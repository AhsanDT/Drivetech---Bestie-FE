import {StyleSheet} from 'react-native';
import {colors, family, size} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 0.94,
  },
  noRecordsView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noRecords: {
    marginRight: 17,
    color: colors.p1,
    fontSize: size.text_14,
    fontFamily: family.Poppin_Medium,
  },
});
export {styles};
