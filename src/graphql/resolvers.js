import path from './models/path.js';
import techs from './models/technology.js';
import zonedD from '../functions/zonedD'
import Visit from './models/visit.js'

export const resolvers = {
    Query: {
        async paths(){
            return await path.find();
          },
          async techs(parent, args, req){
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || 'not'
            const date = new Date();
            const zonedDate = zonedD(date);

            const visit = new Visit({
              ip: ip,
              visitedAt: zonedDate, 
            });
            const createdVisit = await visit.save();

            console.log(ip, zonedDate, createdVisit)
            return await techs.find().populate({path: 'paths', model: 'path'});
          }
    }
}