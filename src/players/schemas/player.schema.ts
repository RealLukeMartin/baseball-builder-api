import * as mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  age: Number,
  positonGroup: {
    type: String,
    enum: ['P', 'IF', 'OF'],
  },
  specificPosition: {
    type: String,
    enum: [
      'SP',
      'MRP',
      'LRP',
      'CP',
      'C',
      '1B',
      '2B',
      '3B',
      'SS',
      'LF',
      'RF',
      'CF',
    ],
  },
  battingAverage: Number,
  ERA: Number,
  // Todo: Add team assignment:: currentTeamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
});
