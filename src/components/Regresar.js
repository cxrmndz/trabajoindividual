import {Link} from "react-router-dom";
import {FaAngleLeft} from "react-icons/fa";

export function Regresar(){
    return (
        <div className="regresar">
            <Link to="/" className="btn btn-light">
                <FaAngleLeft/>
            </Link>
        </div>
    )
}