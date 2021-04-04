import { makeStyles } from "@material-ui/core";


export const styles = makeStyles((theme)=>({
   cardContainer : {
       display: "flex",
       justifyContent:"space-around",
       flexDirection:"row",
       flexWrap:"wrap",
       width: "100%",
       padding: theme.spacing(5)
   }
}))