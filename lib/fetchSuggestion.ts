import formatTodosForAi from "./formatTodosForAi";
import openai from "@/openAi";



const fetchSuggestion = async (board: Board) => {
      const todos = formatTodosForAi(board);
      console.log("Formatted todos", todos);

      const prompt = `Given the following outlines:\n
      Start with (${todos.todo.count} tasks):\n${todos.todo.titles.join('\n')}\n\n
      in middle (${todos.inprogress.count} tasks):\n${todos.inprogress.titles.join('\n')}\n\n
      finish with (${todos.done.count} tasks):\n${todos.done.titles.join('\n')}\n\n
      Tell a story using the keywords.`;
  
      const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
      
        messages: [
          {
            role: "system",
            content:
              `When responding, welcome the user as Sir and say the story begins like this:
               Limit the response to 500 characters`,
          },
  
          {
            role: "user",
            content: prompt,
          },
        ],
      });
      console.log(res.choices[0]);
      const content = res.choices[0].message.content;
      return content;

  };

    export default fetchSuggestion;