if (Posts.find().count() == 0) {
  Posts.insert({
    brand: 'TP-LINK',
    model: 'TL-WR2041N',
    version: '1',
    os: 'openwrt',
    url: 'http://www.tp-link.com.cn/product_275.html',
    proposer:'Viking',
    status: 'N'
  });

  Posts.insert({
    brand: 'TP-LINK',
    model: 'TL-WDR3310',
    version: '1',
    os: 'openwrt',
    url: 'http://www.tp-link.com.cn/product_249.html',
   	proposer:'Viking',
    status: 'N'
  });

  Posts.insert({
    brand: 'TP-LINK',
    model: 'TL-WDR4310',
    version: '1',
    os: 'openwrt',
    url: 'http://www.tp-link.com.cn/product_240.html',
   	proposer:'Viking',
    status: 'N'
  });
}