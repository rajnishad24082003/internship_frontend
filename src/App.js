import './App.css';
import Signin from './components/Signin';
import Signup from "./components/Signup";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
<Routes>
<Route exact path="/" element={<Signin/>}>
</Route>

<Route exact path="/signuprj" element={<Signup/>}>
</Route>

</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
