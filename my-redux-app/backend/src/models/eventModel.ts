import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: String,
  eventName: String,
  city: String,
});

export const EventModel = mongoose.model('Event', EventSchema);
