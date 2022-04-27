import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import Attachment from '../icons/attachment.svg'


const Details = ({data}) => {
    const {article : {features, attachments, keywords} } = data;
    return <>
        <Typography variant='h6'>Details</Typography>
        <Typography variant='subtitle2'>Features</Typography>
        <List>
            {Object.entries(features).map(([key, value], index) => <ListItem key={`feature_${index}`}>{`${key}: ${value}`}</ListItem>)}
        </List>
        <Typography variant='subtitle2'>Attachments</Typography>
        <List>
            {attachments.map((attachment, index) => {
                return <ListItem key={`attachment_${index}`}>
                            <Attachment/>
                            <Link href={attachment.file_link} variant="inherit" underline="none">
                                <Typography variant='subtitle2'>{attachment.file_label}</Typography>
                            </Link>
                        </ListItem>
            })}
        </List>
        <Typography variant='subtitle2'>Keywords</Typography>
        {keywords.map((keyword, index) => <Chip key={`keyword_${index}`} label={keyword} />)}
    </>
};

export default Details;