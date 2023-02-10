import { useRef, useState, useEffect } from 'react'
import styles from './Blog.module.scss'
import setClass from '../../utilities/category-class'
import  Button  from 'react-bootstrap/Button'
export default function Blog ({
  blog,
  updateBlog,
  deleteBlog
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)

  return (
    <div >
      <li className={setClass(blog,styles)}>
        <h4 onClick={() => setShowInput(!showInput)}>{blog.title}</h4>
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const title = inputRef.current.value
              updateBlog(blog._id, { title })
              setShowInput(false)
            }
          }}
          defaultValue={blog.title}
        />
        <a href={blog.url} target='_blank' rel='noreferrer'> {blog.title}</a>
        <button
        className={styles.button}
          onClick={() => deleteBlog(blog._id)}
        >
          Prains Me
        </button>
       

      </li>
    </div>
  )
}
