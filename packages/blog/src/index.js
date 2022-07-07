import { Theme, Reset } from '@resultadosdigitais/tangram-components'
import styled from 'styled-components'
import { Connect } from '@resultadosdigitais/front-hub/react'
import { frontHubIntl as intlFormatting } from '@resultadosdigitais/front-hub-internationalization'

import Posts from 'posts/Posts'
import Banner from 'banner/Banner'
import Aside from 'aside/Aside'
import PostList from 'postList/PostList'
import Post from 'post/Post'
import { Modal } from '@resultadosdigitais/tangram-components'
import ExampleBase from 'modal/Modal'

const Fundo = styled.body`
  background-color: #455b66;
  color: #ffffff;
  height: 100%;
`

const Layout = styled.section`
  display: flex;
`

export default Connect(
  () => (
    <Fundo>
      <Banner />
      <Layout>
        <Posts />
        <Aside />
      </Layout>
    </Fundo>
  ),
  {
    intlFormatting,
  },
)
