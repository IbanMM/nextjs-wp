import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

import "../sass/posts.scss"
import fetch from 'isomorphic-unfetch'

const Post = ({ post }) =>
  <div>
    <div className="post-header-img" style={{backgroundImage: `url(${post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url})`}} >
      <h1>{post.title.rendered}</h1>
    </div>
    <div className="container text-wp">
      <article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  </div>

  Post.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`${publicRuntimeConfig.API}posts/${id}?_embed`)
    const post = await res.json()
  
    return { post }
  }
  
  export default Post