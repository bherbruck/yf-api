export interface YahooFinanceResponse {
  chart: Chart
}

export interface Chart {
  result?: Result[] | null
  error?: null
}

export interface Result {
  meta: Meta
  timestamp?: number[] | null
  indicators: Indicators
}

export interface Meta {
  currency: string
  symbol: string
  exchangeName: string
  instrumentType: string
  firstTradeDate: number
  regularMarketTime: number
  gmtoffset: number
  timezone: string
  exchangeTimezoneName: string
  regularMarketPrice: number
  chartPreviousClose: number
  previousClose: number
  scale: number
  priceHint: number
  currentTradingPeriod: CurrentTradingPeriod
  tradingPeriods?:
    | (TradingPeriod[] | null)[]
    | null
  dataGranularity: string
  range: string
  validRanges?: string[] | null
}

export interface CurrentTradingPeriod {
  pre: TradingPeriod
  regular: TradingPeriod
  post: TradingPeriod
}

export interface TradingPeriod {
  timezone: string
  start: number
  end: number
  gmtoffset: number
}

export interface Indicators {
  quote?: Quote[] | null
}

export interface Quote {
  open?: (number | null)[] | null
  close?: (number | null)[] | null
  volume?: (number | null)[] | null
  high?: (number | null)[] | null
  low?: (number | null)[] | null
}
