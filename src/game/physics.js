import Matter from 'matter-js';

const Physics = (entities, { touches, time, ...rest }) => {
    let engine = entities.physics.engine;
   Matter.Engine.update(engine, time.delta);
    // if (entities.timer.size < Constants.GAMETIME) {
    //   entities.timer.size = [entities.timer.size[0] + 1];
    // } else {
    //   rest.dispatch({ type: 'game-success' });
    // }
    return entities;
  };