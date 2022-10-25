import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

import { deleteStat } from '../../../actions/stats';

import useStyles from './styles';
const Stat = ({ stat, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} player={stat.player}></CardMedia>
            <div className={classes.overlay}>
                <Typography variant="h5">{stat.player}</Typography>
                <Typography variant="body1">{stat.points} Points, {stat.rebounds} Rebounds, {stat.assists} Assists</Typography>
                <Typography variant='body1'>{stat.blocks} Blocks, {stat.fouls} Fouls</Typography>
                <Typography variant="body2">Three Pointers Made: {stat.tpm}</Typography>
                <Typography variant="body2">Free Throws Made / Shot: {stat.ftm} / {stat.fts}</Typography>
                <br></br>
                <Typography variant="body2"> {stat.date}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                    style={{color: 'white'}} 
                    size="small" 
                    onClick={() => setCurrentId(stat._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{stat.notes}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteStat(stat._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>

    )
}

export default Stat;