const formatTodosForAi = (board: Board) => {
  const todos = Array.from(board.columns.entries());

  const flatArray = todos.reduce((map, [key, value]) => {
    map[key] = {
      count: value.todos.length,
      titles: value.todos.map(todo => todo.title), // Extract titles
    };
    return map;
  }, {} as { [key in TypedColumn]: { count: number; titles: string[] } });
  
  return flatArray;
};

export default formatTodosForAi;
