import { FC, memo } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AdminRoute } from "../../components";
import AdminDashboard from "./dashboard";


const AdminRoutes: FC<any> = (props) => {

    return(
       <Router>
           <Switch>
               <AdminRoute path="/admin" Component={AdminDashboard} />
           </Switch>
       </Router>
    )
}

export default memo(AdminRoutes);