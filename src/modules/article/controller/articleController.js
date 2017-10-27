import {getColumns, getArticles} from '../service/articleService';

class ArticleController {
  async getArticles (ctx) {
      console.log('request', ctx.request.type);
      console.log('get params', JSON.stringify(ctx.request.query));
      console.log('post params', ctx.request.body);

      ctx.response.type = 'application/json';

      console.log(`${ctx.request.type} what is the fuxk`);
    	ctx.response.set({
    		'Access-Control-Allow-Headers': 'accept, token, zoneCode',
    		'Access-Control-Expose-headers': 'accept, token, zoneCode'
    	});
      let params = ctx.request.query
      let o = async () => {
        for (let i = 0; i < 100; i++) {
          console.log(i);
        }
      }
      o()
      console.log('finish~~~~~');
      console.log('finish loop~~~~~');
      if (+params.pageNo > 3) {
        ctx.response.body = {}
      } else {
        ctx.response.body = getArticles(ctx);
      }
  }
}

export default ArticleController
