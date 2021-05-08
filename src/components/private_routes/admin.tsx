import { FC, memo } from "react";
import { Route } from "react-router-dom";

const AdminRoute: FC<any> = (props) => {
    let {Component, path } = props;

    return(
        <Route 
        exact 
        path={path}
        render={(prop)=>{
            return <Component {...prop} />
        }}
        />
    )
}

export default memo(AdminRoute);