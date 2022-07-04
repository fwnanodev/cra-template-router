import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>
        Layout
      </h1>

      <nav>
        <Link to="/">go to PageA (/)</Link>
        <br />
        <Link to="/page-b">go to PageB (/page-b)</Link>
      </nav>

      {children}
    </div>
  );
}

export default Layout;
