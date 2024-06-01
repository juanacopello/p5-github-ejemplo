/* Variables ruido */
let sliderRuido
let ruidoValue = 0
let pRuido

/* Variables peso */
let selectPeso
let pesoValue = 2
let pPeso

/* Variables inclinacion */
let radioInclinacion
let inclinacionValue = 0
let pInclinacion


/* Variables color */
let colorPicker
let colorValue = 'black'
let pColor

/* Botón guardar */
let saveButton

let size = 1

function setup() {
  // Código inicial. Se ejecuta una sola vez
  createCanvas(600, 400)

  /* UI Ruido */
  /* Creación del slider */
  sliderRuido = createSlider(0, 80, 0, 1)
  sliderRuido.position(0, height + 40)
  
  pRuido = createP("Ruido:")
  pRuido.position(5, height)

  /* Fin UI Ruido */

  /* UI Peso */
  selectPeso = createSelect()
  selectPeso.option('Light', 5)
  selectPeso.option('Regular', 10)
  selectPeso.option('Bold', 30)
  selectPeso.position(180, height + 40)

  pPeso = createP("Peso:")
  pPeso.position(180, height)
  /* Fin UI Peso */

  /* UI Inclinación */
  radioInclinacion = createRadio()
  radioInclinacion.option(0, 'Normal')
  radioInclinacion.option(0.2, 'Italic')
  radioInclinacion.position(300, height + 40)

  pInclinacion = createP("Inclinación:")
  pInclinacion.position(300, height)
  /* Fin UI Inclinación */

  /* UI ColorPicker */
  colorPicker = createColorPicker('black')
  colorPicker.position(460, height + 40)
  colorValue = colorPicker.color()
  pColor = createP("Color:")
  pColor.position(460, height)
  /* Fin UI ColorPicker */

  /* UI Guardar */
  saveButton = createButton('Guardar')
  saveButton.position(540, height + 40)
  /* Cuando se clickea ejecuta la funcion guardarTipo */
  saveButton.mousePressed(guardarTipo)
  /* Fin UI Guardar */

}

function draw() {
  background(255, 255, 0)

  /* Obtenemos el valor del slider del ruido */
  ruidoValue = sliderRuido.value()

  /* Obtenemos el valor del select del peso */
  pesoValue = selectPeso.value()

  /* Obtenemos el valor del radio de la inclinación */
  inclinacionValue = radioInclinacion.value()

  /* Obtenemos el valor del color */
  colorValue = colorPicker.color()


  /* Llamadas a las letras */
  scale(size)
  translate(100, 100)
  P(0, 0, colorValue, pesoValue, inclinacionValue, ruidoValue)
  O(120, 0, colorValue, pesoValue, inclinacionValue, ruidoValue)
  D(245, 0, colorValue, pesoValue, inclinacionValue, ruidoValue)

}

function guardarTipo() {
  saveCanvas('tipo', 'png')
}



