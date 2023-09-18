import kaboom from "kaboom"

const k = kaboom({
  height: 720,
  width: 1280,
})

k.loadSprite("bean", "sprites/bean.png")
k.loadSprite("grass", "sprites/grass.png")
k.loadSprite("heart", "sprites/heart.png")
k.loadBitmapFont("sink", "fonts/sink_6x8.png", 6, 8)

let hIcon = k.add([
  k.pos(32, 32),
  k.sprite("heart"),
  k.anchor("center"),
  k.z(10)
])

let hText = k.add([
  k.pos(64, 32),
  k.text("100", {
    font: "sink",
    size: 32
  })
])

let hp = 100

const player = k.add([
  k.pos(120, 80),
  k.sprite("bean"),
  k.area(),
  k.anchor("center")
])

const SPEED = 250

k.onKeyDown("a", () => {
	player.move(-SPEED, 0)
})

k.onKeyDown("d", () => {
	player.move(SPEED, 0)
})

k.onKeyDown("w", () => {
	player.move(0, -SPEED)
})

k.onKeyDown("s", () => {
	player.move(0, SPEED)
})