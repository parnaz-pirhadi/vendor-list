import Router from "./components/Router";
import {ToastContainer, Zoom} from "react-toastify";
import "./styles/variables.scss"
import "./styles/App.scss"


function App() {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                zoom={Zoom}
                closeButton={false}
            />
            <Router/>

        </>
    );
}

export default App;
