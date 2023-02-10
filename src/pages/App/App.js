import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Auth from '../../components/Auth/Auth'
import CreateBlog from '../../components/CreateBlog/CreateBlog'
import BlogList from '../../components/BlogList/BlogList'
import styles from './App.module.scss'

require('../..')
export default function App () {
  /*
    Login, SignUp, CreateBlog, ListBlogsByUser, DeleteBlog, UpdateBlog
    */

  const handleChangeAuth = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  const handleChange = (event) => {
    setBlog({ ...blog, [event.target.name]: event.target.value })
  }
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    name: ''
  })
  const [blog, setBlog] = useState({
    title: '',
    category:'',
    url: '', 
    body: ''
  })
  const [blogs, setBlogs] = useState([])

  const [token, setToken] = useState('')
  const login = async () => {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      })
      const tokenResponse = await response.json()
      setToken(tokenResponse)
      localStorage.setItem('token', JSON.stringify(tokenResponse))
    } catch (error) {
      console.error(error)
    } finally {
      window.location.reload()
    }
  }
  const signUp = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...credentials })
      })
      const tokenResponse = await response.json()
      setToken(tokenResponse)
      localStorage.setItem('token', JSON.stringify(tokenResponse))
    } catch (error) {
      console.error(error)
    } finally {
      window.location.reload()
    }
  }

 function logOut () {
    localStorage.removeItem('token')
  }
  const createBlog = async () => {
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ ...blog })
      })
      const data = await response.json()
      setBlogs([data, ...blogs])
    } catch (error) {
      console.error(error)
    } finally {
      setBlog({
        title: '',
        url: '', 
        category: ''
      })
    }
  }
  const listBlogsByUser = async () => {
    try {
      const response = await fetch('/api/users/blogs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      const data = await response.json()
      setBlogs(data)
    } catch (error) {
      console.error(error)
    }
  }
  const deleteBlog = async (id) => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      const blogsCopy = [...blogs]
      const index = blogsCopy.findIndex(blog => id === blog._id)
      blogsCopy.splice(index, 1)
      setBlogs(blogsCopy)
    } catch (error) {
      console.error(error)
    }
  }
  const updateBlog = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const blogsCopy = [...blogs]
      const index = blogsCopy.findIndex(blog => id === blog._id)
      blogsCopy[index] = { ...blogsCopy[index], ...updatedData }
      setBlogs(blogsCopy)
    } catch (error) {
      console.error(error)
    }
  }

  // const archiveBlog = async (id, updatedData) => {
  //   try {
  //     const response = await fetch(`/api/blogs/${id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`
  //       },
  //       body: JSON.stringify(updatedData)
  //     })
  //     const data = await response.json()
  //     const blogsCopy = [...blogs]
  //     const index = blogsCopy.findIndex(blog => id === blog._id)
  //     blogsCopy[index] = { ...blogsCopy[index], ...updatedData }
  //     setBlogs(blogsCopy)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }


  useEffect(() => {
    const tokenData = localStorage.getItem('token')
    if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
      listBlogsByUser()
    }
  }, [token])

  useEffect(() => {
    const tokenData = localStorage.getItem('token')
    if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
      setToken(JSON.parse(tokenData))
    }
  }, [])
  return (
    < div className={styles.App}>
      <Header />
    {
      token? 
      <button className={styles.button} onClick={() => {
        localStorage.removeItem('token')
        window.location.reload()
      }}>
        Logout
      </button>:
      ''
    }
    
      <Auth
        login={login}
        credentials={credentials}
        handleChangeAuth={handleChangeAuth}
        signUp={signUp}
        setToken={setToken}
        token={token}
      />
      
      <CreateBlog
        createBlog={createBlog}
        blog={blog}
        handleChange={handleChange}
      />
      <BlogList
        blogs={blogs}
        deleteBlog={deleteBlog}
        updateBlog={updateBlog}
      />

    </div>
  )
}
