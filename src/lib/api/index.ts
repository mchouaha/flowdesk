
import axios from "axios"
import { Ticker, Trade } from "../interfaces"

export const BINANCE_API = "https://testnet.binance.vision/api/v3"

export const getTickerPriceChangeStats = async (symbol: string): Promise<Ticker> => (await axios.get(`${BINANCE_API}/ticker/24hr?symbol=${symbol}`)).data

export const getRecentTrades = async (symbol: string): Promise<[Trade]> => (await axios.get(`${BINANCE_API}/trades?symbol=${symbol}&limit=10`)).data

export const getTicker = async (symbol: string): Promise<Ticker> => (await axios.get(`${BINANCE_API}/ticker?symbol=${symbol}`)).data

