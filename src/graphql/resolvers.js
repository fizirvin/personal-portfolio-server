import path from './models/path.js';
import techs from './models/technology.js';
import zonedD from '../functions/zonedD'
import shortDate from '../functions/shortDate.js'
import Visit from './models/visit.js'
import jobs from './models/jobs.js'

export const resolvers = {
    Query: {
        async paths(){
            return await path.find();
          },
          async jobs(){
            const jobsArray = await jobs.find()
            .sort({type: 1, name: 1})

            const newArray = jobsArray.map( item =>{
              const { applications } = item
              const setApps = applications.map(app =>{
                const short = shortDate(app.date)
                return {...app._doc, date: short}
              })
              
              return {...item._doc, applications: setApps }
            })

            return newArray
          },
          async techs(parent, args, req){
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || 'not'
            const date = new Date();
            const zonedDate = zonedD(date);

            const visit = new Visit({
              ip: ip,
              type: args.type,
              family: args.family,
              os: args.os,
              visitedAt: zonedDate, 
            });
            await visit.save();
            return await techs.find().populate({path: 'paths', model: 'path'});
          }
    },
    Mutation: {
      async newJob(_, { input }){
        const item = new jobs(input);
        await item.save();   
        return item;
      },
      async newApplication(_, { _id, input }){

        const application = await jobs.findByIdAndUpdate(_id, 
          { "$push": { "applications": input } },
          {new: true });

        const { applications } = application._doc
        const index = applications.length - 1
       
        const newApplication = applications[index]
        const  { date } = newApplication
        const short = shortDate(date)
        
        return {...newApplication._doc, date: short}
      },
    }
}