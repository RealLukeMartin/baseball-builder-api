import * as mongoose from 'mongoose';

const teamSchemaOptions = {
  toJSON: { virtuals: true },
};

const TeamSchema = new mongoose.Schema(
  {
    name: String,
    city: String,
    state: String,
  },
  teamSchemaOptions,
);

TeamSchema.virtual('players', {
  ref: 'Player',
  localField: '_id',
  foreignField: 'currentTeamId',
});

export { TeamSchema };
