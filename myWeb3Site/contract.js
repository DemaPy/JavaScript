export class Contract {
    constructor(contract) {
        this.contract = contract
    }

    send() {
        console.log(`send to ${this.contract}`)
    }
}