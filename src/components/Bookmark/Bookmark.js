import { useRef, useState,useEffect } from 'react'
import styles from './Bookmark.module.scss'
import setClass from '../../utilities/category-class'
export default function Bookmark ({
  bookmark,
  updateBookmark,
  deleteBookmark
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)

  return (
    <div >
      <li className={setClass(bookmark,styles)}>
        <h4 onClick={() => setShowInput(!showInput)}>{bookmark.title}</h4>
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const title = inputRef.current.value
              updateBookmark(bookmark._id, { title })
              setShowInput(false)
            }
          }}
          defaultValue={bookmark.title}
        />
        <a href={bookmark.url} target='_blank' rel='noreferrer'> {bookmark.title}</a>
        <button
        className={styles.button}
          onClick={() => deleteBookmark(bookmark._id)}
        >
          Delete Me
        </button>
      </li>
    </div>
  )
}
