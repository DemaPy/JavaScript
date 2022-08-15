import { App } from "./classes.js"

const app = new App()
const btnObj = {
    "btnbalance": app.id('balance'),
    "btnsendBnb": app.id('sendBnb'),
    "btnsendToken": app.id('sendToken')
}


export const AddRemoveStyles = {
    connectWallet: 
        function() {
            app.id('connectWallet').classList.add('d-none')
            app.id('nav').classList.remove('d-none')
            app.id('to').classList.remove('d-none')
            app.id('amount').classList.remove('d-none')
            for (let btn in btnObj) {
                btnObj[btn].classList.remove('d-none')
            }
        },

    disconnectWallet:
        function() {
            app.id('connectWallet').classList.remove('d-none')
            app.id('nav').classList.add('d-none')
            app.id('to').classList.add('d-none')
            app.id('amount').classList.add('d-none')
            for (let btn in btnObj) {
                btnObj[btn].classList.add('d-none')
            }
        }
}

export const ClearInputs = {
    clearInputs:
        function() {
            app.id('to').value = ''
            app.id('amount').value = ''
        }
}