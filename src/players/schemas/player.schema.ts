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
  positionGroup: {
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
  currentTeamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
});
