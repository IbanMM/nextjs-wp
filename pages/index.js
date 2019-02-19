import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

import "../sass/index.scss"
//import Link from 'next/link'
import Link from 'data-prefetch-link'
import fetch from 'isomorphic-unfetch'
import Picture from '../components/picture/picture.js'

const Index = ({ posts }) =>
  <div className="container">
    <PostList posts={posts} />
  </div>

function PostList(props) {

  const posts = props.posts;

  const listItems = posts.map((post) =>
    <li key={post.id}>
      <PrefetchData id={post.id} />
      <Link prefetch withData as={`/post/${post.slug}/${post.id}`} href={`/post?id=${post.id}`}>
        <a className="post-link">
            <Picture media={post._embedded['wp:featuredmedia'][0].media_details} size="medium_large" />
            <span>{post.title.rendered}</span>
        </a>
      </Link>
    </li>
  );

  return (
    <ul className="post-grid">{listItems}</ul>
  );
  
}

Index.getInitialProps = async ({ req }) => {
  
  const res = await fetch(`${publicRuntimeConfig.API}posts?_embed`)
  const json = await res.json()

  return { posts: json }

}

function PrefetchData (props) {
  const res = fetch(`${publicRuntimeConfig.API}posts/${props.id}?_embed`)
  return null
}

export default Index
