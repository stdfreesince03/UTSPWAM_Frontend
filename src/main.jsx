import {StrictMode, useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import {Provider, useDispatch} from 'react-redux'
import store from './redux/store.js'
import './styles/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexLayout from "./layouts/IndexLayout.jsx";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import ContactPage from "./pages/Contact.jsx";
import LabPage from "./pages/Lab.jsx";
import CoursesPage from "./pages/Courses.jsx";
import PricingPage from "./pages/ Pricing.jsx";
import LabLayout from "./layouts/LabLayout.jsx";
import LabGame from "./pages/LabGame.jsx";
import LoginPage from './pages/Login.jsx';
import SignUpPage from "./pages/SignUp.jsx";
import updateIsLoggedIn from "./redux/slices/auth-thunks.js";


// console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);

const router = createBrowserRouter([
    {
        path:"/",
        element:<IndexLayout/>,
        children:[
            {path:"",element:<HomePage/>},
            {path:"home",element:<HomePage/>},
            {path:"courses",element:<CoursesPage/>},
            {path:"about",element:<AboutPage/>},
            {path:"contact",element:<ContactPage/>},
            {path:"pricing",element:<PricingPage/>},
            {path:"labs",element:<LabPage/>}
        ]
    },
    {
        path: "labs",
        element: <LabLayout />,
        children:[
            {
                path:":labID",
                element: <LabGame/>
            },
        ]

    },
    {
        path:"login",
        element: <IndexLayout/>,
        children:[
            {path:"",element:<LoginPage/>},
        ]
    },
    {
        path:"signup",
        element: <IndexLayout/>,
        children:[
            {path:"",element:<SignUpPage/>},
        ]
    }
]);


function AppInitializer() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateIsLoggedIn());
    }, [dispatch]);

    return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <AppInitializer />
        </Provider>
    </StrictMode>
);


