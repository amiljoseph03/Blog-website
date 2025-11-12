import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/Herosection'
import BlogPostCard from '../../components/blogpostcard/Blogpostcard'

function home() {
  return (
    <div>
      {/* <h1>home</h1> */}
      <Layout>
        {/* Home  */}
        <HeroSection/>
        <BlogPostCard/>

      </Layout>
    </div>
  )
}

export default home
