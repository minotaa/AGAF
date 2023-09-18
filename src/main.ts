import kaboom from "kaboom"

const k = kaboom({
  height: 720,
  width: 1280,
})

k.loadSprite("bean", "sprites/bean.png")

const m = k.add([
  k.rect(1, 1),
  k.opacity(0),
  k.pos(k.mousePos()),
  k.area()
])

const player = k.add([
  k.pos(120, 80),
  k.sprite("bean"),
  k.area(),
  k.follow(m)
])

k.onClick(() => m.moveTo(k.mousePos()))