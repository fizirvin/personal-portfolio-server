import path from './models/path.js';

export const resolvers = {
    Query: {
        async paths(){
            return await path.find();
          },
    }
}