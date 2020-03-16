import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";

const typeDefs = `
    type Query {
        paths: [Path]
    }

    type Path {
        _id: ID!
        pathName: String!
        coreTechnology: String!
        courses: [Course]
    }

    type Course {
        _id: ID!
        courseName: String!
    }



`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});