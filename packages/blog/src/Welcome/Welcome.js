import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'
import { LinkButton } from '@resultadosdigitais/tangram-components'
import { Image } from '@resultadosdigitais/front-hub/react'

import FrontHubLogo from './logo-fronthub.svg'

const Root = styled.div`
  background: #212121;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--neutral-text-inverse);

  img {
    margin-right: 25px;
    width: 240px;
  }
`

const Title = styled.h1`
  margin: 32px 0 0 0;
  font-size: 36px;
`

const Summary = styled.p`
  margin: 16px 0 0 0;
  font-size: 16px;

  code {
    display: inline-block;
    vertical-align: middle;
    padding: 2px 6px;
    margin: 0 2px;
    font-size: 90%;
    background-color: #444950;
    border: 1px solid #444950;
    border-radius: 4px;
    box-sizing: border-box;
    border-radius: 3px;
    font-style: italic;
    color: rgb(248, 248, 242);
  }
`

const Actions = styled.div`
  margin-top: 32px;
`

function Welcome() {
  const { t } = useTranslation()
  const [currDate, setCurrDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Root>
      <Image src={FrontHubLogo} alt="FrontHub Logo" />
      <Title>{t('Welcome.Title')}</Title>
      <Summary>
        <Trans i18nKey="Welcome.Summary" components={[<code />]} />
      </Summary>
      <Summary>{t('Welcome.Formatting.Date', { value: currDate })}</Summary>
      <Actions>
        <LinkButton
          kind={LinkButton.kinds.primary}
          href="https://front-hub.rdstation.com.br/"
          target="_blank"
        >
          {t('Welcome.CallToAction')}
        </LinkButton>
      </Actions>
    </Root>
  )
}

export default Welcome
