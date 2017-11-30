import Router from 'koa-router'
import ArticleController from '../modules/article/controller/articleController'
import orderController from '../modules/order/controller/orderController'
import placeOrderController from '../modules/placeOrder/controller/placeOrderController'

const router = Router()
// default route
router.get('/', async (ctx, next) => {
  const title = 'Koa2 Sever'
  const content = '千万里阳光号'

  await ctx.render('index', {
    title,
    content
  })
})

// 添加URL match controller
/**
 * 文章模块
 */
router.get('/static/node-proxy/article/query', ArticleController.getArticles) //
router.post('/static/node-proxy`/article/query', ArticleController.getArticles)

/**
 * 订单模块
 */
router.post('/city/citymain/security/insurance/insOrder/query', orderController.getMockData)
router.post('/siapp-node/open/order/info', orderController.getOrderData)

/**
 * 保险投保模块
 */
router.post('/siapp-node/open/placeOrder/price', placeOrderController.getPriceData)

export default router
