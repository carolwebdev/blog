import { Theme, Reset } from '@resultadosdigitais/tangram-components'
import { Connect } from '@resultadosdigitais/front-hub/react'
import { frontHubIntl as intlFormatting } from '@resultadosdigitais/front-hub-internationalization'

import MinhaImagem from './Nome/download.jpeg'
import Post from './components/post/Post'
import Posts from 'components/posts/Posts'
import Banner from 'blog/Banner'

export default Connect(
  () => (
    <Theme value={Theme.kinds.line}>
      <Banner />,
    </Theme>
  ),
  {
    intlFormatting,
  },
)
