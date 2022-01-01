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
            console.log("->", ethereum)
            ethereum.on('connect', (connectInfo) => {
                console.log("connect", connectInfo)
            });
        }
        return () => {

        }
    }, [])

    const ConnectWallet = () => {
        const isConnected = ethereum.isConnected()
        console.log(isConnected)
        ethereum.on('connect', (connectInfo) => {
            console.log(connectInfo)
        });
        const params = [
            {
                from: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
                to: '0xd46e8dd67c5d32be8058bb8eb970870f07244567',
                gas: '0x76c0', // 30400
                gasPrice: '0x9184e72a000', // 10000000000000
                value: '0x9184e72a', // 2441406250
                data:
                    '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',
            },
        ];

        ethereum
            .request({
                method: 'eth_sendTransaction',
                params,
            })
            .then((result) => {
                // The result varies by RPC method.
                // For example, this method will return a transaction hash hexadecimal string on success.
            })
            .catch((error) => {
                // If the request fails, the Promise will reject with an error.
            });
    }
    return (
        <ThemeContext.Consumer>
            {value => {
                return (<div className={style.HeaderWrap}>
                    <div className="grid grid-cols-6">
                        <div className='flex col-span-2 justify-start'>
                            <div className={style.logoWrap}>
                                <img src={value.isDark ? logo_light : logo} alt="" />
                                <span>
                                    CryptoFlow
                                </span>
                            </div>
                        </div>
                        <div className='col-span-2 flex justify-center'>
                            <ul className={style.menuWrap}>
                                <li>How it works</li>
                                <li>Team</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className='col-span-2 flex justify-end'>
                            <div className={style.authBtnWrap}>
                                <button className="btn"
                                    onClick={() => value.toggleTheme(!value.isDark)}>
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
