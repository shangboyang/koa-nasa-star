import orderMockData from '../mock/orderMockData'
import fetch from 'node-fetch'
var FormData = require('form-data');

class orderController {
  static async getMockData (ctx, next) {

    ctx.response.body = orderMockData // Node middle service Response
  }

  static async getOrderData (ctx, next) {
    // console.log('ctx:::',ctx);
    // console.log('request header:::',ctx.header);
    // console.log('request json:::',ctx.request.body);
    // console.log('request form-data:::',ctx.request.body.fields);
    // console.log('request params:::',ctx.query);

    let fields = ctx.request.body.fields || ctx.request.body;
    var formData = new FormData();

     for(var name in fields) {
       formData.append(name, fields[name]);
     }

    const URL = 'https://test1-city.pingan.com.cn/city/citymain/security/insurance/insOrder/query'

    const TYPE = 'POST'
    var resData = null,
        originData = null


    await fetch(URL, {
      method: TYPE,
    	body: formData,
    })
    .then(res => {
      let resJ = res.json()

      if (res.ok) {
        return resJ
      }
    })
    .then((data) => {
      if (data) {
        originData = data
      } else {
        resData = []
      }
    })
    .catch((e) => {
      console.log('error:', e);
    })


   ctx.response.type = 'application/json'
   ctx.response.set({
 		'Access-Control-Allow-Headers' : 'accept, token, zoneCode',
 		'Access-Control-Expose-headers': 'accept, token, zoneCode'
 	})
   ctx.response.body = originData // Node middle service Response

  }

}

export default orderController
