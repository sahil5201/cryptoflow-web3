import React, { useEffect, useState } from 'react'
import { ThemeContext } from '../../Contexts'
import style from "./headerStyle.module.scss"
import logo from "./images/logo.png"
import logo_light from "./images/logo_light.png"

function Header() {
    const [hasMetaMask, setHasMetaMask] = useState(false)
    const [ethereum, setEthereum] = useState(null)
    useEffect(() => {
        const { ethereum } = window
        if (ethereum) {
            setHasMetaMask(true)
            setEthereum(ethereum)
        }
        return () => {

        }
    }, [])

    const ConnectWallet = () => {
        if (!hasMetaMask) {
            window.open('https://metamask.io/download.html', '_blank');
        }
        return ethereum
    }

    const toggleTheme = (callBack, value) => {
        callBack(value)
        localStorage.setItem("isDarkTheme", value)
    }
    return (
        <ThemeContext.Consumer>
            {value => {
                return (<div className={style.HeaderWrap}>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
                        <div className='flex col-span-2 justify-center md:justify-start'>
                            <div className={style.logoWrap}>
                                <img src={value.isDark ? logo_light : logo} alt="" />
                                <span>
                                    CryptoFlow
                                </span>
                            </div>
                        </div>
                        <div className='col-span-2 flex justify-center md:justify-center'>
                            <ul className={style.menuWrap}>
                                <li>How it works</li>
                                <li>Team</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className='col-span-2 flex justify-center md:justify-end'>
                            <div className={style.authBtnWrap}>
                                <button className="btn"
                                    onClick={() => toggleTheme(value.toggleTheme, !value.isDark)}>
                                    {value.isDark ? <i className="fa fa-sun-o" aria-hidden="true"></i> :
                                        <i className="fa fa-moon-o" aria-hidden="true"></i>
                                    }
                                </button>
                                <button className="btn btn-blue btn-sign-up" onClick={ConnectWallet}>
                                    {hasMetaMask ? "Connect" : "Download"} Metamask
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            }
        </ThemeContext.Consumer>
    )
}

export default Header
