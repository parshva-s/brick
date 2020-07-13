export function collisiondetection(ball, gameObjects) {
  let BottomofBall = ball.position.y + ball.size;
  let TopofBall = ball.position.y;

  let TopofObject = gameObjects.position.y;
  let LeftSideObject = gameObjects.position.x;
  let RightSideObject = gameObjects.position.x + gameObjects.width;
  let BottomofObject = gameObjects.position.y + gameObjects.height;

  if (
    BottomofBall >= TopofObject &&
    TopofBall <= BottomofObject &&
    ball.position.x >= LeftSideObject &&
    ball.position.x <= RightSideObject
  ) {
    return true;
  } else {
    return false;
  }
}
