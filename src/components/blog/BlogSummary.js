import React from 'react';
import { ListItem, HeaderImage, Body, Dates, Title } from '../layout/list/List';

export default ({ image, date, title, to }) => (
  <ListItem>
    {!!image && <HeaderImage to={to} fluid={image.childImageSharp.fluid} />}
    <Body>
      <Dates>{date}</Dates>
      <Title to={to}>{title}</Title>
    </Body>
  </ListItem>
);
