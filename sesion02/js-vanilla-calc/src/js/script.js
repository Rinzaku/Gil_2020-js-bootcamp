const title = document.querySelector('h1')
const n1 = document.querySelector('#primer-numero')
const n2 = document.querySelector('#segundo-numero')
const sumButon = document.querySelector('#sum-button')
const diffButon = document.querySelector('#diff-button')
const prodButon = document.querySelector('#prod-button')
const divButon = document.querySelector('#div-button')
const resultNode = document.querySelector('#resultado')

// sum operation
sumButon.addEventListener('click', function () {
    const n1Int = parseInt(n1.value)
    const n2Int = parseInt(n2.value)

    const result = n1Int + n2Int
    console.log(result)

    //creacion de nodo <span>{result}</span>
    const textContent = document.createTextNode(result)
    const spanElement = document.createElement('span')
    spanElement.appendChild(textContent)

    //eliminamos resultado previo
    if (resultNode.childNodes.length > 3) {
        resultNode.removeChild(resultNode.childNodes[3])
    }
    resultNode.appendChild(spanElement)
    return result
})

//operación resta
diffButon.addEventListener('click', function () {
    const n1Int = parseInt(n1.value)
    const n2Int = parseInt(n2.value)

    const result = n1Int - n2Int
    console.log(result)

    //creacion de nodo <span>{result}</span>
    const textContent = document.createTextNode(result)
    const spanElement = document.createElement('span')
    spanElement.appendChild(textContent)

    //eliminamos resultado previo
    if (resultNode.childNodes.length > 3) {
        resultNode.removeChild(resultNode.childNodes[3])
    }
    resultNode.appendChild(spanElement)
    return result
})

//operación producto
prodButon.addEventListener('click', function () {
    const n1Int = parseInt(n1.value)
    const n2Int = parseInt(n2.value)

    const result = n1Int * n2Int
    console.log(result)

    //creacion de nodo <span>{result}</span>
    const textContent = document.createTextNode(result)
    const spanElement = document.createElement('span')
    spanElement.appendChild(textContent)

    //eliminamos resultado previo
    if (resultNode.childNodes.length > 3) {
        resultNode.removeChild(resultNode.childNodes[3])
    }
    resultNode.appendChild(spanElement)
    return result
})

//operacion division
divButon.addEventListener('click', function () {
    const n1Int = parseInt(n1.value)
    const n2Int = parseInt(n2.value)

    const result = n1Int / n2Int
    console.log(result)

    //creacion de nodo <span>{result}</span>
    const textContent = document.createTextNode(result)
    const spanElement = document.createElement('span')
    spanElement.appendChild(textContent)

    //eliminamos resultado previo
    if (resultNode.childNodes.length > 3) {
        resultNode.removeChild(resultNode.childNodes[3])
    }
    resultNode.appendChild(spanElement)
    return result
})

// JS Mouse events
title = document.querySelector('h1').addEventListener('click', function () {
    console.log('click sobre el título')
})