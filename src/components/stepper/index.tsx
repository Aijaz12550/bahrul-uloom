import { Step, StepLabel, Stepper } from "@material-ui/core";
import { FC, memo } from "react";


const StepperComponent: FC<any> = () => {
    return (


        <Stepper activeStep={1} alternativeLabel style={{ width: "100%", maxWidth: "450px" }} >

            <Step key="label">
                <StepLabel>Type</StepLabel>
            </Step>
            <Step key="label1">
                <StepLabel>Personal Info</StepLabel>
            </Step>
            <Step key="3">
                <StepLabel>Education</StepLabel>
            </Step>
            <Step key="label2">
                <StepLabel>Upload CV</StepLabel>
            </Step>


        </Stepper>

    )
}

export default memo(StepperComponent);