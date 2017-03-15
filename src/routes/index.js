import Router from 'koa-router'
import articleCtrl from '../modules/article/controller/articleCtrl'

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
router.get('/cms/open/newArticles', articleCtrl)

export default router
