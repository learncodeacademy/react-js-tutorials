import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  render() {
    const { location } = this.props;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={featuredClass}>
                <IndexLink to="/">Featured</IndexLink>
              </li>
              <li class={archivesClass}>
                <Link to="archives">Archives</Link>
              </li>
              <li class={settingsClass}>
                <Link to="settings">Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
