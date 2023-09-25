import kaboom, { Color } from "kaboom"

const k = kaboom({
  height: 768,
  width: 1280,
  background: [158, 255, 240],
})

k.loadSprite("bean", "sprites/bean.png")
k.loadSprite("mark", "sprites/mark.png")
k.loadSprite("grass", "sprites/grass.png")
k.loadSprite("ghosty", "sprites/ghosty.png")
k.loadSprite("heart", "sprites/heart.png")
k.loadSprite("meat", "sprites/meat.png")
k.loadFont("sink", "fonts/sink.ttf")

k.loadSound("eat", "sounds/yay.wav")
k.loadSound("hurt", "sounds/owch!.wav")
k.loadSound("lose", "sounds/uhoh.wav")

k.loadSprite("apple", "sprites/apple.png")
k.loadSprite("coin", "sprites/coin.png")
k.loadSprite("grape", "sprites/grape.png")
k.loadSprite("pineapple", "sprites/pineapple.png")
k.loadSprite("mushroom", "sprites/mushroom.png")
k.loadSprite("watermelon", "sprites/watermelon.png")

let gameOverTexts = [
  "YOU SUCK!",
  "try a new game",
  "CHUMP! :)",
  "WHY TRY?",
  "GAME OVER!",
  "LOL",
  "CONSIDER APPLYING FOR A JOB?",
  ":/",
  "If you lost at this game I don't wanna see what else you'd lose at",
  "BOZO!",
  "I bet you push at pull doors...",
  "https://minota.itch.io/bullethell-snake",
  "Oh no!",
  "respect the arts",
  "Dingdinginginging",
  "random mocking game over message",
  "You just can't seem to get the hang of this can you?",
  "The skill floor of this game is just too high, maybe try playing a mobile game?",
  "BOOM! Headshot.",
  "Dude, do something!",
  "I don't think you're gonna get very far that way.",
  "Strange... doing nothing usually works...",
  "Whoa! What are the odds of that??",
  "What happened? I lost track of you.",
  "Did you really think that was going to work?",
  "You almost saved it. Almost.",
  "Wha-w... Why?.... Seriously?",
  "Those tutorials made it look so easy.",
  "What'd you think was gonna happen?",
  "This was a practice round.",
  "My brother was holding the keyboard.",
  "I'm actually blindfolded.",
  "I wasn't looking.",
  "Sorry, I was in the bathroom. What'd I mi- Where'd... Where is everyone?",
  "You snooze you lose!",
  "You missed!",
  "YOU LOSE",
  "YOU LOSE!",
  "How's your head, by the way?",
  "On second thought that might not have been such a good idea...",
  "Remind me to never shake your hand.",
  "...Just one more turn?",
  "Should've pressed that button.",
  "...Rolled a 1...",
  "I think you pressed the wrong button. That one goes that way.",
  "What exactly was your plan there?",
  "NullPointerException",
  "I... Wh... I just.. Whaat.",
  "Didn't your mother tell you to not get into vans with strangers?",
  "Did you really need all that?",
  "Bet you thought that was the right move.",
  "And now you're but a shadow of your former self.",
  "2fast4u",
  `Notice that hunger meter? Now you know exactly how much time you have before your terrible reflexes are revealed.`,
  "NOT EVEN CLOSE!",
  "Not even close, baby",
  "Eyes on the screen!",
  "The controls for this game are WASD!",
  "gg no re",
  "How curious.",
  "You were doing so well!",
  "Not again! You should know better!",
  "Psh. I could've made that.",
  "AND you forgot to signal. Sheesh!",
  "That's Karma for ya.",
  "What a stunning performance.",
  "Who do you think you are?",
  "Made by Minota!", 
  "Thank this one particular girl for this game actually being finished.",
  "Schalooob!",
  "Ah, just like old times.",
  "You should've just moved onto something else...",
  "That's gonna be an 'Ouch' from me, Dawg.",
  "It's not very effective...",
  "This game? For big boys only.",
  "Unfortunately, this game is for the sentient.",
  "Lost the game.",
  "Don't stop now!",
  "Hey! Are you alright? Answer me!",
  "Do not.",
  "Cease.",
  "This never would've happened if you did that.",
  "You bit the dust.",
  "STOP IT!!!!!!",
  "This! Is! Sparta!",
  "Plan of attack: Walk in a straight line and do nothing.",
  "Play the game.",
  "Well, at least you had good form.",
  "Kaboom, baby!",
  "Made with Kaboom baby!",
  "Jeez, calm down.",
  "You have to be frame perfect.",
  "I... uhh... think something went wrong.",
  "He will remember that.",
  "Thank you game, very cool!",
  "Off to a good start",
  "That's as much you can do?",
  "Sweet run, bro.",
  "Lag.",
  "Dread it. Run from it. The end arrives all the same.",
  "hehehe fruit go brrrrrrr",
  "First try!",
  "Never underestimate Mark.",
  "Outplayed.",
  "So Long-eh!",
  "That's a net loss for ya, bud.",
  "Normally this goes on for another 3 hours.",
  "★☆☆☆☆",
  "Butterfingers?",
  "bruh",
  "Rude.",
  "That kinda seemed like the opposite thing to do."
]

k.scene("GAMEOVER", () => {
  k.add([
    k.text("[red]GAME OVER![/red]", {
      size: 52,
      font: "sink",
      align: "center",
      styles: {
        "red": {
          color: k.RED
        }
      }
    }),
    k.pos(k.width() / 2, k.height() / 2 - 175),
    k.anchor("center")
  ])
  k.add([
    k.text(`[black]${k.choose(gameOverTexts)}[/black]`, {
      size: 24,
      font: "sink",
      align: "center",
      width: 800,
      styles: {
        "black": {
          color: k.BLACK
        }
      }
    }),
    k.pos(k.width() / 2, k.height() / 2 - 100),
    k.anchor("center")
  ])
  k.add([
    k.text(`[black]Fruits collected: ${fruits}[/black]`, {
      size: 18,
      font: "sink",
      align: "center",
      styles: {
        "black": {
          color: k.BLACK
        }
      }
    }),
    k.pos(k.width() / 2, k.height() / 2 - 25),
    k.anchor("center")
  ])
  k.add([
    k.text(`[black]Time survived: ${timer}s[/black]`, {
      size: 18,
      font: "sink",
      align: "center",
      styles: {
        "black": {
          color: k.BLACK
        }
      }
    }),
    k.pos(k.width() / 2, k.height() / 2),
    k.anchor("center")
  ])
  let score = (timer * 100) + (fruits * 50)
  let highScore: number = k.getData("highScore") || 0
  let hsText
  if (score > highScore) {
    k.setData('highScore', score)
    hsText = `[black]High Score: ${k.getData("highScore")}[/black] [green](NEW BEST!)[/green]`
  } else {
    hsText = `[black]High Score: ${k.getData("highScore")}[/black]`
  }
  k.add([
    k.text(`[black]Score: ${score}[/black]`, {
      size: 18,
      font: "sink",
      align: "center",
      styles: {
        "black": {
          color: k.BLACK
        }
      }
    }),
    k.pos(k.width() / 2, k.height() / 2 + 25),
    k.anchor("center")
  ])
  k.add([
    k.text(hsText, {
      size: 18,
      font: "sink",
      align: "center",
      styles: {
        "black": {
          color: k.BLACK
        },
        "green": {
          color: k.GREEN
        }
      }
    }),
    k.pos(k.width() / 2, k.height() / 2 + 50),
    k.anchor("center")
  ])
  let playAgain = k.add([
    k.text("[black]Play again?[/black]", {
      size: 48,
      font: "sink",
      align: "center",
      styles: {
        "black": {
          color: k.BLACK
        }
      }
    }),
    k.pos(k.width() / 2, k.height() / 2 + 125),
    k.anchor("center"),
    k.area(),
    k.scale()
  ])

  playAgain.onHover(() => {
    playAgain.scale = k.vec2(1.15)
  })
  playAgain.onHoverEnd(() => {
    playAgain.scale = k.vec2(1.0)
  })
  playAgain.onClick(() => {
    k.go("game")
  })
})

let fruits = 0
let timer = 0

k.scene("game", () => {
  let hp = 100
  fruits = 0
  timer = 0
  let loop = true
  
  const level = k.addLevel(
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
  
  const mark = level.add([
    k.pos(k.randi(64, 2146), k.randi(64, 1509)),
    k.sprite("mark"),
    k.tile({ isObstacle: false, edges: [] }),
    k.body({ isStatic: true, gravityScale: 0 }),
    k.area(),
    k.agent({ speed: 500, allowDiagonals: true }),
    "enemigo"
  ])
  
  const player = k.add([
    k.pos(1088, 768),
    k.sprite("bean"),
    k.area(),
    k.anchor("center"),
    k.body(),
    "player"
  ])
  
  // 0x0 - 2176x1536
  
  k.onCollide("enemigo", "fruit", (enemigo, fruit) => {
    fruit.destroy()
  })
  
  k.onCollide("enemigo", "player", (enemigo, player) => {
    stamina -= 1
    k.shake(1.5)
    k.play("hurt")
    let display
    if (stamina > 0) {
      display = Math.floor(((stamina / 10) * 100))
    } else {
      display = 0
    }
    sText.text = `[black]Sprint: ${display}%[/black]`
  })

  k.onCollide("player", "fruit", (player, fruit) => {
    if (player.worldPos().dist(fruit.worldPos()) < (64 * 4.5)) {
      fruits++
      k.play("eat")
      fText.text = `[black]${fruits}[/black]`
      hp += 1
      hText.text = `[black]${Math.floor(hp)}[/black]`
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
    k.sprite("meat"),
    k.pos(32, 28),
    k.scale(0.75)
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
    k.sprite("apple"),
    k.pos(32, 74),
    k.scale(0.75)
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
  
  let sText = ui.add([
    k.text("[black]Sprint: 100%[/black]", {
      font: "sink",
      size: 24,
      styles: {
        "black": {
          color: k.BLACK
        }
      }
    }),
    k.pos(34, 132),
    k.outline(2, k.Color.BLACK)
  ])
  
  let overlayRect = ui.add([
    k.rect(9000, 9000),
    k.opacity(0.85),
    k.pos(0,0),
    k.color(k.Color.BLACK)
  ])
  
  let overlayRect2 = ui.add([
    k.rect(9000, 9000), 
    k.opacity(0.85),
    k.pos(0,0),
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
    if (hp <= 0) {
      k.go("GAMEOVER")
      k.play("lose")
    }
    if (k.isFocused()) {
      overlayRect.hidden = true
      overlayText.hidden = true
    } else {
      if (loop == true) {
        overlayRect.hidden = false
        overlayText.hidden = false
      }
    }
  })
  
  k.onLoad(async () => {
    overlayRect2.hidden = true
    let objects = k.randi(10, 25)
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
  let stamina = 10
  
  let markActivationTime = 25
  
  
  k.onKeyDown("a", () => {
    let speed = SPEED
    if (k.isKeyDown("shift") && stamina > 0) speed *= 2
    player.move(-speed, 0)
  })
  
  k.onKeyDown("d", () => {
    let speed = SPEED
    if (k.isKeyDown("shift") && stamina > 0) speed *= 2
    player.move(speed, 0)
  })
  
  k.onKeyDown("w", () => {
    let speed = SPEED
    if (k.isKeyDown("shift") && stamina > 0) speed *= 2
    player.move(0, -speed)
  })
  
  k.onKeyDown("s", () => {
    let speed = SPEED
    if (k.isKeyDown("shift") && stamina > 0) speed *= 2
    player.move(0, speed)
  })
  
  let t1 = 0 // Fruit time
  let t12 = 1 
  
  let t2 = 0 // Stamina depleter
  let t22 = 0.25
  
  let t3 = 0 // Mark timer
  let t32 = 10.5
  let fruitsToSpawn = 1
  
  k.onUpdate(() => {
    if (!loop) return
    t3 += k.dt()
    if (t3 < t32) return
    t3 = 0
    if (timer < markActivationTime) return
    mark.setTarget(k.choose(k.get("fruit")).pos)
  })
  
  k.loop(1, () => {
    hp -= 2.5
    hText.text = `[black]${Math.floor(hp)}[/black]`
  })

  let span = 60

  k.loop(100, () => {
    if (span >= 5) span -= 5
  })

  k.loop(25, () => {
    if (t32 <= 0.25) {
      t32 -= 0.25
    }
  })

  k.loop(200, () => {
    fruitsToSpawn++
  })
  
  k.onUpdate(() => {
    if (!loop) return
    t2 += k.dt()
    if (t2 < t22) return
    t2 = 0
    if (k.isKeyDown("shift")) {
      if (stamina > -1) stamina -= 0.25 // Stamina drain's limit is at -1 to punish players for abusing the stamina mechanic, it takes 10 seconds to regenerate from -1 if you sprint too long
    } else {
      if (stamina < 10) stamina += 0.1
    }
  })
  
  k.onUpdate(() => {
    if (!loop) return
    k.camPos(player.pos)
    let display
    if (stamina > 0) {
      display = Math.floor(((stamina / 10) * 100))
    } else {
      display = 0
    }
    sText.text = `[black]Sprint: ${display}%[/black]`
    t1 += k.dt()
    if (t1 < t12) return
    t1 = 0
    timer++
    if (timer > markActivationTime) {
      t12 = 0.75
    }
    let sprites = ["apple", "grape", "mushroom", "pineapple", "watermelon"]
    for (let i = 0; i < fruitsToSpawn; i++) {
      k.add([
        k.sprite(k.choose(sprites)),
        k.area(),
        k.body({ isStatic: false, mass: 0.01 }),
        k.pos(k.randi(64, 2146), k.randi(64, 1509)),
        k.lifespan(span, { fade: 5.5 }),
        "fruit"
      ])
    }
  })
})

k.go("game")