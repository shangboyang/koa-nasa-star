import columns from '../data/columns'
import articles from '../data/articles'

let timer = null;

/**
 * 获取标签
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
export function getColumns(ctx) {

  // codes...

  

  return columns
}

/**
 * 获取文章
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
export function getArticles(ctx) {
  
  timer = setTimeout(()=> {
  	clearTimeout(timer);
  }, 2000)

  
  return articles;
}
