import app from './server'
import * as dotenv from 'dotenv'
dotenv.config()
import config from './config'

dotenv.config()

app.listen(config.port, () => {
  console.log(`Serving on http://localhost:${config.port}`)
})
