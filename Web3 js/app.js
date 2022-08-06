const btn = document.querySelector("#connectwallet")

console.log('Button has been clicked.')

let account = ''
let wallet_connected = false

btn.addEventListener('click', () => {
    if (window.ethereum) {
		window.ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
			account = accounts[0]
			wallet_connected = true
		})
    } else {
        alert('Download Metamask wallet!')
    }
})
