import {useState} from 'react';
import BlogList from '../components/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
  
  return ( 
    <div>
      <div className="home">
       <BlogList blogs={blogs} title="All the blogs"/>
      </div>
    </div>
   );
}
 
export default Home;