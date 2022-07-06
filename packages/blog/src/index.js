import { Theme, Reset } from '@resultadosdigitais/tangram-components'
import styled from 'styled-components'
import { Connect } from '@resultadosdigitais/front-hub/react'
import { frontHubIntl as intlFormatting } from '@resultadosdigitais/front-hub-internationalization'

import Posts from 'posts/Posts'
import Banner from 'banner/Banner'
import Aside from 'aside/Aside'

const Fundo = styled.body`
  background-color: #455b66;
  color: #ffffff;
  height: 100%;
`

const Formatar = styled.section`
  display: flex;
`

export default Connect(
  () => (
    <Fundo>
      <Banner />
      <Formatar>
        <Posts />
        <Aside />
      </Formatar>
    </Fundo>
  ),
  {
    intlFormatting,
  },
)
