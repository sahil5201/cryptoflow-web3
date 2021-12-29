import React from 'react'
import bitcoin from "../../images/bitcoin-logo.png"
import bnb from "../../images/bnb-logo.png"
import ethereum from "../../images/ethereum-logo.png"
import tron from "../../images/tron-logo.png"
import style from "./style.module.scss"

function CryptoFooter() {
    return (
        <div className={`${style.CryptoWrap} grid grid-cols-4`}>
            <div className={style.CryptoBox}>
                <div className={style.Cryptologo}>
                    <div className={style.imgWrap}>
                        <img src={bitcoin} alt="bitcoin" />
                    </div>
                </div>
                <div className={style.CryptoName}>
                    Bitcoin
                    <span>
                        <b>22</b> offers from <b>4%</b> per month
                    </span>
                </div>
            </div>
            <div className={style.CryptoBox}>
                <div className={style.Cryptologo}>
                    <div className={style.imgWrap}>
                        <img src={bnb} alt="bnb" />
                    </div>
                </div>
                <div className={style.CryptoName}>
                    BNB
                    <span>
                        <b>14</b> offers from <b>2%</b> per month
                    </span>
                </div>
            </div>
            <div className={style.CryptoBox}>
                <div className={style.Cryptologo}>
                    <div className={style.imgWrap}>
                        <img src={ethereum} alt="ethereum" />
                    </div>
                </div>
                <div className={style.CryptoName}>
                    Ethereum
                    <span>
                        <b>19</b> offers from <b>9%</b> per month
                    </span>
                </div>
            </div>
            <div className={style.CryptoBox}>
                <div className={style.Cryptologo}>
                    <div className={style.imgWrap}>
                        <img src={tron} alt="tron" />
                    </div>
                </div>
                <div className={style.CryptoName}>
                    Tron
                    <span>
                        <b>3</b> offers from <b>5%</b> per month
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CryptoFooter
