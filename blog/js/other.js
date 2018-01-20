new Vue({
  el: '#other',
  data: {
    news : [
        {
            name : '最新新闻',
            new_tab : '../new/new.html',
        },
        {
            name : '技术宅',
            new_tab : '../technology/technology.html',
        },
        {
            name : 'WEB前端',
            new_tab : '../web/web.html',
        },
        {
            name : '后端',
            new_tab : '../backend/back.html',
        },
        {
            name : '服务器',
            new_tab : '../server/server.html',
        },
        {
            name : '科技新闻',
            new_tab : '../science/science.html',
        },
        {
            name : '书山有路',
            new_tab : '../book/book.html',
        },
        {
            name : '其他',
            new_tab : '../other/other.html',
        }
    ],
    crumbs : [
        {
            name : '首页',
            new_tab : '../home/index.html',
        },
        {
            name : '书山有路',
            new_tab : '../book/book.html',
        },
    ],
    news_title : [
        {
            url : 'http://www.gushiwen.org/gushi/tangshi.aspx',
            title : '../../imgs/book.jpg',
            content_info : '浏览次数',
            content : '100',
            release_time : '发布时间',
            time: '2017.1.1',
            info : '唐诗三百首',
        },
          {
            url : 'http://www.zwbk.org/MyLemmaShow.aspx?lid=260048',
             title : '../../imgs/book.jpg',
            content_info : '浏览次数',
            content : '100',
            release_time : '发布时间',
            time: '2017.1.1',
             info : '大国崛起',
        }
    ]
  }
})