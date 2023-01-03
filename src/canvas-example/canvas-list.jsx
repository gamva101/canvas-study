import React from 'react';
import { Grid, Paper, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GridList() {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <Link to="1">
                    <Item>1</Item>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link to="2">
                    <Item>2</Item>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link to="3">
                    <Item>3</Item>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link to="4">
                    <Item>4</Item>
                </Link>
            </Grid>
        </Grid>
    );
}
