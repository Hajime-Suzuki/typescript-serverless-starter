import { GatewayEvent } from '@modules/types'
import { APIGatewayProxyResult, Context } from 'aws-lambda'
import { logger } from '@modules/module'

export const handler = async (
  event: GatewayEvent<{}>,
  _: Context
): Promise<APIGatewayProxyResult> => {
  logger.info('main.handler')
  return {
    statusCode: 200,
    body: JSON.stringify({ event })
  }
}
