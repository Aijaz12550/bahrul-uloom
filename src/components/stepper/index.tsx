import { Step, StepLabel, Stepper } from "@material-ui/core";
import { FC, memo } from "react";
import { nanoid } from "nanoid";

export type StepType = {
    label: string
    activeStep: number
}


const StepperComponent: FC<{step:number}> = (props) => {

    let {step} = props
    return (
        <Stepper activeStep={step} alternativeLabel style={{ width: "100%", maxWidth: "450px" }} >
            <Step key={nanoid()}>
                <StepLabel>Type</StepLabel>
            </Step>
            <Step key={nanoid()}>
                <StepLabel>Personal Info</StepLabel>
            </Step>
            <Step key={nanoid()}>
                <StepLabel>Education</StepLabel>
            </Step>
            <Step key={nanoid()}>
                <StepLabel>Upload CV</StepLabel>
            </Step>
        </Stepper>

    )
}

export default memo(StepperComponent);