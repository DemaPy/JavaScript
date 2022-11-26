// Pattern Fabric


class Door {
    constructor({color, material, height, width}) {
        this.color =  color || 'red'
        this.material = material || 'metal'
        this.height = height || '200'
        this.width = width || '100'
    }
}

class Window {
    constructor({color, material, height, width}) {
        this.color = color || 'red'
        this.material = material || 'plastic'
        this.height = height || '100'
        this.width = width || '140'
    }
}

class House {
    build({color, material, height, width, type}) {
        if (type === 'door') {
            return new Door({color, material, height, width})
        }

        if (type === 'window') {
            return new Window({color, material, height, width})
        }
    }
}

let houseFactory = new House()
let project = houseFactory.build({
    color: 'red',
    height: '200',
    width: '100',
    material: 'wood',
    type: 'door',
})

console.log(project)

let project2 = houseFactory.build({
    type: 'window',
})

console.log(project2)