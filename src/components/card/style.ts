import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme:any)=>({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      root:{
          maxWidth:"250px",
          minWidth:"250px",
          margin: theme.spacing(3)
      }
}))