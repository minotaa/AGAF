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

k.onClick("fruit", (fruit) => {
  if (player.worldPos().dist(fruit.worldPos()) < (64 * 4.5)) {
    k.shake(1.5)
    fruits++
    fText.text = `[black]${fruits}[/black]`
    fruit.destroy()
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

let overlayRect = ui.add([
  k.rect(9000, 9000),
  k.opacity(0.85),
  k.pos(0,0 ),
  k.color(k.Color.BLACK)
])

let overlayText = ui.add([
  k.text("CLICK TO REFOCUS", {
    size: 48,
    font: "sink",
    align: "center"
  }),
  k.pos(k.width() / 2, k.height() / 2),
  k.anchor("center")
])

k.onUpdate(() => {
  if (k.isFocused()) {
    overlayRect.hidden = true
    overlayText.hidden = true
  } else {
    overlayRect.hidden = false
    overlayText.hidden = false
  }
})

k.onLoad(async () => {
  let objects = k.randi(20, 45)
  let sprites = ["apple", "grape", "mushroom", "pineapple", "watermelon"]
  for (let i = 0; i < objects; i++) {
    k.add([
      k.sprite(k.choose(sprites)),
      k.area(),
      k.body({ isStatic: false, mass: 0.01 }),
      k.pos(k.randi(64, 2146), k.randi(64, 1509)),
      "fruit"
    ])
  }
})


const SPEED = 325

k.onKeyDown("a", () => {
  let speed = SPEED
  if (k.isKeyDown("shift")) speed *= 2
	player.move(-speed, 0)
})

k.onKeyDown("d", () => {
  let speed = SPEED
  if (k.isKeyDown("shift")) speed *= 2
	player.move(speed, 0)
})

k.onKeyDown("w", () => {
  let speed = SPEED
  if (k.isKeyDown("shift")) speed *= 2
	player.move(0, -speed)
})

k.onKeyDown("s", () => {
  let speed = SPEED
  if (k.isKeyDown("shift")) speed *= 2
	player.move(0, speed)
})

let timer = 0
let timer2 = 1 
let loop = true
k.onUpdate(() => {
  if (!loop) return
  k.camPos(player.pos)
  timer += k.dt()
  if (timer < timer2) return
  timer = 0
  let sprites = ["apple", "grape", "mushroom", "pineapple", "watermelon"]
  k.add([
    k.sprite(k.choose(sprites)),
    k.area(),
    k.body({ isStatic: false, mass: 0.01 }),
    k.pos(k.randi(64, 2146), k.randi(64, 1509)),
    "fruit"
  ])
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