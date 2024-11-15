import './Logout.css'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logout} from "../../services/authservices.js";

export default function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleLogout(){
        try{
            await logout(dispatch,navigate);
        }catch(error){
            console.log('Logout Error: ', error);
        }
    }
    return (
        <button className="logout-button" onClick={()=>handleLogout()} >
            Logout
        </button>
    );
}