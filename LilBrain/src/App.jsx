
import './App.css'
import AlphaPage from './Pages/AlphaPage'
import ChoicePage from './Pages/ChoicePage'
import StartPage from './Pages/StartPage'
import EndPage from './Pages/EndPage'
import ColorPage from './Pages/ColorPage'
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
          <Route
            exact
            path="/scorepage"
            element={<EndPage />}
          >
          </Route>
          <Route
            exact
            path="/colorpage"
            element={<ColorPage />}
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
