//import {gql} from 'apollo-boost'
//import { graphql, useQuery } from 'react-apollo'
import {gql,useMutation,useQuery} from '@apollo/client'
import { useEffect } from 'react'

const getDrawsQuery = gql`
    query{
        getDraws{
            name
            year
            artist
        }
       
    }
`
const postDraw = gql`
    mutation($name:String!, $artist:String!, $year:Int!){
        addDraw(name:$name, artist:$artist, year:$year){
            name
        }
    }

`


const DrawList = (props)=>{
    // const {error, loading, data} = useQuery(getDrawsQuery)
    // const [addDraw,{dataDraw}] = useMutation(postDraw)


    // useEffect(()=>{
    //     console.log(data)
    //     console.log(loading)
    //     console.log(error)
        
    // },[data])
    
    // useEffect(()=>{
    //     addDraw({variables:{name:"Lala Land",year:2020,artist:"NKPR"}, refetchQueries:[{query:getDrawsQuery}] })

    // },[])

    return(
        <div>Books names</div>

    )
}

export default DrawList;