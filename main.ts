sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    Bounce()
})
function Bounce () {
    Ball.vx = 0 - Ball.vx
    Ball.vy = 0 - Ball.vy
}
let Ball: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(129, 11)
mySprite.setStayInScreen(true)
controller.player2.moveSprite(mySprite, 60, 0)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(21, 105)
mySprite2.setStayInScreen(true)
controller.player1.moveSprite(mySprite2, 60, 0)
Ball = sprites.createProjectileFromSide(img`
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    `, 50, 50)
Ball.setBounceOnWall(true)
pause(1000)
game.onUpdateInterval(100, function () {
    if (Ball.y < 10) {
        game.splash("Red wins!")
    }
    if (Ball.y > 110) {
        game.splash("Green wins!")
    }
})
