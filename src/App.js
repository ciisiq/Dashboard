import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { RoutesComponent } from "./routes";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <main>
        <RoutesComponent />
      </main>
    </>
  );
}

export default App;
