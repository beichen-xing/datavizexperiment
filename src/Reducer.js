export default (state = "", action) => {


  switch (action.type) {
    case "bar":
      return state + "pointAbar " + action.pointAbar + " pointBbar " + action.pointBbar + " valuebar " + action.value + "##"
    case "pie":
      return state + "pointApie " + action.pointApie + " pointBpie " + action.pointBpie + " valuepie " + action.value + "**"
    case "stack":
      return state + "pointAstack " + action.pointAstack + " pointBstack " + action.pointBstack + " valuestack " + action.value + "~~"
    default:
      return state;
  }
};
