import { makeStyles } from "@material-ui/core";


export const styles = makeStyles((theme:any)=>({
    root:{
        display:"flex",
        height:"90vh",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    form:{
        display:"flex",
        flexDirection:"column",
        minHeight:220,
        justifyContent:"space-around",
        width:"100%",
        alignItems:"center"
    },
    input:{
        width:"100%",
        maxWidth:"350px",
    },
    error:{
        fontSize:"14px",
        color: "#ef5359",
        paddingLeft: "10px",
        paddingRight: "10px",
        maxWidth:"350px",
    }
}))