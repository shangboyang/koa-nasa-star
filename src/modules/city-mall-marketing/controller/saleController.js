import SaleService from '../service/saleService'

class SaleController {

  static async queryProductDetails (ctx, next) {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  * ctx.request *
    // {
    //   method: 'GET',
    //   url: '/siapp-sms/open/articles/get.do?a=1&b=2',
    //   header: {
    //      host: 'localhost:7709',
    //      connection: 'keep-alive',
    //      cache-control: 'max-age=0',
    //      user-agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    //      upgrade-insecure-requests: '1',
    //      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    //      accept-encoding: 'gzip, deflate, br',
    //      accept-language: 'zh-CN,zh;q=0.8,en;q=0.6',
    //      cookie: 'bdshare_firstime=1478672648294; Hm_lvt_fc3d1b16f12d4cf3bd05fde0de4fed15=1478672611;
    //    }
    // }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    console.log('request json:::', ctx.request.body); //post json 请求参数

    const {
      saleChannelID,
      sceneID,
      ...params
    } = ctx.request.body

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
