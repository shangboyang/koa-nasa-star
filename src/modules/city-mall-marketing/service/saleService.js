

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
