import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { createContext } from 'react'

// Note: using links instead of routing,
// because no there arent any other pages to route to

//create blog context
export const BlogContext = createContext();

function App() {

  //create state for all data related to blogs
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [tagList, setTagList] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  //create context value
  const _blogContextVal = {
    blogData, setBlogData,
    tagList, setTagList,
    selectedTags, setSelectedTags,
    currentPage, setCurrentPage,
    totalPages, setTotalPages
  }

  return (
    <BlogContext.Provider value={_blogContextVal}>
      <Navbar/>
      <Hero/>
      <Content/>
      <Footer/>
    </BlogContext.Provider>
  )
}

export default App
