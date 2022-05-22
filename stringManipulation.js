function capitalize(str) {
     return str.charAt(0).toUpperCase() + str.slice(1)

    }

const reveseString = (str) => {
    return str.split('').reverse().join('')
}
export {capitalize, reveseString} 