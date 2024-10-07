const body = document.querySelector('body')
const username = document.getElementById('nombre')
const data1 = document.getElementById('nota1')
const data2 = document.getElementById('nota2')
const data3 = document.getElementById('nota3')
const btnCalculate = document.getElementById('btn-calculate')
const btnPredict = document.getElementById('btn-predict')
const response = document.getElementById('resultado')

btnCalculate.addEventListener('click', calculateNote)
btnPredict.addEventListener('click', btn_predict)


function calculateNote(event) {
  let note1 = Number(data1.value)
  let note2 = Number(data2.value)
  let note3 = Number(data3.value)

  event.preventDefault()

  let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)

  if (note1 > 5 || note2 > 5 || note3 > 5) {
    const alertBox = document.createElement('div');
    alertBox.innerHTML = `
        Una de las notas es mayor que 5!
        <button class="accept-btn">Aceptar</button>`

    alertBox.style.position = 'fixed'
    alertBox.style.top = '50%'
    alertBox.style.left = '50%'
    alertBox.style.transform = 'translate(-50%, -50%)'
    alertBox.style.backgroundColor = 'white'
    alertBox.style.padding = '20px'
    alertBox.style.border = '1px solid black'
    alertBox.style.borderRadius = '10px'
    alertBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'
    alertBox.style.zIndex = '1000'

    document.body.appendChild(alertBox)

    const acceptButton = alertBox.querySelector('.accept-btn')
    acceptButton.addEventListener('click', () => {
      alertBox.remove()
    })
    body.style.backgroundColor = 'crimson'
    response.textContent = `ERROR`
    response.style.color = 'red'
    btnCalculate.style.backgroundColor = 'crimson'
    btnPredict.style.backgroundColor = 'crimson'

  } else {
    if (result < 3.5) {
      response.textContent = `${username.value} ha PERDIDO la materia con: ${result}`
      response.style.color = 'black'
      body.style.backgroundColor = 'black'
      btnCalculate.style.backgroundColor = 'black'
      btnPredict.style.backgroundColor = 'balck'

    } else if (result >= 3.5 && result <= 4.5) {
      response.textContent = `${username.value} ha GANADO la materia con: ${result}`
      response.style.color = 'orange'
      body.style.backgroundColor = '#ff8000'
      btnCalculate.style.backgroundColor = '#ff8000'
      btnPredict.style.backgroundColor = '#ff8000'

    } else {
      response.textContent = `${username.value} ha EXCELENTADO la materia con: ${result}`
      response.style.color = 'green'
      body.style.backgroundColor = '#21c959'
      btnCalculate.style.backgroundColor = '#21c959'
      btnPredict.style.backgroundColor = '#21c959'
    }
  }
}

function btn_predict(event) {
  event.preventDefault()

  let note1 = Number(data1.value)
  let note2 = Number(data2.value)
  let n3 = (3.5-(note1 * 0.3) - (note2 * 0.3))/0.4
  data3.value = n3.toFixed(2)

  if (n3 > 5.0) {
    data3.value = ''
    response.textContent = `${username.value} Necesita: ${n3.toFixed(2)} NO PUEDE PASAR`
    response.style.color = 'black'
    body.style.backgroundColor = 'black'
    btnCalculate.style.backgroundColor = 'black'
    btnPredict.style.backgroundColor = 'balck'
  
  } else if (n3 <= 5 && n3 >= 2.5) {
    data3.value = n3.toFixed(2)
    response.textContent = `${username.value} Puede RECUPERAR`
    response.style.color = 'orange'
    body.style.backgroundColor = '#ff8000'
    btnCalculate.style.backgroundColor = '#ff8000'
    btnPredict.style.backgroundColor = '#ff8000'
  
  }else{
    data3.value = n3.toFixed(2)
    response.textContent = `${username.value} SI PASA`
    response.style.color = 'green'
    body.style.backgroundColor = '#21c959'
    btnCalculate.style.backgroundColor = '#21c959'
    btnPredict.style.backgroundColor = '#21c959'

  }
}