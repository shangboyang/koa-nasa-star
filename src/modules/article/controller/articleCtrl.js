import {getColumns, getArticles} from '../service/articleService';

export default async (ctx, next) => {


  console.log('request', ctx.request.type);
  console.log('get params', JSON.stringify(ctx.request.query));
  console.log('post params', ctx.request.body);

  ctx.response.type = 'application/json';
	ctx.response.set({
		'Access-Control-Allow-Headers': 'accept, token, zoneCode',
		'Access-Control-Expose-headers': 'accept, token, zoneCode'
	});
  let params = ctx.request.query
  
  if (+params.pageNo > 3) {
    ctx.response.body = {}
  } else {
    ctx.response.body = getArticles(ctx);
  }

}
