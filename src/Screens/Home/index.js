import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import "./index.scss";

const Home = () => {
  const history = useHistory();
  return (
    <Layout>
      Home Page Under Construction..
      <div>
        <button className="btn btn-primary" onClick={() => history.push("/")}>
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default Home;
