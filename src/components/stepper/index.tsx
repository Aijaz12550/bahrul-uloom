import { Step, StepLabel, Stepper } from "@material-ui/core";
import { FC, memo } from "react";
import { nanoid } from "nanoid";


type Props = {
    stepperClickHandler: (a:any)=>void,
    step: number,
    isStep4: boolean
}

const StepperComponent: FC<Props> = (props) => {

    let { step, isStep4, stepperClickHandler } = props
    return (
        <Stepper activeStep={step} alternativeLabel style={{ width: "100%", maxWidth: "450px" }} >
            <Step key={nanoid()} onClick={()=>stepperClickHandler(0)}>
                <StepLabel>Type</StepLabel>
            </Step>
            <Step key={nanoid()} onClick={()=>stepperClickHandler(0+1)}>
                <StepLabel>Personal Info</StepLabel>
            </Step>
            <Step key={nanoid()} onClick={()=>stepperClickHandler(0+2)}>
                <StepLabel>Education</StepLabel>
            </Step>
            { isStep4 && <Step key={nanoid()} onClick={()=>stepperClickHandler(0+3)}>
                <StepLabel>Upload CV</StepLabel>
            </Step>}
        </Stepper>

    )
}

export default memo(StepperComponent);