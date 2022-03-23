const { Telnet } = require('telnet-client')
const connection = new Telnet()

// these parameters are just examples and most probably won't work for your use-case.
const params = {
  host: '127.0.0.1',
  port: 23,
  shellPrompt: '/ # ', // or negotiationMandatory: false
  timeout: 1500
}

connection.connect(params)
  .then(prompt => {
    connection.exec(cmd)
    .then(res => {
      console.log('promises result:', res)
    })
  }, error => {
    console.log('promises reject:', error)
  })
  .catch(error => {
    // handle the throw (timeout)
  })