import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

const dummyData = [
  {
    id: 1,
    site: 'yali.state.gov',
    title: 'Post 1',
    type: 'post'
  },
  {
    id: 2,
    site: 'share.america.gov',
    title: 'Post 2',
    type: 'post'
  },
  {
    id: 3,
    site: 'share.america.gov',
    title: 'Post 3',
    type: 'video'
  }

];


const ArticleType = new GraphQLObjectType( {
  name: 'ArticleType',
  fields: () => ( {
    id: { type: GraphQLInt },
    site: { type: GraphQLString },
    title: { type: GraphQLString },
    type: { type: GraphQLString }
  } )
} );

// const VideoType = new GraphQLObjectType( {
//   name: 'VideoType'
// } );

const RootQuery = new GraphQLObjectType( {
  name: 'RootQueryType',
  fields: () => ( {
    article: {
      type: ArticleType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve( parent, args ) {
        dummyData.find( entry => entry.id === args.id );
      }
    },
    articles: {
      type: new GraphQLList( ArticleType ),
      resolve( parent, args ) {
        return dummyData;
      }
    }
  } )
} );

export const cdpSchema = new GraphQLSchema( {
  query: RootQuery
} );
