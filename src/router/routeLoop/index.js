import React from "react";
import { Route } from "react-router-dom";
const routerMap = val =>
   val.map((item, index) => (
   <Route
      key={index}
      exact={item.exact ? true : false}
      path={item.path}
      render={match => <item.component {...match} routers={item.child} />}
    />
  ))
export default routerMap;
