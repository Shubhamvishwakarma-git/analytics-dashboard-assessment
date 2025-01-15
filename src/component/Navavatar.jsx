import React from "react";
import profileimg from "../images/user.jpg";

const Navavatar = () => {
  return (
    <>
      <li className="nav-item dropdown pe-3">
        <a
          href="#"
          className="nav-link nav-profile d-flex align-items-center pe-0"
          data-bs-toggle="dropdown"
        >
          <img src={profileimg} alt="profile" className="rounded-circle" />
          <span className="d-none d-md-block dropdown-toogle ps-2">
            S. Vishwakarma{" "}
          </span>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <li className="dropdown-header">
            <h6>Shubham</h6>
            <span>Web Developer</span>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a className="dropdown-item d-flex align-items-center" href="#"></a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <a href="#" className="dropdown=item d-flex align-item-center">
              <i className="bi bi-person"></i>
              <span>My Profile</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a href="#" className="dropdown=item d-flex align-item-center">
              <i className="bi bi-gear"></i>
              <span>Account Settings</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a href="#" className="dropdown=item d-flex align-item-center">
              <i className="bi bi-box-arrow-right"></i>
              <span>Sign Out</span>
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Navavatar;
