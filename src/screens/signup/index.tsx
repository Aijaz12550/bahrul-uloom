import { ChangeEvent, FC, memo, useState } from "react";
import { Grid, Button, } from "@material-ui/core";
import { Header, Stepper } from "../../components";
import { styles } from "./style";
import Step1 from "./step1"
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4"

const headerRoutes = [{title:"Home", route:"/home"},{title:"Support", route:".support"}]

const SignUp: FC <any> = () => {

    // hooks
    const classes = styles();
    let [step, setStep] = useState<number>(0);
    let [ userType, setUserType] = useState<string>("Student")


    // handlers
    const userTypeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUserType(event.target.value)
    }

    const stepNextHandler = () =>{
        setStep(++step)
    }

    const stepBackHandler = () => {
        setStep(--step)
    }

    
    // jsx
    return(
        <Grid container>
            <Header headerRoutes={headerRoutes} />
            <Grid className={classes.root}>
                <form className={classes.form} noValidate autoComplete="off">
                    {/* Stepper */}
                    <Stepper step={step} />

                    {step === 0 && <Step1 typeValue={userType} typeChangeHandler={userTypeHandler} />}

                    {step === 1 && <Step2 />}

                    {step === 2 && <Step3 />}

                    {step === 3 && <Step4 />}
                   
                   <Grid container justify="flex-end">
                    {step > 0 && <Button onClick={stepBackHandler} className={classes.btn} variant="contained" >Back</Button>}
                    {step < 3 &&<Button onClick={stepNextHandler} className={classes.btn} variant="contained" color="primary">Next</Button>}
                    {step === 3 && <Button  className={classes.btn} variant="contained" color="primary">Submit</Button>}
                   </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default memo(SignUp);