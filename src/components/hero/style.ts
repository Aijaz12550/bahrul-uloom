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
        marginLeft:"-25px",
    },
    imagesContainer:{
        display:"flex",
        width:"100%",
        justifyContent:"center",
        flexWrap:"wrap",
        minHeight:"350px",
    },
    imgRight:{
        borderTop:"8px solid #fff",
        borderLeft:"8px solid #fff",
    },
    imgLeft:{
        
        boxShadow:"1px 2px 10px 4px #eee"
    },
    container:{
        padding: theme.spacing(5),
    },
    textContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    },
    paragraph:{
        fontSize: "16px",
        wordSpacing: 3,
        marginTop: "15px"
    }
}))