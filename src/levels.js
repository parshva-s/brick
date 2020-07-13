import RedBricks from "/src/Redbrick.js";
import OrangeBricks from "/src/Orangebricks.js";
import YellowBricks from "/src/Yellowbricks.js";
import GreenBricks from "/src/Greenbricks.js";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 12 + 55 * brickIndex,
          y: 45 + 30 * rowIndex,
        };
        bricks.push(new RedBricks(game, position));
      }
      if (brick === 2) {
        let position = {
          x: 12 + 55 * brickIndex,
          y: 45 + 30 * rowIndex,
        };
        bricks.push(new OrangeBricks(game, position));
      }
      if (brick === 3) {
        let position = {
          x: 12 + 55 * brickIndex,
          y: 45 + 30 * rowIndex,
        };
        bricks.push(new YellowBricks(game, position));
      }
      if (brick === 4) {
        let position = {
          x: 12 + 55 * brickIndex,
          y: 45 + 30 * rowIndex,
        };
        bricks.push(new GreenBricks(game, position));
      }
    });
  });
  return bricks;
}

export const L1 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];

export const L2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];