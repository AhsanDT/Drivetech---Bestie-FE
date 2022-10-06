import {appIcons, appImages} from '../theme/assets';

const web_client_id =
  '396667718237-b5871eer19sabub7jg8qhneksq75d443.apps.googleusercontent.com';

const stripe_publishableKey =
  'pk_test_51Lf25xJxAUizx0q5OIWfv41879r73FiP61ItNOlcUbE6MsGY8WCmULqWC9KrYyCYz18pbUBPDM7Lbb8N3giMguHh00P7XAmQlT';

const image_options = {
  width: 300,
  height: 400,
  multiple: true,
  mediaType: 'photo',
};

const networkText = 'Check Internet Connection';

const slidesData = [
  {
    key: 1,
    image: appImages.slider1,
  },
  {
    key: 2,
    image: appImages.slider2,
  },
  {
    key: 3,
    image: appImages.slider3,
  },
];

const drawerList = [
  {
    icon: appIcons.homeIcon,
    label: 'Home',
    screen: 'Fighter',
  },
  {
    icon: appIcons.calendarSelIcon,
    label: 'My Events',
    screen: 'Events',
  },
  {
    icon: appIcons.requestsIcon,
    label: 'Friend Request',
    screen: 'FriendRequests',
  },
  {
    icon: appIcons.aboutIcon,
    label: 'About Us',
    screen: 'About',
  },
  {
    icon: appIcons.supportIcon,
    label: 'Support',
    screen: 'SupportStack',
  },
  {
    icon: appIcons.infoIcon,
    label: 'FAQ',
    screen: 'FAQ',
  },
  {
    icon: appIcons.infoIcon,
    label: 'Preferences',
    screen: 'Preferences',
  },
  {
    icon: appIcons.infoIcon,
    label: 'Privacy Policy',
    screen: 'PrivacyPolicy',
  },
  {
    icon: appIcons.infoIcon,
    label: 'Terms & Conditions',
    screen: 'TermsofUse',
  },
  {
    icon: appIcons.settingsIcon,
    label: 'Settings',
    screen: 'SettingsStack',
  },
];

export {
  web_client_id,
  stripe_publishableKey,
  slidesData,
  networkText,
  image_options,
  drawerList,
};
