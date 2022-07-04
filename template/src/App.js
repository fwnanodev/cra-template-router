import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import RootComponent from './pages/RootComponent/RootComponent';
import SecondComponent from './pages/SecondComponent/SecondComponent';
import {ROOT_COMPONENT_ROUTE, SECOND_COMPONENT_ROUTE} from './route-constants';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path={`${ROOT_COMPONENT_ROUTE}`} element={<RootComponent />} />
        <Route path={`${SECOND_COMPONENT_ROUTE}`} element={<SecondComponent />} />
      </Routes>
    </Layout>
  );
}

export default App;
