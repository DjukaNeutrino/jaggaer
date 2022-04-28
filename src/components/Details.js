import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import styled from 'styled-components';
import Attachment from '../icons/attachment.svg';

const Section = styled.section`
    background:#FFFFFF;
    padding:16px;
    margin-top:36px;
`;
const Ul = styled.ul`
    padding-left: 16px;
    margin-top:0
`;

const StyledTypography = styled(Typography)`
        border-bottom:1px solid #E8E8E8;
        text-transform:uppercase;
        padding-bottom:16px;
    `;

const StyledTypographyTwo = styled(Typography)`
        margin-top:16px;
        color:#A7A7A7;
    `;

const StyledTypographyThree = styled(Typography)`
        color:#A7A7A7;
    `;

const StyledTypographyFour = styled(Typography)`
        color:#A7A7A7;
        marginTop:12px;
    `;

const StyledChip = styled(Chip)`
        margin:5px 5px 0 0;
    `;

const StyledLink = styled(Link)`
        color: #849FAE;
    `;

const StyledListItem = styled(ListItem)`
        padding: 0;
    `;

function Details({ data }) {
  const { article: { features, attachments, keywords } } = data;
  return (
    <Section>
      <StyledTypography variant="h6" color="error">
        Details
      </StyledTypography>
      <StyledTypographyTwo variant="body2">
        Features
      </StyledTypographyTwo>
      <Ul>
        {Object.entries(features).map(([key, value], index) => (
          <li key={`feature_${index}`}>
            <StyledTypographyThree variant="body2" component="span">
              {`${key}: `}
            </StyledTypographyThree>
            <Typography variant="subtitle2" component="span">
              {value}
            </Typography>
          </li>
        ))}
      </Ul>
      <StyledTypographyThree variant="body2">
        Attachments
      </StyledTypographyThree>
      <List>
        {attachments.map((attachment, index) => (
          <StyledListItem
            key={`attachment_${index}`}
          >
            <Attachment />
            <StyledLink
              href={attachment.file_link}
              variant="inherit"
              underline="none"
            >
              <Typography variant="subtitle2">
                {attachment.file_label}
              </Typography>
            </StyledLink>
          </StyledListItem>
        ))}
      </List>
      <StyledTypographyFour variant="body2">
        Keywords
      </StyledTypographyFour>
      {keywords.map((keyword, index) => (
        <StyledChip
          key={`keyword_${index}`}
          size="small"
          label={keyword}
        />
      ))}
    </Section>
  );
}

export default Details;
