import { Request, Response } from 'express';
import { EventModel } from '../models/eventModel';
export const addEvent = async (req: Request, res: Response) => {
  try {
    const { name, eventName, city } = req.body;
    const newItem = new EventModel({ name, eventName, city });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Błąd podczas dodawania wydarzenia' });
  }
};
export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const eventId = req.params.id;
    await EventModel.findByIdAndRemove(eventId);
    res.status(200).json({ message: 'Wydarzenie zostało usunięte.' });
  } catch (error) {
    res.status(500).json({ error: 'Błąd podczas usuwania wydarzenia' });
  }
};
export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await EventModel.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Błąd podczas pobierania wydarzeń' });
  }
};

