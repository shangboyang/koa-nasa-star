import Router from 'koa-router'
import ArticleController from '../modules/article/controller/articleController'

const ac = new ArticleController()

const router = Router()

router.get('/', async (ctx, next) => {
  const title = 'Koa2 Mock Sever'
  const content = '千万里阳光号'

  await ctx.render('index', {
    title,
    content
  })
})

// 添加URL match controller
router.get('/siapp-sms/open/articles/get.do', ac.getArticles)

router.post('/siapp-sms/open/articles/get.do', ac.getArticles)

export default router
