import { getJoke } from "../../../helpers/db";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const joke = await getJoke(request.query.id);
      if (!joke) {
        response.status(404).json({
          message: `Joke ${request.query.id} was not found.`,
        });
      } else {
        response.status(200).json(joke);
      }
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