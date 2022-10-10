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
    title: 'him/he',
    value: 'him/he',
  },
  {
    title: 'they/them',
    value: 'they/them',
  },
];

export {
  web_client_id,
  stripe_publishableKey,
  networkText,
  image_options,

  interestList,

  drawerList,
  Selection_List,
  Pronoun_List

};
