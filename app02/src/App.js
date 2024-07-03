import { Fragment } from 'react';
import ContactsList from "./uis/ContactsLists";
import MenuBar from "./uis/MenuBar";

const App = () => (
  <Fragment>
    <MenuBar title="Address Book 1.0" />
    <ContactsList />
  </Fragment>
);

export default App;
