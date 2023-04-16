import React, { FunctionComponent, useEffect } from 'react'

import BasicSelect from '../components/Inputs/Select'

import { getTicker } from '../lib/api'
import { getRecentTrades } from '../lib/api'
import { getTickerPriceChangeStats } from '../lib/api'
import DataTable from '../components/Table'
import { Ticker, Trade } from '../lib/interfaces'
import BasicTabs from '../components/Navigation/Tabs'
import styled from 'styled-components'

import logo from '../assets/Binance-Logo.svg'

const App: FunctionComponent = () => {

  const [dataTable, setDataTable] = React.useState<[Ticker] | [Trade]>()

  const [symbol, setSymbol] = React.useState<string>('')

  const [marketTab, setMarketTab] = React.useState<number>(0)

  useEffect(()=> {
      if (symbol){
        switch(marketTab) {
          case 0:
            getRecentTrades(symbol).then((data) => setDataTable(data))
            break
          case 1:
            getTicker(symbol).then((data: Ticker) => setDataTable([data]))
            break
          case 2:
            getTickerPriceChangeStats(symbol).then((data) => setDataTable([data]))
            break
        }
      } 
  }, [symbol, marketTab])

  return (
    <AppContainer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BasicSelect onSelect={setSymbol} value={symbol}/>  
      </header>

      <BasicTabs index={marketTab} value={marketTab} setValue={setMarketTab}>
        { dataTable &&  <DataTable data={dataTable}/>}
      </BasicTabs>

    </AppContainer>
  );
}

export default App

const AppContainer = styled.div`
  .App {
    text-align: center;
  }

  .App-logo {
    height: 10vmin;
    pointer-events: none;
  }

  .App-header {
    background-color: #282c34;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`