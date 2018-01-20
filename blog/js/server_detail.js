new Vue({
  el: '#server_detail',
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
            name : '服务器',
            new_tab : '../server/server.html',
        },
       {
            name : '服务器技术详情',
            new_tab : '../server/server_detail.html',
        }
    ],
    detail : [
        {
            title : '服务器技术',
            release_time : '发布时间',
            time: '2017.1.1',
            tail : [
                {
                    img : '../../imgs/fwq.jpg',
                    info : '从性能角度来看，处理器、内存和I/O这三个子系统在服务器中是最重要的，它们也是最容易出现性能瓶颈的地方。目前市场上主流的服务器大多使用英特尔Nehalem、Westmere微内核架构的三个家族处理器：Nehalem-EP，Nehalem-EX和Westmere-EP。下表总结了这些处理器的主要特性：',
                 }
            ],
            
        }
    ]
  }
})