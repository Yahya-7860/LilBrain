
import './App.css'
import AlphaPage from './Pages/AlphaPage'
import ChoicePage from './Pages/ChoicePage'
import FinalAlphaPage from './Pages/FinalAlphaPage'
import StartPage from './Pages/StartPage'
import Endgame from './components/Endgame'
import Score from './components/Score'
import EndPage from './Pages/EndPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<StartPage />}
          >
          </Route>
          <Route
            exact
            path="/choicepage"
            element={<ChoicePage />}
          >
          </Route>
          <Route
            exact
            path="/alphapage"
            element={<AlphaPage />}
          >
          </Route>
        </Routes>
      </BrowserRouter>


      {/* <StartPage /> */}
      {/* <ChoicePage/> */}
      {/* <AlphaPage /> */}
      {/* <Score/> */}
      {/* <FinalAlphaPage /> */}
      {/* <Endgame/> */}
      {/* <EndPage /> */}
    </>
  )
}

export default App
