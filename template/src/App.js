import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import {ROOT_COMPONENT_ROUTE, SECOND_COMPONENT_ROUTE} from './route-constants';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path={`${ROOT_COMPONENT_ROUTE}`} element={<Home />} />
        <Route path={`${SECOND_COMPONENT_ROUTE}`} element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
