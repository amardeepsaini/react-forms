import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik, Formik, Form, FastField, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { fieldsConfig } from "./fields-config";
import { TEXT, RADIO, DATE, TIME, SELECT } from "../Constants/constants";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { validatorSchema } from "./validator";
import HandleMultiple from "../Components/TextField/textField";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    width: 300,
    padding: 20
  },
  control: {
    padding: theme.spacing(2)
  },
  m20: {
    padding: "20px !important"
  },
  m50: {
    padding: "50px !important"
  },
  error: {
    backgroundColor: "red"
  }
}));

const SingleStep = props => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {},
    validationSchema: validatorSchema,
    validateOnChange: false,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <>
      <header>
        <div>
          <i className="fas fa-atom"></i>
          <p>Single Step Form</p>
        </div>
      </header>
      <div className={classes.m50}>
        <form onSubmit={formik.handleSubmit}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={10}>
              {fieldsConfig.map(config => (
                <Grid className={`${classes.m20} `} key={config.name} item>
                  <Paper
                    elevation={3}
                    className={`${classes.paper} ${
                      formik.errors[config.name] ? classes.error : null
                    }`}
                  >
                    <FormLabel component="legend">{config.labelText}</FormLabel>
                    <br />
                    {(() => {
                      switch (config.type) {
                        case TEXT:
                        case TIME:
                        case DATE:
                          let abc = []
                            abc.push(<HandleMultiple config={config} formik={formik} />);
                          return abc;
                        case SELECT:
                          return (
                            <>
                              <Select
                                value={formik.values[config.name] || ""}
                                onChange={e =>
                                  formik.setFieldValue(
                                    config.name,
                                    e.target.value
                                  )
                                }
                                fullWidth
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                {config.options.map(option => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.text}
                                  </MenuItem>
                                ))}
                              </Select>
                            </>
                          );
                        case RADIO:
                          return (
                            <>
                              <RadioGroup
                                name={config.name}
                                value={formik.values[config.name]}
                                onChange={formik.handleChange}
                              >
                                {config.options.map(option => (
                                  <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.text}
                                  />
                                ))}
                              </RadioGroup>
                            </>
                          );
                      }
                    })()}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SingleStep;
