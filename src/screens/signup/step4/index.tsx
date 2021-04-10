import { Grid } from "@material-ui/core"
import { memo, FC } from "react"
import { DropzoneArea } from 'material-ui-dropzone'


const Step4: FC<any> = (props) => {

    let { changeHandler} = props;
    return (
        <Grid container>

            <DropzoneArea
                onChange={changeHandler}
                acceptedFiles={['application/pdf']}
                showPreviews={false}
                showFileNames
                dropzoneText="Drop your CV here or click below icon to select file."
                filesLimit={1}
                maxFileSize={1000000} //bytes
            />
        </Grid>
    )
}

export default memo(Step4)