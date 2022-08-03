const ethers = require('ethers')

function createWallet(){
    const arr = []

    for (let index = 0; index < 1; index++) {
        const wallet = ethers.Wallet.createRandom()
        arr.push(wallet.address)
        arr.push(wallet.mnemonic.phrase)
        arr.push(wallet.privateKey)
    }

    return arr
}

console.log(createWallet())
