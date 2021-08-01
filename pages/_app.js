import { Wrap, LeftDiv, RightDiv } from '../components/app-style'
import { GlobalStyle } from '../components/globals'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [pull, setPull] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Zadanie zdalne e-MSI</title>
        <link rel="icon" href="/tasks-solid.svg" />
      </Head>
      <Wrap>
        <LeftDiv id="left" active={pull}>
          <ul>
            <li><Link href="/"><a onClick={() => setPull(!pull)}>Różne kontrolki HTML</a></Link></li>
            <li><Link href="/subpage/emplyee-table"><a onClick={() => setPull(!pull)}>Tabela Pracowników </a></Link></li>
            <li><Link href="/subpage/facture-table"><a onClick={() => setPull(!pull)}>Tabela Faktur VAT</a></Link></li>
            <li><Link href="/subpage/delegation-table"><a onClick={() => setPull(!pull)}>Tabela Delegacji BD</a></Link></li>
            <li><Link href="/subpage/contractors-data"><a onClick={() => setPull(!pull)}>Dane Kontrahentów</a></Link></li>
          </ul>
        </LeftDiv>
        <RightDiv id="right" active={pull}>
          <i className={`fas fa-bars ${pull ? 'pull' : ''} hamb`} onClick={() => setPull(!pull)}></i>
          <Component {...pageProps} hamb={pull} />
        </RightDiv>
      </Wrap>
    </>
  )
}

export default MyApp