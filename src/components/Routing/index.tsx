import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Home'

const Routing = () => {
return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
        </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default Routing