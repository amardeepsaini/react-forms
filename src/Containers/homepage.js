import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";

const Homepage = props => {
  return (
    <div>
      <header>
        <div>
          <i class="fas fa-atom"></i>
          <p>Yarn Over</p>
        </div>
        {/* <nav>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Jordane</a>
            </li>
            <li>
              <a href="#">Laine</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav> */}
      </header>
      <section class="titles">
        <h1>React Forms with Formik and Yup</h1>
      </section>
      <section class="container-boxes">
        <div class="box">
          <div class="text">
            <Link to="/single-step">
              <h3>Single Step Form</h3>
              <p>
                The best teacher you can have, internationally renowned
                "hooker".
              </p>
            </Link>
          </div>
        </div>

        <div class="box">
          <div class="text">
            <Link to="/single-step">
              <h3>Single Step Form</h3>
              <p>
                The best teacher you can have, internationally renowned
                "hooker".
              </p>
            </Link>
          </div>
        </div>

        <div class="box">
          <div class="text">
            <Link to="/single-step">
              <h3>Single Step Form</h3>
              <p>
                The best teacher you can have, internationally renowned
                "hooker".
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
