// RSS源接口
// name: 信息源名称
// url: RSS URL地址
// category: 分类名称

/**
 * @typedef {object} RssSource
 * @property {string} name - 信息源名称
 * @property {string} url - RSS URL地址
 * @property {string} category - 分类名称
 */

// 默认配置
export const config = {
  sources: [
    {
      name: "cool paper",
      url: "https://papers.cool/arxiv/cs.CL/feed",
      category: "论文",
    },
    {
      name: "linux.do 羊毛",
      url: "https://r4l.deno.dev/https://linux.do/c/welfare/36.rss?period=daily&00f8347792a037b48dd79c144b497315",
      category: "羊毛",
    },
    {
      name: "LINUX DO 今日热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=daily&00f8347792a037b48dd79c144b497315",
      category: "论坛",
    },
    {
      name: "LINUX DO 近一周热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=weekly&00f8347792a037b48dd79c144b497315",
      category: "论坛",
    },
    {
      name: "LINUX DO 近一月热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=monthly&00f8347792a037b48dd79c144b497315",
      category: "论坛",
    },
    {
      name: "LINUX DO 每日精华神帖",
      url: "https://r4l.deno.dev/https://linux.do/tag/精华神帖.rss?period=daily&00f8347792a037b48dd79c144b497315",
      category: "论坛",
    },
    {
      name: "LINUX DO 每周精华神帖",
      url: "https://r4l.deno.dev/https://linux.do/tag/精华神帖.rss?period=weekly&00f8347792a037b48dd79c144b497315",
      category: "论坛",
    },
    {
      name: "知乎想法热榜",
      url: "https://rss.aishort.top/?type=zhihu",
      category: "论坛",
    },
    {
      name: "zaobaoNews",
      url: "https://plink.anyfeeder.com/zaobao/realtime/world",
      category: "zaobaoNews",
    },
    {
      name: "zhihu-daily",
      url: "https://rsshub.app/zhihu/daily",
      category: "zhihu-daily",
    },
    {
      name: "arxiv",
      url: "https://rss.arxiv.org/rss/cs.CL",
      category: "论文",
    },
    {
      name: "Hacker News 近期最佳",
      url: "https://hnrss.org/best",
      category: "科技资讯",
    },
    {
      name: "Hacker News 历史每日前十",
      url: "https://rsshub.rssforever.com/github/issue/headllines/hackernews-daily",
      category: "科技资讯",
    },
    {
      name: "Hugging Face 每日论文",
      url: "https://rsshub.rssforever.com/huggingface/daily-papers",
      category: "科研论文",
    },
    {
      name: "Hugging Face 博客",
      url: "https://rsshub.rssforever.com/huggingface/blog",
      category: "技术博客",
    },
    {
      name: "Google 开发者博客",
      url: "https://rsshub.rssforever.com/google/developers/en",
      category: "技术博客",
    },
    {
      name: "Google 研究博客",
      url: "https://rsshub.rssforever.com/google/research",
      category: "技术博客",
    },
    {
      name: "V2EX 今日热门",
      url: "https://rsshub.rssforever.com/v2ex/topics/hot",
      category: "论坛",
    },
    {
      name: "Bangumi 近一月热门",
      url: "https://rsshub.rssforever.com/bangumi.tv/anime/followrank",
      category: "番剧资讯",
    },
  ],
  maxItemsPerFeed: 30,
  dataPath: "./data",
}

export const defaultSource = config.sources[0]

/**
 * @param {string} url
 * @returns {RssSource | undefined}
 */
export function findSourceByUrl(url) {
  return config.sources.find((source) => source.url === url)
}

export function getSourcesByCategory() {
  return config.sources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = []
    }
    acc[source.category].push(source)
    return acc
  }, {})
}
