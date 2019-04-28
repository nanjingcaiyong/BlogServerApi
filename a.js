var ctx = {
  request:{
    body:{
      title:'s', author:'s', isRecommend:'s', view:'s', labels:'s', types:'s', content:'s', status:'s',gender:'男'
    }
  }
}
const {body, body:{title, author, isRecommend, view, labels, types, content, status }} = ctx.request;
console.log(body);