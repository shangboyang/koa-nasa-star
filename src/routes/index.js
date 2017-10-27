import Router from 'koa-router'
import ArticleController from '../modules/article/controller/articleCtrl'

const ac = new ArticleController()
console.log('aaaaa async::::', a.getArticles);

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
router.get('/siapp-sms/open/getArticles.do', ac.getArticles)

router.post('/siapp-sms/open/getArticles.do', ac.getArticles)

export default router
