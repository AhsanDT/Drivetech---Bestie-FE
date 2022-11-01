import {StyleSheet} from 'react-native';
import {colors, WP, family, sie, size} from '../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  msgContainer: {
    // flex: 1,
    marginBottom: WP('4.6'),
    marginHorizontal: WP('5'),
  },

  // Sender Bubble
  senderBubble: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  senderBubbleStyles: {
    margin: 3,
    padding: 15,
    paddingTop: 13,
    maxWidth: '75%',
    borderRadius: 25,
    borderBottomEndRadius: 3,
    backgroundColor: colors.g2,
  },
  senderMsgStyles: {
    color: colors.b1,
    fontSize: size.text_12,
    fontFamily: family.Poppin_Medium,
  },
  // Receiver Bubble
  receiverBubble: {
    width: '100%',
    flexDirection: 'row',
  },
  receiverBubbleStyles: {
    margin: 3,
    padding: 15,
    paddingTop: 13,
    borderRadius: 25,
    maxWidth: '100%',
    borderBottomStartRadius: 3,
    backgroundColor: colors.p1,
  },
  imgStyle: {
    top: WP('5'),
    width: WP('13.5'),
    height: WP('13.5'),
    borderRadius: WP('13.5'),
  },
  receiverMsgStyles: {
    fontSize: size.text_12,
    color: colors.white,
    fontFamily: family.Poppin_Medium,
  },
  personView: {
    alignItems: 'center',
    paddingVertical: WP('2.5'),
    backgroundColor: 'red',
  },
  personImgStyle: {
    width: WP('22'),
    height: WP('22'),
    borderRadius: WP('22'),
    backgroundColor: '#ccc',
  },
  nameTxtStyle: {
    color: colors.b1,
    fontSize: size.h6,
    paddingVertical: WP('4'),
    fontFamily: family.Gilroy_SemiBold,
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
  imgStyle: {
    height: 18,
    width: 17,
    resizeMode: 'contain',
    marginTop: WP('1.5'),
  },
  uriStyle: {
    height: 30,
    width: 25,
    resizeMode: 'contain',
    borderRadius: 10,
  },
});

export {styles};
