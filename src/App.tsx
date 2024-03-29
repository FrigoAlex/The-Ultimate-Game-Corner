import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import GamesSection from "./pages/GamesSection";
import GameDescription from "./pages/GameDescription";
import Footer from "./components/Footer";
import NoPage from "./components/NoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./components/privateRoutes";
import { PageRoutes, Params } from "./constants/pageRoutes";
import useSession from "./hooks/useUser"

import "./assets/styles/App.css";

const App = () => {
  const { user, login, logOut, errors } = useSession();
  return (
    <Router>
      <Navbar user={user} logout={logOut} />
      <Routes>
        <Route path={PageRoutes.HOME} element={<GamesSection />} />
        <Route path={PageRoutes.GAME} element={<PrivateRoutes user={user}/>}> 
          <Route path={PageRoutes.GAME+Params.GAME_ID} element={<GameDescription user={user}></GameDescription>}/>
        </Route>
        <Route path={PageRoutes.LOGIN} element={<Login errors={errors} login={login} user={user}/>} />
        <Route path={PageRoutes.REGISTER} element={<Register/>} />  
        <Route path="*" element={<NoPage />}/>
      </Routes>
      <Footer />
    </Router>
  )
};
export default App;