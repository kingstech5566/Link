import { useState, useEffect } from "react"; 
import Blogger from "./Blogger";


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'kingsley', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'chijioke', id: 2 },
        { title: 'Web dev tools tips', body: 'lorem ipsum...', author: 'kingsley', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log( 'use effect ran');
    }, []);

    return ( 
        <div className="home">
            <Blogger blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;