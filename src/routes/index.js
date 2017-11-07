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
router.get('/siapp-sms/open/articles/query', ArticleController.getArticles) //
router.post('/siapp-sms/open/articles/query', ArticleController.getArticles)

export default router
