import Blog from '../Blog/Blog'
import styles from './BlogList.module.scss'
import {Card, Row, Col, Button} from 'react-bootstrap'



export default function BlogList ({
  blogs,
  updateBlog,
  deleteBlog
}) {
  return (
    <div   className={styles.div}>
    <ul className={styles.index}>
      {
            blogs.length
              ? blogs.map(blog => (
                <Blog
                  key={blog._id}
                  blog={blog}
                  updateBlog={updateBlog}
                  deleteBlog={deleteBlog}
                />
              ))
              : <>
                <h2>No Blogs Yet... Add one in the Form Above</h2>
                </>
        }
    </ul>
    
    </div>



    
  )
}