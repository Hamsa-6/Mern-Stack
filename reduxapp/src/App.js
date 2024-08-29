import './App.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Home';
import Abouts from './Abouts';
import Contact from './Contact';
import Web from './Web';
import { Provider } from 'react-redux';
import { myStore } from './redux/config';
let routerPaths=createBrowserRouter([
  {"path":"/Home","element":<Home/>},
  {"path":"/Abouts","element":<Abouts/>},
  {"path":"/Contact","element":<Contact/>},
  {"path":"/Web","element":<Web/>}
])
function App() {
  return (
    <Provider store={myStore}>
      <div>
        <RouterProvider router={routerPaths} />
      </div>
    </Provider>
  );
}

export default App;
