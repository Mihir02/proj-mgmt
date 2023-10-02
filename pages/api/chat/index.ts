import { NextResponse } from "next/server";
import openai from "@/openAi";

export async function POST(request: Request) {

  try{

  const { todos } = await request.json();

  // communicate with openAi GPT
  console.log("Todos", todos);
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
    
      messages: [
        {
          role: "system",
          content:
            `When responding, welcome the user as Sir and say welcome to the Proj. Mgmt Tool!
             Limit the response to 200 characters`,
        },

        {
          role: "user",
          content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To Do, in progress, and done,
          then tell the user to have a productive day! Here is the data: ${JSON.stringify(
            todos
          )} `,
        },
      ],
    });


    console.log(response.choices);

    return NextResponse.json(response.choices[0]);
  }
  catch (error) {
    return NextResponse.error();
  }


}