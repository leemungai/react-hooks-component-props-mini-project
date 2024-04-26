import React from 'react'
// import ArticleList from './ArticleList'
 function Article(props) {

    if(props.date){
        return (
            <article>
              <h3>{props.title}</h3>
              <small>{props.date}</small>
              <p>{props.preview}</p>
            </article>
          )
    }else{
        return  "January 1, 1970"
    }


}
export default Article