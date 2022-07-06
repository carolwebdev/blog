import banner from './banner.png'
import styled from 'styled-components'

const Banner = () => {
  const Image = styled.header`
    background-color: #77797a;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      width: 500px;
      max-height: 400px;
      margin: auto;
    }
  `

  return (
    <Image>
      <header>
        <img src={banner} alt="banner do blog Hello World" />
      </header>
    </Image>
  )
}
export default Banner
