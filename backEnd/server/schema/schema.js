import { graphql, GraphQLList, GraphQLSchema } from "graphql";
import { GraphQLObjectType,
        GraphQLString,
        GraphQLInt,
        GraphQLID 
    } from "graphql";
import _ from "lodash"
import { drawDef } from "../../model/draw.js"; 
import { artistDef } from "../../model/artist.js";



const DrawType = new GraphQLObjectType({
    name : "DrawType",
    fields : ()=>({
        name : {type: GraphQLString},
        id : {type:GraphQLID},
        artist : {type: GraphQLString},
        year : {type: GraphQLInt}
    })
})

const ArtistType = new GraphQLObjectType({
    name : "ArtistType",
    fields : ()=>({
        name : {type:GraphQLString},
        country : {type:GraphQLString},
        birth : {type:GraphQLString},
        draws: {
            type: new GraphQLList(DrawType),
            resolve(parent, args){
                return drawDef.find({artist: parent.name})
            }
        }
    })
})

const QueryType = new GraphQLObjectType({
    name : "QueryType",
    fields : {
        getDraw:{
            type : DrawType,
            //args :{name : {type:GraphQLString}}, 
            args :{name:{type:GraphQLString}}, 
            resolve(parent, args){
                //return a draw
                return drawDef.findOne({name:args.name});
            }
        },
        getDraws:{
            type : new GraphQLList(DrawType),
            resolve(parent, args){
                //return all draws
                return drawDef.find();
            }

        },
        getArtist:{
            type: ArtistType,
            args:{name:{type:GraphQLString}},
            resolve(parent, args){
                return artistDef.findOne({name:args.name});
            }
        },
        getArtists:{
            type: new GraphQLList(ArtistType),
            resolve(parent,args){
                return artistDef.find();
                //(artistList;
            }
        }
    }
})

const MutationType = new GraphQLObjectType({
    name : "MutationType",
    fields: {
        addDraw :{
            type: DrawType,
            args : {name:{type: GraphQLString}, artist:{type:GraphQLString}, year:{type:GraphQLInt}},
            resolve(parent,args){
                let newDraw = new drawDef({name:args.name, artist:args.artist, year: args.year});
                return newDraw.save();
            }
        }

    } 

})


export let schema = new GraphQLSchema({
    query : QueryType,
    mutation : MutationType
})