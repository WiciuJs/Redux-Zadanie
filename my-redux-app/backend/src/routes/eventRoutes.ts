import express from 'express';
import { addEvent, deleteEvent, getEvents } from '../controllers/eventsController'; 

const router = express.Router();
router.post('/addEvent', addEvent);
router.delete('/deleteEvent/:id', deleteEvent);
router.get('/getEvents', getEvents);

export default router;
