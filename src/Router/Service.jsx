import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <Outlet />
      <h2>Service component</h2>
      <div className="sub-ment">
        <Link to={""}>Web development</Link>
        <Link to={"Appdevelopment"}>app development</Link>
      </div>
    </div>
  );
}
