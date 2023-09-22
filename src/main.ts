import kaboom, { Color } from "kaboom"

const k = kaboom({
  height: 768,
  width: 1280,
  background: [158, 255, 240],
})

k.loadSprite("bean", "sprites/bean.png")
k.loadSprite("grass", "sprites/grass.png")
k.loadSprite("heart", "sprites/heart.png")
k.loadFont("sink", "fonts/sink.ttf")

k.loadSprite("apple", "sprites/apple.png")
k.loadSprite("coin", "sprites/coin.png")
k.loadSprite("grape", "sprites/grape.png")
k.loadSprite("pineapple", "sprites/pineapple.png")
k.loadSprite("mushroom", "sprites/mushroom.png")
k.loadSprite("watermelon", "sprites/watermelon.png")

let hp = 100
let fruits = 0

const player = k.add([
  k.pos(1088, 768),
  k.sprite("bean"),
  k.area(),
  k.anchor("center"),
  k.body()
])

// 0x0 - 2176x1536

k.onClick("resource", (resource) => {
  if (player.worldPos().dist(resource.worldPos()) < (64 * 4.5)) {
    k.shake(1.5)
  } else {
    k.debug.log("Too far away.")
  }
}) 

let ui = k.add([
  k.anchor("center"),
  k.z(10),
  k.fixed()
])

ui.add([
  k.sprite("heart"),
  k.pos(32, 32)
])

let hText = ui.add([
  k.text("[black]100[/black]", {
    font: "sink",
    size: 24,
    styles: {
      "black": {
        color: k.BLACK
      }
    }
  }),
  k.pos(80, 38),
  k.outline(2, k.Color.BLACK)
])

ui.add([
  k.sprite("pineapple"),
  k.pos(34, 70)
])

let fText = ui.add([
  k.text("[black]0[/black]", {
    font: "sink",
    size: 24,
    styles: {
      "black": {
        color: k.BLACK
      }
    }
  }),
  k.pos(80, 86),
  k.outline(2, k.Color.BLACK)
])

k.onLoad(async () => {
  let objects = k.randi(10, 35)
  let sprites = ["apple", "grape", "mushroom", "pineapple", "watermelon"]
  for (let i = 0; i < objects; i++) {
    k.add([
      k.sprite(k.choose(sprites)),
      k.area(),
      k.body({ isStatic: false, mass: 0.01 }),
      k.pos(k.randi(64, 2146), k.randi(64, 1509)),
      "resource"
    ])
  }
})

const SPEED = 325

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

k.onUpdate(() => {
  k.camPos(player.pos)
})

k.addLevel(
  [
    "===================================",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "=                                 =",
    "==================================="
  ], {
  tileWidth: 64,
  tileHeight: 64,
  tiles: {
    "=": () => [
      k.sprite("grass"),
      k.area(),
      k.body({ isStatic: true, gravityScale: 0 })
    ]
  },
  pos: k.vec2(0, 0)
})