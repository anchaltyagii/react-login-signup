import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import "./index.scss";

const About = () => {
  const history = useHistory();
  return (
    <Layout>
      About Page Under Construction..
      <div>
        <button className="btn btn-primary" onClick={() => history.push("/")}>
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default About;
