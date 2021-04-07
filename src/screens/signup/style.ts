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
        alignItems:"center",
        maxWidth:"350px",
    },
    input:{
        width:"100%",
        marginBottom:"15px"
    },
    btn:{
        alignSelf:"flex-end"
    }
}))