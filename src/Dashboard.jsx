import Sidebar from "./components/Sidebar";
import Topbar from "./components/topbar";
export default function Dashboard(){
    return(
        <div>
            <Topbar />
            <div className="content-flex">
            <Sidebar />
            <h1>test</h1>
            </div>
        </div>
    )
}