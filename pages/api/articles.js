

export default async function handler(request, response) {
    //serverless functions
    // response.status(200).send({ name: 'John Doe' })
    console.log(request.method);
    // console.log(localStorage); gibts nicht
  
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