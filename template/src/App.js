import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import PageA from './pages/PageA/PageA';
import PageB from './pages/PageB/PageB';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<PageA />} />
        <Route path="page-b" element={<PageB />} />
      </Routes>
    </Layout>
  );
}

export default App;
