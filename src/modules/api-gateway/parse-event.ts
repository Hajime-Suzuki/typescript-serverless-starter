import { APIGatewayEvent } from 'aws-lambda'
import { ParsedGatewayEvent } from '@modules/types'

export const parseEvent = <
  TBody extends Record<string, any> | null,
  TParamsKey extends string | null = null,
  TQueryParams extends string | null = null
>(
  event: APIGatewayEvent,
): ParsedGatewayEvent<TBody, TParamsKey, TQueryParams> => {
  const parsed: TBody = event.body ? JSON.parse(event.body) : null

  const { body: _, ...rest } = event // eslint-disable-line @typescript-eslint/no-unused-vars

  return {
    ...rest,
    body: parsed,
  } as ParsedGatewayEvent<TBody, TParamsKey, TQueryParams>
}
