# yf-api

## Usage

```typescript
import { getQuotes } from '../src'

getQuotes('msft', { interval: '1d', range: '3d' }).then((data) => {
  console.log(JSON.stringify(data, null, 2))
})
```

## Output

```json
[
  {
    "timestamp": 1611325800,
    "close": 225.9499969482422,
    "open": 227.0800018310547,
    "high": 230.07000732421875,
    "volume": 30172700,
    "low": 225.8000030517578
  },
  {
    "timestamp": 1611585000,
    "close": 229.52999877929688,
    "open": 229.1199951171875,
    "high": 229.77999877929688,
    "volume": 33152100,
    "low": 224.22000122070312
  },
  {
    "timestamp": 1611671400,
    "close": 232.3300018310547,
    "open": 231.86000061035156,
    "high": 234.17999267578125,
    "volume": 48699200,
    "low": 230.0800018310547
  }
]
```
