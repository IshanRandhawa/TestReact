// in src/App.js
import * as React from "react";
import { Admin, Resource, ListGuesser , EditGuesser} from 'react-admin';
import  drfProvider  , { tokenAuthProvider, fetchJsonWithAuthToken } from 'ra-data-django-rest-framework';
import {PostList} from './Postslist'

import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

const authProvider = tokenAuthProvider({obtainAuthTokenUrl: "http://127.0.0.1:8000/api-token-auth/"})
const dataProvider = drfProvider("http://127.0.0.1:8000", fetchJsonWithAuthToken);

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
  <Resource name="api" list = {PostList}  edit={EditGuesser} />
</Admin>

);

;

export default App;
