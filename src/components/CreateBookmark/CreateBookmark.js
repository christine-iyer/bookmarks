import styles from './CreateBookmark.module.scss'
export default function CreateBookmark ({
  createBookmark,
  bookmark,
  handleChange
}) {
  return (
    <div className={styles.CreateBookmark}>
      <h2 className={styles.NewBookmark}>Create A Bookmark</h2>
      <div className={styles.container}>
        <form 
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault()
            createBookmark()
          }}
        >
          
          <label>Title<input type='text' value={bookmark.title} name='title' onChange={handleChange} placeholder='Title' /></label>
          <label>Url<input type='text' value={bookmark.url} name='url' onChange={handleChange} placeholder='URL' /></label>
          
          <input className={styles.button} type='submit' value='Create Bookmark' />
        </form>
      </div>
     
    </div>
  )
}

