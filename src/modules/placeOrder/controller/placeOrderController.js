import fetch from 'node-fetch'

class placeOrderController {

  static async getPriceData (ctx, next) {
    // console.log('ctx:::',ctx);
    // console.log('request header:::',ctx.header);
    // console.log('request json:::',ctx.request.body);
    // console.log('request form-data:::',ctx.request.body.fields);
    // console.log('request params:::',ctx.query);

    let fields = ctx.request.body.fields || ctx.request.body;

    const URL = 'https://test-mhis-siapp.pingan.com.cn/static/city/citymall/order/compute/insurance/price'

    const TYPE = 'POST'
    var resData = null,
        originData = null

    await fetch(URL, {
      method: TYPE,
    	body: JSON.stringify(fields),
    	headers: { 'Content-Type': 'application/json' }
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

export default placeOrderController
