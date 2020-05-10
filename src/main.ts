import { parseEvent } from '@modules/api-gateway/parse-event'
import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda'

type Body = { data: string }
type PathParams = 'userId'
type QueryParams = 'query'

export const handler = async (
  event: APIGatewayEvent,
  _: Context,
): Promise<APIGatewayProxyResult> => {
  const parsed = parseEvent<Body, PathParams, QueryParams>(event)

  console.log(parsed.body)
  console.log(parsed.pathParameters.userId)
  console.log(parsed.queryStringParameters.query)

  return {
    statusCode: 200,
    body: JSON.stringify({
      body: parsed.body,
      path: parsed.pathParameters,
      parsed: parsed.queryStringParameters,
    }),
  }
}
