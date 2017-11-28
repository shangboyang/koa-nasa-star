import Router from 'koa-router'
import ArticleController from '../modules/article/controller/articleController'

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

export default router
