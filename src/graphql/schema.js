import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers.js";



const typeDefs = `

scalar Date

    type Query {
        paths: [Path]
        techs(type: String, family: String, os: String): [Technology]
        jobs: [Job]
    }

    type Path {
        _id: ID!
        pathName: String!
        coreTechnology: String!
        urlPath: String
        urlPathCertification: String
        urlImage: String
        cert: String
        courses: [Course]
    }

    type Job {
        _id: ID!
        name: String!
        link: String!
        type: String!
        logo: String
        applications: [Application]
    }

    type Application {
        _id: ID!
        title: String
        company: String
        date: String
        status: String
    }

    type Course {
        _id: ID!
        courseName: String!
        level: String!
        urlImage: String
        urlRepository: String
        urlCourse: String
        urlCertification: String
        urlInstructor: String
        platform: String
    }

    type Technology {
        _id: ID!
        technologyName: String
        paths: [Path]
    }

    type Mutation { 
        newJob(_id: ID, input: NewJob ): Job
        newApplication(_id: ID, input: NewApplication ): Application
    
    }

    input NewJob {
        name: String!
        link: String!
        type: String!
        logo: String
    }

    input NewApplication {
        title: String
        company: String
        date: String
        status: String
    }





`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});