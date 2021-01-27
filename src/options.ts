export interface YahooFinanceOptions {
  includePrePost: boolean
  interval: '1m' | '15m' | '30m' | '1d' | '1wk' | '1mo' | '1y' | string
  range:
    | '1h'
    | '1d'
    | '5d'
    | '1mo'
    | '3mo'
    | '6mo'
    | '1y'
    | '2y'
    | '5y'
    | '10y'
    | 'ytd'
    | 'max'
    | string
}
