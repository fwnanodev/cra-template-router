import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <h1>
        Layout
      </h1>

      <nav>
        <Link to="/">go to PageA (/)</Link>  
        <br />
        <Link to="/page-b">go to PageB (/page-b)</Link>
      </nav>
      {children}
    </>
  );
}

export default Layout;