import LogoDashboard from "../../assets/images/icon-dashboard-menu.png";
import { ShowDate } from "../showdate";
import { ContainerHeader } from "./styles";

export const Header = () => {
  return (
    <ContainerHeader>
      <div>
        <img alt="Logo" src={LogoDashboard} />
        <p>Darshboard</p>
      </div>
      <ShowDate />
    </ContainerHeader>
  );
};
