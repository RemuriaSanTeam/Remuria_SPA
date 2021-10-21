import * as React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import routes from "./routes";

const Sample = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={idx}
        />
      ))}
    </Switch>
  );
};
/*
const Sample: React.FC = () => {
  const buildGreetingText: (date: Date) => string = (date) => {
    // 0 ~ 23 の範囲なので+1
    const hours = date.getHours() + 1;
    if (5 < hours && hours < 11) {
      return "おはようございます！";
    } else if (11 < hours && hours < 16) {
      return "こんにちは！";
    } else {
      return "こんばんは！";
    }
  };

  return <h1>{buildGreetingText(new Date())}</h1>;
};
*/
export default withRouter(Sample);
