// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name)
    }

function appendDriver(name){
    return[...drivers, name]
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(name){
    drivers.shift()
}

function prependDriver(name){
    return[name, ...drivers]
}

function removeLastDriver(){
    const copyDrivers = [... drivers]
    copyDrivers.pop()
    return copyDrivers
}

function removeFirstDriver(){
    const copyDrivers = [... drivers]
    copyDrivers.shift()
    return copyDrivers
}