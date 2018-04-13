

const querySaleProductURL = () => {
  return 'http://xxxxxxxxxx'
}

const querySaleProductImgURL = () => {
  return 'http://xxx.jpg'
}


class SaleService {

  /**
    要带入销售渠道等参数进行返回
  */
  // querySaleProductURL() {
  //   return 'http://xxxxxxxxxx'
  // }
  //
  // querySaleProductImgURL() {
  //   return 'http://xxx.jpg'
  // }

  static getResponseData() {
    return {
      code: 1000,
      data: {
        imgURL: querySaleProductImgURL(),
        productURL: querySaleProductURL()
      },
      msg: 'success'
    }
  }
}

export default SaleService
