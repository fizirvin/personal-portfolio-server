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
        urlImage: String
        courses: [Course]
    }

    type Course {
        _id: ID!
        courseName: String!
        level: String!
        urlImage: String
    }



`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});