import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Home'
import ReviewList from "../ReviewList";

const Routing = () => {
return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route index element={<ReviewList />} />
        </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default Routing