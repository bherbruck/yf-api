import axios from 'axios'
import { YahooFinanceOptions } from './options'
import { YahooFinanceResponse } from './response'
import { Quote } from './quote'

const API_URL = 'https://query1.finance.yahoo.com/v8/finance/chart/'
const apiClient = axios.create({ baseURL: API_URL })

export async function getQuotes(
  symbol: string,
  options?: Partial<YahooFinanceOptions>
): Promise<Quote[]> {
  const opts = Object.assign(
    {
      includePrePost: true,
      interval: '1m',
      range: '1d',
    },
    options
  )
  const response: YahooFinanceResponse = await (
    await apiClient.get(symbol, { params: opts })
  ).data
  const data = parseResponse(response)
  return data
}

function parseResponse(response: YahooFinanceResponse): Quote[] {
  const timestamps = response.chart.result[0].timestamp
  const allQuotes = response.chart.result[0].indicators.quote[0]
  const quotes: Quote[] = timestamps.map((timestamp, index) => {
    const quote = { timestamp: timestamp }
    for (const [quoteType, prices] of Object.entries(allQuotes)) {
      quote[quoteType] = prices[index]
    }
    return quote
  })
  return quotes
}
