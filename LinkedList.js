
class Node {
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}



class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = new Node(data)

        if (this.tail) {
            this.tail.next = node
        }

        if (!this.head) {
            this.head = node
        }

        this.tail = node
    }

    prepend(data) {
        const node =  new Node(data, this.head)
        this.head = node

        if(!this.tail){
            this.tail = node
        }
    }

    remove(data) {
        let firstElem = this.head
        if(!this.head) {
            return
        }

        while(this.head && this.head.data === data) {
            this.head = this.head.next
        }

        while (firstElem.next) {
            if (firstElem.next.data === data) {
                firstElem.next = firstElem.next.next
            } else {
                firstElem = firstElem.next
            }
        }

        if (this.tail.data == data) {
            this.tail = firstElem
        }
    }

    find(data) {
        if (!this.head) {
            return
        }

        let firstElem = this.head

        while(firstElem) {
            if (firstElem.data === data) {
                return firstElem
            }
            firstElem = firstElem.next
        }
    }

    inserAfter(afterElement, data) {
        const node = this.find(afterElement)
        if (!node) {
            return
        }

        node.next = new Node(data, node.next)
    }

    toArray() {
        let firstElem = this.head
        const output = []

        while(firstElem) {

            output.push(firstElem)

            firstElem = firstElem.next
        }

        return output
    }

}




const list = new LinkedList()
