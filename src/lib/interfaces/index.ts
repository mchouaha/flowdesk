export interface Ticker {
    symbol: string,
    priceChange: string,
    priceChangePercent: string,
    weightedAvgPrice: string,
    openPrice: string,
    highPrice: string,
    lowPrice: string,
    lastPrice: string,
    volume: string,
    quoteVolume: string,
    openTime: number,
    closeTime: number,
    firstId: number,
    lastId: number,
    count: number
}

export interface Trade {
    id: number,
    price: string,
    qty: string,
    quoteQty: string,
    time: number,
    isBuyerMaker: boolean,
    isBestMatch: boolean
}