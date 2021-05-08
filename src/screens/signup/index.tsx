import { ChangeEvent, FC, memo, useState } from "react";
import { Grid, Button, Typography, CircularProgress, } from "@material-ui/core";
import { Header, Stepper } from "../../components";
import { styles } from "./style";
import Step1 from "./step1"
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import * as yup from "yup";
import { firestore, auth } from "../../config/firebase";

const headerRoutes = [{ title: "Home", route: "/" }, { title: "Support", route: ".support" }];

// yup schema 
const stepTwoSchema = yup.object({
    fullName: yup.string().required({ fullName: "Full name is required" }),
    email: yup.string().email().required({ email: "email is required" }),
    date: yup.string().required({ date: "Date of birth is required" }),
    password: yup.string().required({ password: "password is required" }),
    address: yup.string().required({ address: " Address is required." })
})

const stepThreeSchema = yup.object({
    degree: yup.string().required({ degree: "degree is required" }),
    startYear: yup.string().required({ startYear: "Please add the start year." }),
    endYear: yup.string().required({ endYear: "please add end year." })
})


// form initial values
const stepTwoInitialvalues = {
    fullName: "",
    email: "",
    date: "mm/dd/yyyy",
    password: "",
    address: ""
}

const stepThreeInitialValues = {
    degree: "",
    startYear: "",
    endYear: ""
}

const SignUp: FC<any> = () => {

    // hooks
    const classes = styles();
    let [step, setStep] = useState<number>(0);
    let [userType, setUserType] = useState<string>("Student")
    let [stepTwoValues, setStepTwoValues] = useState<any>(stepTwoInitialvalues);
    let [stepThreeValues, setStepThreeValues] = useState<any>(stepThreeInitialValues);
    let [validationErrors, setValidationErrors] = useState<any>({});
    let [file, setFile] = useState<any>({});
    let [error, setError] = useState<string>("");
    let [submitState, setSubmitState] = useState<boolean>(false);


    // handlers
    const userTypeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUserType(event.target.value)
    }

    const stepNextHandler = () => {
        if (step === 1) {
            try {
                stepTwoSchema.validateSync(stepTwoValues)
                setValidationErrors({})
            } catch (error) {
                setValidationErrors(error.errors[0])
                return
            }
        }

        setStep(++step)
    }

    const stepBackHandler = () => {
        setStep(--step)
    }

    const step2ChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let text = event.target.value;
        let name = event.target.name;
        stepTwoValues[name] = text;
        delete validationErrors[name]
        setStepTwoValues({ ...stepTwoValues });
        setError("")
    }

    const stepThreeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let text = event.target.value;
        let name = event.target.name;
        stepThreeValues[name] = text;
        delete validationErrors[name]
        setStepThreeValues({ ...stepThreeValues });
    }

    const stepperClickHandler = (st: number) => {
        if (step === 1) {
            try {
                let result = stepTwoSchema.validateSync(stepTwoValues)
                console.log("result", result)
                setValidationErrors({})
            } catch (error) {
                console.log("error", error.errors)
                setValidationErrors(error.errors[0])
                return
            }
        }
        setStep(st)
    }

    const fileChangeHandler = (files: any) => {
        console.log("files", files)
        setFile(files[0]);
    }

    const submitSignupHandler = async () => {

        setSubmitState(true)
        if (step === 2) {
            try {
                stepThreeSchema.validateSync(stepThreeValues);
                setValidationErrors({})
            } catch (error) {
                setSubmitState(false)
                setValidationErrors(error.errors[0])
                return
            }
        }

        try {
            console.log("process.env.REACT_APP_apiKey", process.env.REACT_APP_apiKey)
            let { email, password } = stepTwoValues;

            // signup with firebase
            let authStatus = await auth.createUserWithEmailAndPassword(email, password) as any
            let uid = authStatus.user.uid
            console.log(uid, "authStatus", authStatus)
            let storeData = await firestore.collection("users").doc(uid).set({ stepTwoValues, stepThreeValues, userType })

            console.log("firestore data", storeData)
            setSubmitState(false)
        } catch (error) {
            console.log("error", error.message)
            setSubmitState(false)
            setError(error.message)
        }

    }


    // jsx
    return (
        <Grid container>
            <Header headerRoutes={headerRoutes} />
            <Grid className={classes.root}>
                <form className={classes.form} noValidate autoComplete="off">
                    {/* Stepper */}
                    <Stepper step={step} isStep4={Boolean(userType === "Teacher")} stepperClickHandler={stepperClickHandler} />

                    {step === 0 && <Step1 typeValue={userType} typeChangeHandler={userTypeHandler} />}

                    {step === 1 && <Step2 changeHandler={step2ChangeHandler} values={stepTwoValues} validationErrors={validationErrors} />}

                    {step === 2 && <Step3 changeHandler={stepThreeChangeHandler} values={stepThreeValues} validationErrors={validationErrors} />}

                    {step === 3 && Boolean(userType === "Teacher") && <Step4 changeHandler={fileChangeHandler} file={file} />}

                    <Grid>
                        <Typography className={classes.errorText} variant="body2" component="p">
                            {error}
                        </Typography>
                    </Grid>
                    <Grid container justify="flex-end" className={classes.btnContainer}>
                        {step > 0 && <Button onClick={stepBackHandler} className={classes.btn} variant="contained" >Back</Button>}
                        {step < 3 && Boolean(userType === "Teacher") && <Button onClick={stepNextHandler} className={classes.btn} variant="contained" color="primary">Next</Button>}
                        {step < 2 && Boolean(userType === "Student") && <Button onClick={stepNextHandler} className={classes.btn} variant="contained" color="primary">Next</Button>}
                        {step === 2 && Boolean(userType === "Student") && <Button disabled={submitState} onClick={submitSignupHandler} className={classes.btn} variant="contained" color="primary">
                            {
                                submitState ? <CircularProgress size={24}  />
                                    :
                                    "submit"
                            }
                        </Button>}
                        {step === 3 && <Button onClick={submitSignupHandler} className={classes.btn} variant="contained" color="primary">Submit</Button>}
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default memo(SignUp);