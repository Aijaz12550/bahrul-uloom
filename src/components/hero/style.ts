import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme:any)=>({
    imageLeft:{
        minHeight:"250px",
        display:"flex",
    },
    imageRight:{
        minHeight:"250px",
        display:"flex",
        alignItems:"flex-end",
        marginLeft:"-20px",
    },
    imagesContainer:{
        display:"flex",
        width:"100%",
        justifyContent:"center",
        flexWrap:"wrap",
        minHeight:"350px"
    },
    imgRight:{
        borderTop:"6px solid #fff",
        borderLeft:"6px solid #fff",
        boxShadow:"1px 0px 1px 4px #eee"
    },
    imgLeft:{
        
        boxShadow:"1px 2px 10px 4px #eee"
    },
    container:{
        padding: theme.spacing(5)
    },
    textContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    }
}))