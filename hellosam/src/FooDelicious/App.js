import { BrowserRouter, Route ,Routes} from "react-router-dom";
import ResetPassword from "./FooDelicious.ResetPassword";
import "./App.css";
function App() {
    return(
        <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/ResetPassword" element={<ResetPassword./>}></Route>

        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App;
