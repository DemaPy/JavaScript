// Pattern Module

const myModule = (() => {
    let _name = 'Viacheslav'
    function setName(n) {
        if (n) {
            _name = n
        }
        console.log('Name has been changed to')
    }

    function getName() {
        console.log(_name)
    }

    return {
        changeName: (name) => {
            setName(name)
        },
        getName: () => {
            getName()
        }
    }
})()

myModule.getName()
myModule.changeName('Dema')
myModule.getName()
