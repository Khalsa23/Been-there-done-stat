import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createStat, updateStat } from '../../actions/stats';

const Form = ({ currentId, setCurrentId }) => {
    const [statData, setStatData] = useState({player: '', points: '', rebounds: '', assists: '', blocks: '', fouls: '', tpm: '', ftm: '', fts: '', date: '', notes: ''});
    const stat = useSelector((state) => currentId ? state.stats.find((p) => p._id == currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(stat) setStatData(stat);
    }, [stat])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateStat(currentId, statData));
        } else {
            dispatch(createStat(statData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setStatData({player: '', points: '', rebounds: '', assists: '', blocks: '', fouls: '', tpm: '', ftm: '', fts: '', date: '', notes: ''});
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit' : 'Create' } a Stat</Typography>
                <TextField name="player" variant="outlined" label="Player" fullWidth value={statData.player} onChange={(e) => setStatData({ ...statData, player: e.target.value })}/>
                <TextField name="points" variant="outlined" label="Points" fullWidth value={statData.points} onChange={(e) => setStatData({ ...statData, points: e.target.value })}/>
                <TextField name="rebounds" variant="outlined" label="Rebounds" fullWidth value={statData.rebounds} onChange={(e) => setStatData({ ...statData, rebounds: e.target.value })}/>
                <TextField name="assists" variant="outlined" label="Assists" fullWidth value={statData.assists} onChange={(e) => setStatData({ ...statData, assists: e.target.value })}/>
                <TextField name="blocks" variant="outlined" label="Blocks" fullWidth value={statData.blocks} onChange={(e) => setStatData({ ...statData, blocks: e.target.value })}/>
                <TextField name="fouls" variant="outlined" label="Fouls" fullWidth value={statData.fouls} onChange={(e) => setStatData({ ...statData, fouls: e.target.value })}/>
                <TextField name="tpm" variant="outlined" label="Tpm" fullWidth value={statData.tpm} onChange={(e) => setStatData({ ...statData, tpm: e.target.value })}/>
                <TextField name="ftm" variant="outlined" label="Ftm" fullWidth value={statData.ftm} onChange={(e) => setStatData({ ...statData, ftm: e.target.value })}/>
                <TextField name="fts" variant="outlined" label="Fts" fullWidth value={statData.fts} onChange={(e) => setStatData({ ...statData, fts: e.target.value })}/>
                <TextField name="date" variant="outlined" label="Date" fullWidth value={statData.date} onChange={(e) => setStatData({ ...statData, date: e.target.value })}/>
                <TextField name="notes" variant="outlined" label="Notes" fullWidth value={statData.notes} onChange={(e) => setStatData({ ...statData, notes: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>    
        </Paper>
    );
}

export default Form;