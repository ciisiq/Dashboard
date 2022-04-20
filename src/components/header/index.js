import LogoDashboard from "../../assets/images/icon-dashboard-menu.png";
import { ShowDate } from "../showdate";
import { ContainerHeader } from "./styles";
import { useLocation } from "react-router-dom";

import IconDashBoard from "../../assets/images/icon-dashboard-menu.png";
import IconCalendar from "../../assets/images/icon-calendar.png";
import IconTasks from "../../assets/images/icon-tasks.png";

export const Header = () => {
  const location = useLocation();

  const getIcons = (name) => {
    switch (name) {
      case "Tasks":
        return IconTasks;
      case "Events":
        return IconCalendar;
      default:
        return IconDashBoard;
    }
  };

  return (
    <ContainerHeader>
      <div>
        <img
          alt="Logo"
          src={getIcons(location && location.state && location.state.name)}
        />
        <p>
          {(location && location.state && location.state.name) || "Dashboard"}
        </p>
      </div>
      <ShowDate />
    </ContainerHeader>
  );
};
