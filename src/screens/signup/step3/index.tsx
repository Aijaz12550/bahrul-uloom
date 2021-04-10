import { Grid, TextField } from "@material-ui/core";
import { FC, memo } from "react";
import { styles } from "./style";

const Step3: FC<any> = (props) => {
  let { values, changeHandler, validationError } = props;

  // hooks
  const classes = styles();

  return (
    <Grid container justify="center">
      <TextField
        className={classes.input}
        onChange={changeHandler}
        value={values.degree}
        name="degree"
        variant="outlined"
        label="Last Degree Name"
        error={Boolean(validationError.degree)}
        helperText={validationError.degree}
      />
      <TextField
        className={classes.input}
        onChange={changeHandler}
        value={values.startYear}
        name="startYear"
        variant="outlined"
        label="Start Year"
        type="month"
        InputLabelProps={{
            shrink: true,
          }}
      />
      <TextField
        className={classes.input}
        onChange={changeHandler}
        value={values.endYear}
        name="endYear"
        variant="outlined"
        label="End Year"
        type="month"
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
  );
};

export default memo(Step3);
