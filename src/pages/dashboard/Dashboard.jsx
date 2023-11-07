import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/topbar";
export default function Dashboard(){
    return(
        <div className="dash">
            <Topbar />
            <div className="content-flex">
            <Sidebar />
            <div style={{width:"80%"}}>
            <Outlet />

            </div>
            </div>
        </div>
    )
}