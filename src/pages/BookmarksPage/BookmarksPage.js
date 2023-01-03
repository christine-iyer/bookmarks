import { useState, useEffect } from 'react'
import BookmarkList from '../../components/SignUpForm/BookmarkList/BookmarkList'
// import BookmarkList from './components/BookmarkList'


export default function BookmarksPage(){
    
    const [bookmarks, setBookmarks] = useState([])
    const [completedBookmarks, setCompletedBookmarks] = useState([])
    const [newBookmark, setNewBookmark] = useState({
        title: '',
        completed: false
    })
    
    //createBookmarks
    const createBookmark = () => {
        const body = {...newBookmark}
        
        try {
            fetch('/api/bookmarks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).then(response => response.json()).then(r => {console.log(r) 
                addBookmarkToList(r)})
            //const createdBookmark = await response.json()
            
            setNewBookmark({
                title: '',
                completed: false
            })
        } catch (error) {   
            console.error(error)
        }
    }

    const addBookmarkToList = (newBookmark) => {
        const bookmarksCopy = bookmarks.slice()
        bookmarksCopy.push(newBookmark)
        setBookmarks(bookmarksCopy)
        console.log(bookmarks)
    }
    //deleteBookmarks
    const deleteBookmark = async (id) => {
        try {
            const index = completedBookmarks.findIndex((bookmark) => bookmark._id === id)
            const completedBookmarksCopy = [...completedBookmarks]
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await response.json()
            completedBookmarksCopy.splice(index, 1)
            setCompletedBookmarks(completedBookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //moveToCompleted
    const moveToCompleted = async (id) => {
        try {
            const index = bookmarks.findIndex((bookmark) => bookmark._id === id)
            const bookmarksCopy = [...bookmarks]
            const subject = bookmarksCopy[index]
            subject.completed = true 
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subject)
            })
            const updatedBookmark = await response.json()
            const completedTDsCopy = [updatedBookmark, ...completedBookmarks]
            setCompletedBookmarks(completedTDsCopy)
            bookmarksCopy.splice(index, 1)
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //getBookmarks
    const getBookmarks = async () => {
        try{
            const response = await fetch('/api/bookmarks')
            const foundBookmarks = await response.json()
            setBookmarks(foundBookmarks.reverse())
            const responseTwo = await fetch('/api/bookmarks/completed')
            const foundCompletedBookmarks = await responseTwo.json()
            setCompletedBookmarks(foundCompletedBookmarks.reverse())
        } catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        getBookmarks()
    }, [])
    return(<>
        Add Bookmark:<input type="text" 
        value={newBookmark.title} 
        onChange={(e) => {
            setNewBookmark({...newBookmark, title: e.target.value})
        }} 
        onKeyDown={(e) => {
            e.key === 'Enter' && createBookmark()
        }}
        />
        <h3>Bookmarks</h3>
        {bookmarks.map(bookmark => {
            return(
                <div key={bookmark._id}>{bookmark.title} 
                    <button onClick={() => moveToCompleted(bookmark._id) }>Complete</button>
                </div>
            )})
        }
        <h3>Completed Bookmarks</h3>
        {completedBookmarks.map(bookmark => {
            return(
                <div key={bookmark._id}>{bookmark.title} 
                    <button onClick={() => deleteBookmark(bookmark._id) }>Delete</button>
                </div>
            )})
        }
    </>)
}


