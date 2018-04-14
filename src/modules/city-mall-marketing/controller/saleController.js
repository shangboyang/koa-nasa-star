import SaleService from '../service/saleService'

class SaleController {

  static async queryProductDetails (ctx, next) {

    const {
      saleChannelID,
      sceneID,
      ...params
    } = ctx.request.body //post json 请求参数

    const userType = params.userType || ''
    const sex = params.sex || ''

    ctx.response.type = 'application/json'
    ctx.response.set({
  		'Access-Control-Allow-Headers' : 'accept, token, zoneCode',
  		'Access-Control-Expose-headers': 'accept, token, zoneCode'
  	})

    let respData = SaleService.getResponseData(saleChannelID, sceneID, userType, sex)

console.log('respData ::: == > ', respData);

    ctx.response.body = respData

  }
}

export default SaleController
