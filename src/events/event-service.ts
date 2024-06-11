import mongoose from 'mongoose';
import { CreateEventDto } from './dtos/CreateEvent.dot';
import EventModel, { IEvent } from './models/Event';
import { Event } from './types/response';
import UserModel, {IUser} from '../auth/models/User';
import { User } from '../auth/types/response';


class EventService {
  
    async getEventById(id: string): Promise<IEvent | null> {
      return await EventModel.findById(id).exec();
    }

    async getEvents(): Promise<IEvent[]> {
      return await EventModel.find().exec(); 
    }

    async createEvent(createEventDto: CreateEventDto): Promise<IEvent> {
      const { name, description, date, location ,duration} = createEventDto;
      const newEvent = new EventModel({
        name,
        description,
        date: new Date(date),
        location,
        duration
      });
  
      await newEvent.save();
      return newEvent;
    }
  
    async getEventsByAuthUserCity(id: string): Promise<IEvent[]>{
      const user:any = await UserModel.findById(id);
      return await EventModel.find({location: user.city});
    }
    
  }
  
  export default EventService;
  