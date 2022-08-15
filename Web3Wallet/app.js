import { App,EthereumRequest } from "./utils/classes.js";
import { vars } from "./utils/vars.js";
import { AddRemoveStyles, ClearInputs } from "./utils/styleApp.js";
import { isValid } from "./utils/validation.js";
import { abiBUSD } from "../myWeb3Site/utils/abiBusd.js";

const app = new App()
const request = new EthereumRequest()

window.onload = async () => {
    const {ethereum} = window
    if (!ethereum) {
        return alert('Please install Metamask.')
    } 
    let acc = await request.account()
    if (acc.length != 0) {
        vars.account = acc[0]
        app.render('#account', vars.account)
        AddRemoveStyles.connectWallet()
    }
}

const handleChangeId = (id) => {
    vars.chainIds.forEach(item => item.id == id ? alert(item.name): item)
    window.location.reload()
}

const handleChangeAcc = (acc) => {
    if (acc.length === 0) {
        console.log('Please connect metamask')
        AddRemoveStyles.disconnectWallet()
    } else if (acc[0] != vars.account) {
        vars.account = acc[0]
        window.location.reload()
    }
}

window.ethereum.on('chainChanged', handleChangeId)
window.ethereum.on('accountsChanged', handleChangeAcc)

const connectWallet = async () => {
    const accounts = await request.accounts()
    vars.account = accounts[0]
    app.render('#account', vars.account)
    AddRemoveStyles.connectWallet()
}
app.id('connectWallet').addEventListener('click', connectWallet)


app.id('balance').addEventListener('click', async () => {
    const balance = await request.balance(vars.account)
    const convert = (parseInt(balance) / Math.pow(10,18))
    return alert(`Your wallet balance is: ${convert} ETH`)
})


app.id('sendBnb').addEventListener('click', async () => {

    const to = app.id('to').value.trim()
    const amount = app.id('amount').value.trim()

    if (isValid(to) && isValid(amount)) {

        const sendBnb = await request.sendTransaction(vars.account, to, amount)
        const data = await sendBnb.data
        return alert(`Transaction hash: ${data}`)
    }
    ClearInputs.clearInputs()
})


app.id('sendToken').addEventListener('click', async () => {

    const to = app.id('to').value.trim()
    const amount = app.id('amount').value.trim()

    if (isValid(to) && isValid(amount) && window.ethereum.chainId == vars.chainIds[3].id) {

        let busd = new ethers.Contract('0xe9e7cea3dedca5984780bafc599bd69add087d56', abiBUSD, vars.signer)
        let transfer = await busd.transfer(to, amount+'000000000000000000')
        let tx = await transfer.data

        ClearInputs.clearInputs()

        return alert(`Transaction hash: ${tx}`)
    } else {
        let check = vars.chainIds.map(item => item.id == window.ethereum.chainId ? item.name : '')
        alert(`Check your Chain. Your chain id is: ${check.join('')} but, should be ${vars.chainIds[3].name}`)
        request.switchChain(vars.chainIds[3].id)
    }


    app.id('to').value = ''
    app.id('amount').value = ''
})
