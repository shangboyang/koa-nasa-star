

const querySaleProductURL = () => {
  return 'http://xxxxxxxxxx'
}

const querySaleProductImgURL = () => {
  return 'http://xxx.jpg'
}


class SaleService {

  /**
  */
  // querySaleProductURL() {
  //   return 'http://xxxxxxxxxx'
  // }
  //
  // querySaleProductImgURL() {
  //   return 'http://xxx.jpg'
  // }

  static getResponseData(saleChannelID, sceneID, userType, sex) {

    let respData

    if (!saleChannelID) {

      respData = {
        code: 2001,
        data: {},
        msg: 'error: 请求参数缺少渠道ID'
      }

      return respData
    }

    if (!sceneID) {

      respData = {
        code: 2002,
        data: {},
        msg: 'error: 请求参数缺少场景ID'
      }

      return respData
    }

    respData = {
      code: 1000,
      data: {
        imgURL: querySaleProductImgURL(saleChannelID, sceneID, userType, sex),
        productURL: querySaleProductURL(saleChannelID, sceneID, userType, sex)
      },
      msg: 'success'
    }

    return respData
  }
}

export default SaleService
