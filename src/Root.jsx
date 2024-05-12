import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx"
import Wrapper from "./components/Wrapper.jsx";




export default function Root(){
    return (
        <Wrapper>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </Wrapper>
    )
}