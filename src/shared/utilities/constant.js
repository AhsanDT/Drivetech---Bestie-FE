import {appIcons, appImages} from '../theme/assets';

const web_client_id =
  '396667718237-b5871eer19sabub7jg8qhneksq75d443.apps.googleusercontent.com';

const stripe_publishableKey =
  'pk_test_51Lf25xJxAUizx0q5OIWfv41879r73FiP61ItNOlcUbE6MsGY8WCmULqWC9KrYyCYz18pbUBPDM7Lbb8N3giMguHh00P7XAmQlT';

// const image_options = {
//   title: 'Load Photo',
//   cameraType: 'front',
//   customButtons: [
//     {name: 'button_id_1', title: 'CustomButton 1'},
//     {name: 'button_id_2', title: 'CustomButton 2'},
//   ],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };

let image_options = {
  quality: 1,
  allowsEditing: false,
  storageOptions: {skipBackup: true, path: 'images'},
  // width: image.size.width,
  // height: image.size.height,
  // multiple: true,
  // mediaType: 'photo',
};

const networkText = 'Check Internet Connection';

var interestList = [
  {
    key: 1,
    title: 'Event Photography',
    selected: false,
  },
  {
    key: 2,
    title: 'Branding',
    selected: false,
  },
  {
    key: 3,
    title: 'Wedding Photography',
    selected: false,
  },
  {
    key: 4,
    title: 'Stylling',
    selected: false,
  },
  {
    key: 5,
    title: 'Travel',
    selected: false,
  },
  {
    key: 6,
    title: 'Food Photography',
    selected: false,
  },
  {
    key: 7,
    title: 'Ecomerece Photography',
    selected: false,
  },
  {
    key: 8,
    title: 'Canva',
    selected: false,
  },
  {
    key: 12,
    title: 'Canva',
    selected: false,
  },
  {
    key: 9,
    title: 'Adobe',
    selected: false,
  },
  {
    key: 10,
    title: 'Dropbox',
    selected: false,
  },
  {
    key: 11,
    title: 'Merchandising',
    selected: false,
  },
];

const Selection_List = [
  {
    title: 'Male',
    value: 'Male',
  },
  {
    title: 'Female',
    value: 'Female',
  },
  {
    title: 'Other',
    value: 'Other',
  },
];

const Pronoun_List = [
  {
    title: 'she/her',
    value: 'she/her',
  },
  {
    title: 'he/him',
    value: 'he/him',
  },
  {
    title: 'they/them',
    value: 'they/them',
  },
];

const Camera_List = [
  {
    id: 0,
    title: 'iPhone',
    icon: appIcons.phone,
  },
  {
    id: 1,
    title: 'Digital Camera',
    icon: appIcons.camera2,
  },
  {
    id: 2,
    title: 'Film Camera',
    icon: appIcons.filmCamera,
  },
  {
    id: 3,
    title: '8mm',
    icon: appIcons.pixel,
  },
  {
    id: 4,
    title: 'Polaroid',
    icon: appIcons.polaroid,
  },
  {
    id: 5,
    title: 'Camcorder',
    icon: appIcons.camCorder,
  },
];

const Equipment_List = [
  {
    id: 0,
    title: 'Prime Ienses',
  },
  {
    id: 1,
    title: 'Tripod',
  },
  {
    id: 2,
    title: 'Reflector',
  },
  {
    id: 3,
    title: 'Carrying gear',
  },
];

const Tab_List = [
  {
    id: 0,
    route: 'Home',
    name: 'Home',
  },
  {
    id: 1,
    route: 'Jobs',
    name: 'Jobs',
  },
  {
    id: 2,
    route: 'Calendar',
    name: 'Calendar',
  },
  {
    id: 3,
    route: 'Chat',
    name: 'Chat',
  },
];

const Card_List = [
  {
    id: 0,
    title: 'Credit/Debit Card',
    subTitle: 'Visa, MasterCard, American Express',
    selected: false,
  },
  {
    id: 0,
    title: 'PayPal',
    subTitle: 'PayPal',
    selected: false,
  },
  {
    id: 0,
    title: 'Apple Pay',
    subTitle: 'Apple Pay',
    selected: false,
  },
];

const Setting_List = [
  {
    id: 0,
    title: 'Review Pendings',
    route: '',
  },
  {
    id: 1,
    title: 'Payment Method ',
    route: '',
  },
  {
    id: 2,
    title: 'FAQ',
    route: '',
  },
  {
    id: 3,
    title: 'Terms & Conditions',
    route: 'TermsConditions',
  },
  {
    id: 4,
    title: 'Privacy Policy',
    route: 'PrivacyPolicy',
  },
  {
    id: 5,
    title: 'Appointment Notification',
    selected: true,
  },
  {
    id: 6,
    title: 'Support',
    route: '',
  },
  {
    id: 7,
    title: 'Switch to Bestie',
    selected: true,
  },
  {
    id: 8,
    title: 'Block List',
    route: '',
  },
];

export {
  web_client_id,
  stripe_publishableKey,
  networkText,
  image_options,
  interestList,
  Selection_List,
  Pronoun_List,
  Camera_List,
  Equipment_List,
  // image_option
  Tab_List,
  Card_List,
  Setting_List,
};
