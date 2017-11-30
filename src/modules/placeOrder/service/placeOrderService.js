import columns from '../mock/columns'
import articles from '../mock/articles'
import { SUCCESS_1000, ERROR_2000, ERROR_2001 } from '../../../utils/status'

let timer = null;

class ArticleService {
  /**
   * 获取文章
   */
  static getArticles(data) {
    let articles
    switch (data.code) {
      case 200:
        let arts = []
        if (data.body && data.body.articles) {
          for (let i = 0; i < data.body.articles.length; i++) {
            // summary
            arts.push({
              title: data.body.articles[i].title
            })
          }
        }

        articles = {
          code  : SUCCESS_1000.code,
          result: SUCCESS_1000.result,
          msg   : SUCCESS_1000.msg,
          body  : arts,
        }
        break;
      default:
        articles = {
          code  : ERROR_2000.code,
          result: ERROR_2000.result,
          msg   : ERROR_2000.msg,
          body: [],
        }
    }

    return articles
  }

  static getTitles(data) {
    return data
  }

}

export default ArticleService
