export class App {
    render(selector,content) {
        return document.querySelector(selector).insertAdjacentHTML('beforeend', content)
    }

    id(id) {
        return document.getElementById(id)
    }
}

export class EthereumRequest {
    async account () {
        return await window.ethereum.request({
            method: 'eth_accounts'
        }).catch(err => alert(`Error code: ${err.code}\nError message: ${err.message}`))
    }

    async accounts () {
        return await window.ethereum.request({
            method: 'eth_requestAccounts'
        }).catch(err => alert(`Error code: ${err.code}\nError message: ${err.message}`))
    }

    async balance(acc) {
        return await window.ethereum.request({
            method: "eth_getBalance",
            params: [
                    acc,
                    'latest'
            ]
        }).catch(err => console.log(err))
    }

    async sendTransaction(from,to,amount) {
        return await window.ethereum.request({
            method: "eth_sendTransaction", 
            params: [
                {
                    from: from,
                    to: to.toLowerCase(),
                    gas: Number(210000).toString(16), // 30400
                    gasPrice: Number(5000000000).toString(16), // 10000000000000
                    value: Number(amount+'000000000000000000').toString(16), // 2441406250
                },
            ]
        }).catch(err => alert(`Error code: ${err.code}\nError message: ${err.message}`))
    }

    async switchChain (chainId) {
        return await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [
            { 
                chainId: chainId
            }
        ],
      });
    }
}