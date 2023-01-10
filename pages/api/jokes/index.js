import { getAllJokes } from "../../../helpers/db";

export default async function handler(request, response) {
 
    
  console.log(request.method);
 

  switch (request.method) {
    case "GET": {
      const jokes = await getAllJokes();
      response.status(200).json(jokes);
      break;
    }
    default: {
      response
        .status(405)
        .setHeader("Allow", "GET")
        .json({
          message: `Request method ${request.method} is not allowed on ${request.url}`,
        });
    }
  }
}