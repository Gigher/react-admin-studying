import {
  Admin,
  Resource
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./components/UserList";
import { UserEdit } from "./components/UserEdit";
import { UserCreate } from "./components/UserCreate";
import { PostList } from "./components/PostList";
import { PostEdit } from "./components/PostEdit";
import { PostCreate } from "./components/PostCreate";


export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
);
