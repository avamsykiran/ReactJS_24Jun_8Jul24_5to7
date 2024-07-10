import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './uis/AboutUs';
import ContactsList from "./uis/ContactsLists";
import MenuBar from "./uis/MenuBar";

const App = () => (
  <Router>
    <MenuBar title="Address Book 2.0" />
    
    <Routes>
      <Route path='/' element={<AboutUs />} />
      <Route path='/contacts' element={<ContactsList />} />
    </Routes>
  </Router>
);

export default App;
