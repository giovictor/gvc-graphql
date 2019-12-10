const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} = require('graphql')

const borrowers = require('./routes/borrowers')

const BorrowerType = new GraphQLObjectType({
    name:'BorrowerType',
    fields:() => ({
        IDNumber:{type:GraphQLString},
        lastname:{type:GraphQLString},
        firstname:{type:GraphQLString},
        mi:{type:GraphQLString},
        course:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        borrowers:{
            type:new GraphQLList(BorrowerType),
            resolve:() => {
                return borrowers.findAllBorrowers
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})