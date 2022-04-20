import { Dashboard } from "./pages/Dashboard";
import { Tasks } from "./pages/Tasks/index";
import { Events } from "./pages/Events/index";

import IconDashBoard from "./assets/images/icon-dashboard-menu.png";
import IconCalendar from "./assets/images/icon-calendar.png";
import IconTasks from "./assets/images/icon-tasks.png";

import { Route, Switch } from "react-router-dom";

export const routes = [
  {
    name: "Dashboard",
    path: "/",
    component: <Dashboard />,
    icon: IconDashBoard,
  },
  {
    name: "Tasks",
    path: "/tasks",
    component: <Tasks />,
    icon: IconTasks,
  },
  {
    name: "Events",
    path: "/events",
    component: <Events />,
    icon: IconCalendar,
  },
];

export const RoutesComponent = () => {
  return (
    // Switch so se usa nessa versao do Route
    <Switch>
      {routes &&
        routes.map((item) => (
          <Route
            path={item.path}
            render={() => item.component}
            exact //precisa disso para saber exatamente o caminho ou so pega o primeiro
            key={item.path} //para o react nao se perder
          />
        ))}
    </Switch>
  );
};
