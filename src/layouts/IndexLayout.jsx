import NavBar from "../components/NavBar/NavBar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {Outlet} from 'react-router-dom'
import '../styles/Page.css'

export default function IndexLayout() {

    return (
        <div>
            <NavBar></NavBar>
            <main className="page-content">
                <Outlet/>
            </main>
            <Footer></Footer>
        </div>
    );
}