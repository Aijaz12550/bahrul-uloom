import { FC, memo } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@material-ui/core";
import { styles } from "./style"

interface Props {
    typeValue: string,
    typeChangeHandler: (a:any)=>void;
}
const Step1: FC<Props> = (props) => {
    const classes = styles();

    let { typeValue, typeChangeHandler } = props;

    return(
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={typeValue}
          onChange={typeChangeHandler}
        >
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Teacher">Teacher</MenuItem>
         
        </Select>
      </FormControl>
        
    )
}

export default memo(Step1);