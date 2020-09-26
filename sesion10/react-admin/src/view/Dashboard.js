import React from 'react'
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import Component3 from '../components/Component3'

const Dashboard = () => {
    const [post,setPost] = React.useState([])

    React.useEffect(() => { 
        const fetchUserPost = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/3/posts')
            const jsonData = await response.json()
            setPost(jsonData)
        };
        fetchUserPost();
    }, [])
    
    return (
        <>
            <h3> Dashboard view</h3>
            <Component1 />
            <Component2 />
            <Component3 />
        </>
    )
}

export default Dashboard