import mongoose from 'mongoose';

const statSchema = mongoose.Schema({
    player: String,
    points: Number,
    rebounds: Number,
    assists: Number,
    blocks: Number,
    fouls: Number,
    tpm: Number,
    ftm: Number,
    fts: Number,
    date: String,
    notes: String
});

const StatMessage = mongoose.model('StatMessage', statSchema);

export default StatMessage;