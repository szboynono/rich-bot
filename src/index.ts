import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.text({ type: '*/*' })); // Parse raw text

app.get('/health', (req, res) => {
  res.status(200).send('OK')
})

app.post('/webhook', async (req, res) => {
  console.log('Webhook received:', req.body)
  // const { symbol, action, price, signal } = req.body
  

  // if (signal === 'UT Bot Buy' || signal === 'UT Bot Sell') {
  //   const side = action.toLowerCase() === 'buy' ? 'buy' : 'sell'
  //   console.log('[UT Bot] Signal received:', signal)
  //   console.log(`[UT Bot] ${signal} triggered on ${symbol} at ${price}`)
  // }

  res.status(200).send('Received')
})

app.listen(port, () => {
  console.log(`🚀 Webhook server running on http://localhost:${port}`)
})