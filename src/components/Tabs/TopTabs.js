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
export const TopTabs = ({state, descriptors, navigation, position}) => {
  const [visible, setVisible] = useState(true);

  return (
    <View
      style={{
        display: visible ? 'flex' : 'none',
      }}>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
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
              // <View style={styles.tabContainer}>
              <TouchableOpacity
                onPress={onPress}
                style={[
                  styles.tabContainer2,
                  {
                    borderBottomWidth: isFocused ? 2 : 0,
                    borderBottomColor: isFocused ? colors.p2 : colors.g13,
                  },
                ]}>
                <Text
                  style={[
                    styles.tabName,
                    {
                      color: isFocused ? colors.b1 : colors.g13,
                    },
                  ]}>
                  {label}
                </Text>
              </TouchableOpacity>
              // </View>
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
    backgroundColor: colors.white,
    borderBottomColor: colors.g13,
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    height: 100,
    width: WP('45'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabName: {
    fontSize: size.text_16,
    fontFamily: family.Poppin_Medium,
    textAlign: 'center',
  },
  tabContainer2: {
    marginTop:WP('5.2'),
    width: WP('30'),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: WP('2'),
  },
});
