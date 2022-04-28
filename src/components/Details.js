import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import Attachment from '../icons/attachment.svg'
import styled from "styled-components";

const Section = styled.section`
    background:#FFFFFF;
    padding:16px;
    margin-top:36px;
`;
const Ul = styled.ul`
    padding-left: 16px;
    margin-top:0
`;

const Details = ({data}) => {
    const {article : {features, attachments, keywords} } = data;
    return <Section>
            <Typography variant='h6' color="error" style={{borderBottom:"1px solid #E8E8E8"}}>Details</Typography>
            <Typography variant='body2' style={{marginTop:"16px", color:"#A7A7A7"}}>Features</Typography>
            <Ul>
                {Object.entries(features).map(([key, value], index) =>
                    <li key={`feature_${index}`}>
                        <Typography variant='body2' component="span" style={{color:"#A7A7A7"}}>{`${key}: `}</Typography>
                        <Typography variant='subtitle2' component="span">{value}</Typography>
                    </li>
                )}
            </Ul>
            <Typography variant='body2' style={{color:"#A7A7A7"}}>Attachments</Typography>
            <List>
                {attachments.map((attachment, index) => {
                    return <ListItem key={`attachment_${index}`} style={{padding:"0"}}>
                                <Attachment/>
                                <Link href={attachment.file_link} style={{ color: "#849FAE" }} variant="inherit" underline="none">
                                    <Typography variant='subtitle2'>{attachment.file_label}</Typography>
                                </Link>
                            </ListItem>
                })}
            </List>
            <Typography variant='body2' style={{color:"#A7A7A7", marginTop:"12px"}}>Keywords</Typography>
            {keywords.map((keyword, index) => <Chip key={`keyword_${index}`} size="small" label={keyword} style={{margin:"5px 5px 0 0"}}/>)}
        </Section>
};

export default Details;