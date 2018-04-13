import Router from 'koa-router'
import ArticleController from '../modules/article/controller/articleController'
import orderController from '../modules/order/controller/orderController'
import placeOrderController from '../modules/placeOrder/controller/placeOrderController'
import SaleController from '../modules/city-mall-marketing/controller/saleController'

const router = Router()
// default route
router.get('/', async (ctx, next) => {
  const title = 'Koa2 Sever'
  const content = '千万里阳光号'

  await ctx.render('res', {
    title,
    content,
    url: 'http://shangboyang.com',
    type: 'post',
    resData: {
      a: 1, b: 2
    },
    data: {
      c: 3, d: 4
    }
  })
})
//
router.post('/citymall/marketing/sale.node', SaleController.queryProductDetails) //

// 添加URL match controller
/**
 * 文章模块
 */

router.get('/article/query.node', ArticleController.getArticles) //
router.get('/static/node-proxy/article/query.node', ArticleController.getArticles) //
router.post('/static/node-proxy/article/query.node', ArticleController.getArticles)


/**
 * 订单模块
 */
router.post('/city/citymain/security/insurance/insOrder/query', orderController.getMockData)
router.post('/static/node-proxy/order/info.node', orderController.getOrderData)
router.post('/order/info.node', orderController.getOrderData)

/**
 * 保险投保模块-试算接口
 */
// router.post('/static/node-proxy/placeOrder/userInfo.node', placeOrderController.getUserInfoData)
router.post('/static/node-proxy/placeOrder/price.node', placeOrderController.getPriceData)
router.post('/placeOrder/price.node', placeOrderController.getPriceData)

export default router
