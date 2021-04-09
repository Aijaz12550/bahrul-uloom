import { Grid } from "@material-ui/core"
import { memo, FC } from "react"
import { DropzoneArea } from 'material-ui-dropzone'


const Step4: FC<any> = () => {
    return (
        <Grid container>

            <DropzoneArea
                onChange={(e) => console.log("e", e)}
                acceptedFiles={['application/pdf']}
                showPreviews={false}
                maxFileSize={1000000} //bytes
            />
        </Grid>
    )
}

export default memo(Step4)