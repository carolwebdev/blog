//import nossafota from './nossafota.png'
import styled from 'styled-components'
import Post from 'post/Post'
import Posts from 'posts/Posts'

const Lista = styled.aside`
  background-color: #32424a;
  width: 200px;
  overflow-wrap: break-word;
  padding: 20px;
  font-size: 20px;
`
const Aside = () => {
  return (
    <Lista>
      {/* <img></img> */}
      <aside>
        {/* {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
        ))} */}
      </aside>
    </Lista>
  )
}

export default Aside
