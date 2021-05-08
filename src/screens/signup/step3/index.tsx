import { Grid, TextField } from "@material-ui/core";
import { FC, memo } from "react";
import { styles } from "./style";

const Step3: FC<any> = (props) => {
  let { values, changeHandler, validationErrors } = props;

  // hooks
  const classes = styles();

  console.log("validationErrors",validationErrors)
  return (
    <Grid container justify="center">
      <TextField
        className={classes.input}
        onChange={changeHandler}
        value={values.degree}
        name="degree"
        variant="outlined"
        label="Last Degree Name"
        error={Boolean(validationErrors.degree)}
        helperText={validationErrors?.degree}
      />
      <TextField
        className={classes.input}
        onChange={changeHandler}
        value={values.startYear}
        name="startYear"
        variant="outlined"
        label="Start Year"
        type="month"
        error={Boolean(validationErrors.startYear)}
        helperText={validationErrors.startYear}
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
        error={Boolean(validationErrors.endYear)}
        helperText={validationErrors.endYear}
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
  );
};

export default memo(Step3);
