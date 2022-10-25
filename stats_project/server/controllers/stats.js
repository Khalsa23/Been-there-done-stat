import mongoose from 'mongoose';
import StatMessage from '../models/statMessage.js';

export const getStats = async (req, res) => {
    try {
        const statMessages = await StatMessage.find();

        res.status(200).json(statMessages);
    } catch (error) {
        res.status(404).json( { message: error.message });
    }
};

export const createStat = async (req, res) => {
    const stat = req.body;

    const newStat = new StatMessage(stat);

    try {
        await newStat.save();

        res.status(201).json(newStat);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateStat = async (req, res) => {
    const { id: _id } = req.params;
    const stat = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No stat with that id');

    const updatedStat = await StatMessage.findByIdAndUpdate(_id, { ...stat, _id}, { new: true } );

    res.json(updateStat);
}

export const deleteStat = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No stat with that id');

    await StatMessage.findByIdAndRemove(id);

    res.json({ message: 'Stat deleted successfully'});
}