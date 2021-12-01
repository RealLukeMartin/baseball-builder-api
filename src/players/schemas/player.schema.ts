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
  position: {
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
  hittingArm: {
    type: String,
    enum: ['left', 'right', 'switch'],
  },
  throwingArm: {
    type: String,
    enum: ['left', 'right', 'switch'],
  },
  levels: {
    hitting: {
      type: Number,
      min: 0,
      max: 100,
    },
    pitching: {
      type: Number,
      min: 0,
      max: 100,
    },
  },
  stats: {
    fielding: {
      E: Number,
    },
    hitting: {
      PA: Number,
      H: Number,
      BB: Number,
      SF: Number,
      HBP: Number,
      TB: Number,
      '1B': Number,
      '2B': Number,
      '3B': Number,
      HR: Number,
    },
    pitching: {
      IP: Number,
      K: Number,
      BB: Number,
      R: Number,
    },
  },
  currentTeamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
});
