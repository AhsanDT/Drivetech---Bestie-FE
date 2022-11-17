import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';
export const BottomTab = ({state, descriptors, navigation}) => {
  const [visible, setVisible] = useState(true);

  return (
    <View
      style={{
        backgroundColor: colors.white2,
        display: visible ? 'flex' : 'none',
      }}>
      <View style={styles.container}>
        <FlatList
          numColumns={4}
          data={state?.routes}
          renderItem={({item, index}) => {
            const {options} = descriptors[item.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : item.name;
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: item.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({name: item.name, merge: true});
              }
            };
            return (
              <View style={styles.tabContainer}>
                <TouchableOpacity
                  onPress={onPress}
                  style={[styles.tabContainer]}>
                  <Image
                    source={
                      index == 0
                        ? isFocused
                          ? appIcons.home
                          : appIcons.homeGray
                        : index == 1
                        ? isFocused
                          ? appIcons.jobColor
                          : appIcons.job
                        : index == 2
                        ? isFocused
                          ? appIcons.calendarColor
                          : appIcons.calendar
                        : index == 3
                        ? isFocused
                          ? appIcons.chatColor
                          : appIcons.chat
                        : null
                    }
                    style={[
                      index == 0
                        ? styles.firstImageStyle
                        : index == 1
                        ? styles.secondImageStyle
                        : index == 2
                        ? styles.thirdImageStyle
                        : index == 3
                        ? styles.profileImageStyle
                        : null,
                      {
                        tintColor: isFocused ? colors.p2 : colors.g1,
                      },
                    ]}
                  />
                  <Text
                    style={[
                      styles.tabName,
                      {color: isFocused ? colors.p2 : colors.g13},
                    ]}>
                    {label}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: 'rgba(235, 235, 235, 0.204026)',
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.34,
    // shadowRadius: 6.27,
    // elevation: 10,
  },
  firstImageStyle: {
    height: 20,
    width: 23,
    resizeMode: 'contain',
  },

  secondImageStyle: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    // left: -25,
  },
  thirdImageStyle: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    // right: -25,
  },
  profileImageStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },

  tabImageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  tabContainer: {
    height: 80,
    width: WP('25'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabName: {
    fontSize: size.text_10,
    fontFamily: family.Poppin_Regular,
  },
});
