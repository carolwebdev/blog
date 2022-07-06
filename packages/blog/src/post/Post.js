import styled from 'styled-components'

const CssPost = styled.div`
  .post-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .heading {
    font-size: 30px;
    margin: 50px;
    text-align: center;
  }

  .image {
    height: 300px;
    width: 550px;
  }

  .text {
    font-size: 18px;
    margin: auto;
    padding: 40px;
    text-align: justify;
  }

  .info {
    margin-top: -45px;
    margin-bottom: 50px;
    margin-left: 100px;
    margin-right: 100px;
    text-align: center;
  }
`

const Post = ({ post: { title, body, imgUrl, author }, index }) => {
  return (
    <CssPost>
      <div className="post-container">
        <h1 className="heading">{title}</h1>
        <img className="image" src={imgUrl} alt="post" />
        <p className="text">{body}</p>
        <div className="info">
          <h4>Written by: {author}</h4>
        </div>
      </div>
    </CssPost>
  )
}

export default Post
