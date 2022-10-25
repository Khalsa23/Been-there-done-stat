import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Stat from './Stat/Stat';
import useStyles from './styles';

const Stats = ({ setCurrentId }) => {
    const stats = useSelector((state) => state.stats);
    const classes = useStyles();

    console.log(stats);

    return (
        !stats.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {stats.map((stat) => (
                    <Grid key={stat._id} item xs={12} sm={6}>
                        <Stat stat={stat} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        ) 
    );
}

export default Stats;