import {
  Admin,
  Resource,
  ShowGuesser
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./components/UserList";
import { UserEdit } from "./components/UserEdit";
import { UserCreate } from "./components/UserCreate";
import { PostList } from "./components/PostList";
import { PostEdit } from "./components/PostEdit";
import { PostCreate } from "./components/PostCreate";
import { UserShow } from "./components/UserShow";
import { PostShow } from "./components/PostShow";


export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} />
  </Admin>
);
