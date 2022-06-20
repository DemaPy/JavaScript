let naborInner = new Set()

let SI

let count = -1

let scanner = async () => {
    if (count === -1) {
        naborInner.add(location.origin)
        count += 1
        return console.log('---Scannig has been started---')
    }

    if (count >= [...naborInner].length) {
        clearInterval(SI)
        return console.log('---Scannig has been ended---')
    }

    let scanURI = [...naborInner][count]
    console.log(`Scanning currently: ${scanURI}`)

    let str = await fetch(scanURI).then(r=>r.text())

    let scanDOc = new DOMParser().parseFromString(str, "text/html")
    let attHref = [...scanDOc.getElementsByTagName('a')].map(i=>i.href)
    let aIN = attHref.filter(i=>i.includes(location.origin))
    aIN
        .map(i=>i.replace(/\?.+/g, ""))
        .map(i=>naborInner.add(i))

    return count+=1
}

SI = setInterval(scanner, 5000)