import React from "react";
import { BsFacebook, BsLinkedin, BsFillBootstrapFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact, FaAngular } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const OrbitAnimation = () => {
  return (
    <div className="orbit lg:inline-block hidden">
      <ul className="orbit-wrap">
        <li className="orbit-center">
          {/* <BiLogoJavascript className="orbit-center__icon fa fa-code" /> */}
        </li>

        <li>
          <ul className="ring-0">
            <li>
              <FaReact className="orbit-icon" />
              {/* <i className="orbit-icon fa fa-git"></i> */}
            </li>
            <li>
              <i className="orbit-icon fa fa-free-code-camp"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-meetup"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-codepen"></i>
            </li>
          </ul>
        </li>

        <li>
          <ul className="ring-1">
            <li>
              <i className="orbit-icon fa fa-podcast"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-css3"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-html5"></i>
            </li>
          </ul>
        </li>
        <li>
          <ul className="ring-2">
            <li>
              <i className="orbit-icon fa fa-windows"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-safari"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-edge"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-linux"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-apple"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-chrome"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-android"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-firefox"></i>
            </li>
          </ul>
        </li>
        <li>
          <ul className="ring-3">
            <li>
              <i className="orbit-icon fa fa-coffee"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-terminal"></i>
            </li>
            <li>
              <i className="orbit-icon fa fa-heart-o"></i>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default OrbitAnimation;
