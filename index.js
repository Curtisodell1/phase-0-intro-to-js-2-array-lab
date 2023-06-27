
//Curious why these need to be functions? 
//Is it just because of the way we are running the tests and using destructive methods so we need a way to reset them?

const cats = [
    "Milo", "Otis", "Garfield"
]

function destructivelyAppendCat(){
    destructivelyAppendCat = cats.push('Ralph')
}

function destructivelyPrependCat(){
    destructivelyPrependCat = cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    destructivelyRemoveLastCat = cats.pop()
}

function destructivelyRemoveFirstCat(){
    destructivelyRemoveFirstCat = cats.shift()
}

function appendCat(){
    const catsCopy = [...cats]
    appendCat = catsCopy.push('Broom')
    return catsCopy
}

function prependCat(){
    const catsCopy = [...cats]
    prependCat = catsCopy.unshift('Arnold')
    return catsCopy
}

function removeLastCat(){
    const catsCopy = [...cats]
    removeLastCat = catsCopy.pop()
    return catsCopy
}

function removeFirstCat(){
    const catsCopy = [...cats]
    removeFirstCat = catsCopy.shift()
    return catsCopy
}