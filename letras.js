/* Funciones letras */

function D(x, y, outlineCol, grosor, inclinacion, ruido) {
  /* Inicio encapsulamiento estilo */
  push()

  /* Configuración parametros */

  /* Posición */
  translate(x, y)
  /* Inclinación */
  shearX(-inclinacion)
  /* Grosor */
  strokeWeight(grosor)
  /* Color contorno */
  stroke(outlineCol)

  /* Constantes estilo letra */
  strokeCap(ROUND)
  strokeJoin(ROUND)
  noFill()

  /* Nodos letra */
  /* Sumo el valor de 'ruido' a algunas coordenadas */
  beginShape()
  vertex(0 , 129.391)
  vertex(0, 0)
  bezierVertex(60.7829 + ruido, 0, 68.8105, 1.51074, 76.0977, 4.53223)
  bezierVertex(83.444 + ruido, 7.49447, 89.7832, 11.7601, 95.1152, 17.3291)
  bezierVertex(100.507 + ruido, 22.8389, 104.654, 29.3854, 107.557, 36.9688)
  bezierVertex(110.519 + ruido, 44.4928, 112, 52.8464, 112, 62.0293)
  vertex(112 , 67.4502)
  bezierVertex(112 + ruido, 76.5739, 110.519, 84.9274, 107.557, 92.5107)
  bezierVertex(104.654 + ruido, 100.094, 100.536, 106.641, 95.2041, 112.15)
  bezierVertex(89.8721 + ruido, 117.66, 83.5625, 121.926, 76.2754, 124.947)
  bezierVertex(69.0475 + ruido, 127.91, 61.1087, 129.391, 52.459, 129.391)
  endShape(CLOSE)

  pop()


}

function O(x, y, outlineCol, grosor, inclinacion, ruido) {

  /* Inicio encapsulamiento estilo */
  push()

  /* Configuración parametros */

  /* Posición */
  translate(x, y)
  /* Inclinación */
  shearX(-inclinacion)
  /* Grosor */
  strokeWeight(grosor)
  /* Color contorno */
  stroke(outlineCol)

  /* Constantes estilo letra */
  strokeCap(ROUND)
  strokeJoin(ROUND)
  noFill()

  /* Nodos letra */
  beginShape()
  vertex(113.897, 63.8955)
  vertex(113.897, 69.1387)
  bezierVertex(113.897 + ruido, 79.0326, 112.505, 87.9193, 109.721, 95.7988)
  bezierVertex(106.995 + ruido, 103.619, 103.115, 110.314, 98.0791, 115.883)
  bezierVertex(93.0433 + ruido, 121.393, 87.0892, 125.629, 80.2168, 128.591)
  bezierVertex(73.3444 + ruido, 131.494, 65.7611, 132.945, 57.4668, 132.945)
  bezierVertex(49.1133, 132.945, 41.4707, 131.494, 34.5391, 128.591)
  bezierVertex(27.6667, 125.629, 21.6829, 121.393, 16.5879, 115.883)
  bezierVertex(11.5521, 110.314, 7.64193, 103.619, 4.85742, 95.7988)
  bezierVertex(2.13216, 87.9193, 0.769531, 79.0326, 0.769531, 69.1387)
  vertex(0.769531, 63.8955)
  bezierVertex(0.769531, 54.0016, 2.13216, 45.1149, 4.85742, 37.2354)
  bezierVertex(7.64193, 29.3558, 11.5225, 22.6611, 16.499, 17.1514)
  bezierVertex(21.5348, 11.5824, 27.4889, 7.34635, 34.3613, 4.44336)
  bezierVertex(41.293, 1.48112, 48.9355, 0, 57.2891, 0)
  bezierVertex(65.5833, 0, 73.1667, 1.48112, 80.0391, 4.44336)
  bezierVertex(86.9707 + ruido, 7.34635, 92.9544, 11.5824, 97.9902, 17.1514)
  bezierVertex(103.026 + ruido, 22.6611, 106.936, 29.3558, 109.721, 37.2354)
  bezierVertex(112.505 + ruido, 45.1149, 113.897, 54.0016, 113.897, 63.8955)
  endShape(CLOSE)

  pop()
}


function P(x, y, outlineCol, grosor, inclinacion, ruido) {

  /* Inicio encapsulamiento estilo */
  push()

  /* Configuración parametros */

  /* Posición */
  translate(x, y)
  /* Inclinación */
  shearX(-inclinacion)
  /* Grosor */
  strokeWeight(grosor)
  /* Color contorno */
  stroke(outlineCol)

  /* Constantes estilo letra */
  strokeCap(ROUND)
  strokeJoin(ROUND)
  noFill()

  beginShape()
  vertex(40.9395,85.5)
  vertex(40.9395,129.391)
  vertex(0.5,129.391)
  vertex(0.5,0)
  vertex(61.3789,0)
  bezierVertex(71.7467 + ruido,0,80.6631,1.89583,88.1279,5.6875)
  bezierVertex(95.652 + ruido,9.47917,101.428,14.6927,105.457,21.3281)
  bezierVertex(109.486 + ruido,27.9043,111.5,35.4284,111.5,43.9004)
  bezierVertex(111.5 + ruido,52.2539,109.486,59.541,105.457,65.7617)
  bezierVertex(101.428 + ruido,71.9824,95.652,76.8405,88.1279,80.3359)
  bezierVertex(80.6631 + ruido,83.7721,71.7467,85.4902,61.3789,85.4902)
  endShape(CLOSE)
  

  pop()

}