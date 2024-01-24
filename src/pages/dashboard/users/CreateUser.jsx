import Form from "../../../components/Form";

export default function CreateUser(){
return(
    <div className="father">
           <Form
                 endPoint = "user/create"                  
                  navigate = "dashboard/users"
                  button = "Create"
                   />
    </div>
)
}
