const canvas = document.getElementById("my-canvas")
const context = canvas.getContext("2d")

const SCREEN_W = 700
const SCREEN_H = 700
const FOX_WIDTH = 30
const FOX_HEIGHT = 30
const FOX_POS_X = 100
const INITIAL_Y = SCREEN_H-30



context.fillStyle = "orange"
context.fillRect(FOX_POS_X,INITIAL_Y,FOX_WIDTH,FOX_HEIGHT)