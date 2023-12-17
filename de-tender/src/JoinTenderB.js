import { Link } from "react-router-dom";
import './App.css';


const JoinTenderB =(props)=>{
    return (<button className={`${props.className}`} type="submit" onClick={props.onClick} style={props.style}>
            <Link to="/tender"style={{ textDecoration: "none" }}><p className="ihale">İhaleye Katıl</p> </Link>
        </button>);
}
export default JoinTenderB