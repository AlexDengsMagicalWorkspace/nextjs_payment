import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Dashboard } from '@/app/dashboard';

import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from '../i18n/en';
const i18nProvider = polyglotI18nProvider(
  locale => {
      if (locale === 'fr') {
          return import('../i18n/fr').then(messages => messages.default);
      }

      if (locale === 'zh') {
        return import('../i18n/zh').then(messages => messages.default);
    }


      // Always fallback on english
      return englishMessages;
  },
  'en',
  [
      { locale: 'en', name: 'English' },
      { locale: 'fr', name: 'Français' },
      { locale: 'zh', name: 'Chinese' },
  ]
);
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
  <Admin 
    dataProvider={dataProvider}
    dashboard={Dashboard}
    i18nProvider={i18nProvider}
  >
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="name"
    />
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
    />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default AdminApp;