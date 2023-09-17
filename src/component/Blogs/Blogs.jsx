import  { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';


const Blogs = ({ handleBookmark,handleTime,handlePrice }) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        
       
        <div className='grid grid-cols-3 gap-3 my-3 items-center'>          
        {
            blogs.map(blog => <Blog
                 key={blog.id} 
                 blog={blog} 
                 handleBookmark={handleBookmark}
                 handleTime={handleTime}
                 handlePrice={handlePrice}
                 ></Blog>  )
        }
       
        </div>
    );
};
Blogs.propTypes={
    handleBookmark:PropTypes.func, 
    handleTime:PropTypes.func, 
    handlePrice:PropTypes.func, 

}
export default Blogs;