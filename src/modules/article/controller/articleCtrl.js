import {getColumns, getArticles} from '../service/articleService';

export default async (ctx, next) => {

  ctx.response.type = 'application/json';
  // 判断request参数
  switch (ctx.request.query.inforType) {
    case '0': // 获取标签
      ctx.response.body = getColumns(ctx);
      break;
    case '1': // 获取文章
      ctx.response.body = getArticles(ctx);
      break;
    case '2': // 搜索查询
      ctx.response.body = getArticles(ctx);
      break;
    default:
      return;
  }

}
