import { IoReloadCircleOutline } from "react-icons/io5";
import "./loading.css"

export default function Loading() {
    return( <div className="loading">
        <IoReloadCircleOutline className="loading-icon size-20 text-slate-600"/>
        </div>
    );
}