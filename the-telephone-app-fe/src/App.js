import StartGame from "./components/StartGame/StartGame";
import { Route, Routes } from "react-router-dom";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import ShowResult from "./components/ShowResult/ShowResult";
import DescribePicture from "./components/DescribePicture/DescribePicture";
import Draw from "./components/Draw/Draw";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import FullRoom from "./components/ErrorPage/FullRoom";
import CancelRoom from "./components/ErrorPage/CancelRoom";
import ExitGame from "./components/ErrorPage/ExitGame";
import WriteSentence from "./components/WriteSentence/WriteSentence";
import Begun from "./components/ErrorPage/Begun";
import WebFont from "webfontloader";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { LocalToastProvider } from "react-local-toast";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Roboto", "Chilanka"],
      },
    });
  }, []);
  return (
    <>
      <LocalToastProvider defaultPlacement="bottom">
        <Routes>
          <Route path={"/lobby"} element={<JoinRoom />}></Route>
          <Route path={"/:id_room?"} element={<StartGame />} />
          <Route path={"/start"} element={<WriteSentence />}></Route>
          <Route path={"/draw"} element={<Draw />}></Route>
          <Route path={"/write"} element={<DescribePicture />}></Route>
          <Route path={"/book"} element={<ShowResult />}></Route>
          <Route path={"/error"} element={<ErrorPage />}></Route>
          <Route path={"/full"} element={<FullRoom />}></Route>
          <Route path={"/cancel"} element={<CancelRoom />}></Route>
          <Route path={"/exit"} element={<ExitGame />}></Route>
          <Route path={"/begun"} element={<Begun />}></Route>
        </Routes>
      </LocalToastProvider>
    </>
  );
}

export default App;
