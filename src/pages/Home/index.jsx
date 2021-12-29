import React, { Fragment } from 'react'
import { Header } from "../../components"
import CryptoFooter from './components/CryptoFooter'
import CryptoPlatform from './components/CryptoPlatform'

function Home() {
    return (
        <Fragment>
            <Header />
            <CryptoPlatform />
            <CryptoFooter />
        </Fragment>
    )
}

export default Home