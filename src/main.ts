import kaboom, { Vec2 } from "kaboom"

const k = kaboom({
  height: 768,
  width: 1280,
  background: [158, 255, 240],
})

k.loadSprite("bean", "sprites/bean.png")
k.loadSprite("grass", "sprites/grass.png")
k.loadSprite("heart", "sprites/heart.png")
k.loadFont("sink", "fonts/sink.ttf")

let hp = 100

const player = k.add([
  k.pos(1088, 768),
  k.sprite("bean"),
  k.area(),
  k.anchor("center"),
  k.body()
])

// 0x0 - 2176x1536

k.onClick("resource", () => {
  k.shake(20)
})

k.onLoading(async () => {
  let objects = k.randi(5, 15)
  for (let i = 0; i < objects; i++) {
    k.add([
      k.sprite("grass", {
        width: 64,
        height: 64
      }),
      k.area(),
      k.body({ isStatic: true }),
      k.pos(k.randi(64, 2146), k.randi(64, 1509)),
      "resource"
    ])
  }
})

const SPEED = 325

k.onLoading(async () => {
  let objects = k.randi(20, 50)
  for (let i = 0; i < objects; i++) {
    k.add([
      k.sprite("grass"),
      k.pos(k.randi(-(75 * 64), 25 * 64), k.randi(-(75 * 64), 25 * 64)),
      k.area(),
      k.body({ isStatic: true, gravityScale: 0 }),
      k.offscreen({ pause: true })
    ])
  }  
})

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