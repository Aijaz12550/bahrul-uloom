import { Grid, TextField } from "@material-ui/core";
import { FC, memo } from "react";
import { styles } from "./style";

const Step2: FC<any> = (props) => {
  // props
  let { values, changeHandler, validationErrors } = props;

  // hooks
  const classes = styles();

  // jsx
  return (
    <Grid container justify="center" className={classes.root}>
      <TextField
        error={Boolean(validationErrors.fullName)}
        helperText={validationErrors.fullName}
        className={classes.input}
        name="fullName"
        onChange={changeHandler}
        value={values.fullName}
        required
        variant="outlined"
        type="text"
        label="Full Name"
      />
      <TextField
        className={classes.input}
        name="email"
        onChange={changeHandler}
        value={values.email}
        required
        variant="outlined"
        type="email"
        label="Email"
        error={Boolean(validationErrors.email)}
        helperText={validationErrors.email}
      />
      <TextField
        id="date"
        label="Birthday"
        type="date"
        variant="outlined"
        className={classes.input}
        name="date"
        onChange={changeHandler}
        value={values.date}
        required
        InputLabelProps={{
          shrink: true,
        }}
        error={Boolean(validationErrors.date)}
        helperText={validationErrors.date}
      />
      <TextField
        className={classes.input}
        name="password"
        onChange={changeHandler}
        value={values.password}
        required
        variant="outlined"
        type="password"
        label="Password"
        error={Boolean(validationErrors.password)}
        helperText={validationErrors.password}
      />
      <TextField
        className={classes.input}
        name="address"
        onChange={changeHandler}
        value={values.address}
        required
        variant="outlined"
        type="text"
        label="Address"
        error={Boolean(validationErrors.address)}
        helperText={validationErrors.address}
      />
    </Grid>
  );
};

export default memo(Step2);
