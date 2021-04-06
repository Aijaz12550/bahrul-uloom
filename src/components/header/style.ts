import { makeStyles } from "@material-ui/core";


export const styles = makeStyles((theme:any) => ({
    tabs:{
        marginLeft:"auto",
        display:"flex",
        justifyContent:"space-around"

    },
    tab:{
        marginLeft:"15px",
        marginRight:"15px",
        fontSize:"16px",
        textTransform:"capitalize",
        cursor:"pointer",
        transition:"all 0.2s",
        "&:hover":{
            transition:"all 0.2s",
            transform:"translateY(-1px)"
        },
        "&:active":{
            transform:"translateY(1px)"
        }
    },
    logo:{
        cursor:"pointer"
    }
}))