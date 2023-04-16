import * as React from 'react'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import styled from 'styled-components'

interface SelectProps {
  onSelect: Function
  value?: string
}

const BasicSelect: React.FunctionComponent<SelectProps> = ({onSelect, value}) => {
  
  const handleChange = (event: SelectChangeEvent) => {
    onSelect(event.target.value as string)
  };

  return (
      <FormControl sx={{ m: 1, minWidth: 120, width: 'fit-content', display:'flex', alignSelf: 'center' }} size="small" >
        <CustomInputLabel id="currency-pair-select-label">Pair</CustomInputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="currency-pair-select"
          value={value}
          label="pair"
          onChange={handleChange}
          style={{color: '#fff'}}
        >
          <MenuItem value={'BNBUSDT'}>BNBUSDT</MenuItem>
          <MenuItem value={'LTCBTC'}>LTCBTC</MenuItem>
          <MenuItem value={'BTCUSDT'}>BTCUSDT</MenuItem>
          <MenuItem value={'BNBBTC'}>BNBBTC</MenuItem>
        </Select>
      </FormControl>
  );
}

export default BasicSelect

const CustomInputLabel = styled(InputLabel)(() => ({
  "&#currency-pair-select-label": {
    color: '#fff'
  }
}));