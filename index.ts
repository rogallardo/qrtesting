import { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import QRCode from 'qrcode'

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> =>{
const evento = JSON.stringify(event)
console.log(evento)
 const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Hello World Rodrigo'
    })
 }
 return response
}

// const test1 = ()=>{
//     QRCode.toDataURL('Hola Fabian')
//     .then(url => {
//       console.log(url)
//     })
//     .catch(err => {
//       console.error(err)
//     })
// }
// test1()
const test2 = ()=>{
    QRCode.toFile('./qr/filename.png', 'Aqui ', {
        color: {
          dark: '#000000',  // puntos
          light: '#FFFFFF' // fondo
        }
      }, function (err) {
        if (err) throw err
        console.log('done')
      })
}
test2()