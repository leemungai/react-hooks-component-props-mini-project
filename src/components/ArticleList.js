import React from 'react'
import Articles from "../__tests__/Article.test"


function ArticleList({posts}) {

    const article = posts.map((posts) =>(

      <Article 
      key={post.id} 
      title={post.title} 
      data={post.date} 
      preview={post.preview} 
      minutes={post.minutes}/>
    ))
  return <main> 
    {article}
    </main>
  console.log(posts.index)
}
export default ArticleList;