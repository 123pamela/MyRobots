import axios from 'axios'

const searchRobots = async(term) => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = await axios.get(url,{
        params: {
            query: term
        }
    })

    console.log(term)
    console.log(response.data.results)


    console.log(response.data)
    return response.data
}

export default searchRobots