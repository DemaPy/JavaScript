let account;
let provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()




export const chainIds = [
    { id: "0x1", name: "Ethereum Main Network"},
    { id: "0x3", name: "Ropsten Test Network"},
    { id: "0x4", name: "Rinkeby Test Network"},
    { id: "0x38", name: "Binance Smart Chain"}
]







export const vars = {
    account,
    chainIds,
    provider,
    signer
}