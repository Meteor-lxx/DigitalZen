/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Article } from "./types";
import heroImage from "../assets/photo-1551288049-bebda4e38f71.avif";
import heroImage1 from "../assets/photo-1460925895917-afdab827c52f.avif";
import heroImage2 from "../assets/photo-1504868584819-f8e8b4b6d7e3.avif";
import heroImage3 from "../assets/photo-1517404215738-15263e9f9178.avif";
import heroImage4 from "../assets/photo-1522071820081-009f0129c71c.avif";
import heroImage5 from "../assets/photo-1531403009284-440f080d1e12.avif";
import heroImage6 from "../assets/photo-1544716278-ca5e3f4abd8c.avif";
import heroImage7 from "../assets/photo-1516979187457-637abb4f9353.avif";
import heroImage8 from "../assets/photo-1506880018603-83d5b814b5a6.avif";
import heroImage9 from "../assets/photo-1618005182384-a83a8bd57fbe.avif";
import heroImage10 from "../assets/photo-1512941937669-90a1b58e7e9c.avif";
import heroImage11 from "../assets/photo-1531297484001-80022131f5a1.avif";

export const PERSONAL_INFO = {
  name: "Meteor",
  avatar: "https://api.l-xx.cn/images/me.png",
  title: "Creative Developer & System Architect",
  subTitle: "以设计之禅，铸性能之美。专注于极简美学设计与极致前端性能调优。",
  bio: "我是 Meteor，一名拥有 10 年研发经验的全栈开发工程师。在产品交互、微服务、性能调优（特别是微信小程序、APP）领域有深厚积累。我相信「Digital Zen」—— 代码的极简、执行的流畅与视觉的纯净三位一体，方能交付让用户指尖愉悦的产品。",
  location: "中国 · 贵州 / 贵阳",
  email: "liuxin.yx@qq.com",
  phone: "+86 188-8888-8888",
  github: "https://github.com/Meteor-lxx",
  skills: [
    { name: "React / Vue", level: 95, category: "Core Tech" },
    { name: "WeChat Mini-program (小程序)", level: 98, category: "Core Tech" },
    { name: "TypeScript / Node.js", level: 90, category: "Core Tech" },
    { name: "Golang", level: 98, category: "Develop" },
    { name: "Php", level: 98, category: "Develop" },
    { name: "Echarts / WebGL", level: 85, category: "Develop" },
    { name: "Doker / K8s", level: 98, category: "Develop" }
  ],
  experience: [
    {
      period: "2024 - 至今",
      company: "Digital Zen 创想工作室",
      role: "全栈工程师 / UX 负责人",
      desc: "主导多款大型企业级分析系统与出海 SaaS 平台的前端重构，通过冷启动调优、虚拟列表、API预提取等极致技术手段使多端首屏加载时间降低达 70% 以上。"
    },
    {
      period: "2023 - 2026",
      company: "贵州云佩科技有限公司",
      role: "研发工程师 & 项目负责人",
      desc: "负责云佩科技旗下云配小站、云配商家、云配司机等项目的研发工作，主导了云佩科技旗下云配小站、云配商家、云配司机等项目的研发工作，通过监控告警、故障演练、性能优化等手段，确保系统稳定运行。"
    },
    {
      period: "2019 - 2023",
      company: "上海达龙信息科技有限公司",
      role: "云平台架构师",
      desc: "负责日活百万级多终端系统的性能攻坚工作。主导系统稳定性与高可用性建设，通过监控告警、故障演练、性能优化等手段，确保系统稳定运行。"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "digital-zen-analytics",
    title: "Digital Zen 数据分析系统",
    subtitle: "面向中小企业的全链路、零代码数据可视化与行为流分析平台",
    tag: "React / Web",
    tags: ["React 19", "Tailwind CSS", "TypeScript", "D3.js", "Recharts", "Node.js", "Vite"],
    techStack: ["React 19", "Tailwind CSS", "TypeScript", "D3.js", "Recharts", "Node.js", "Vite"],
    heroImage: heroImage,
    client: "Digital Zen Inc.",
    role: "系统架构师 & UX 交互设计师",
    duration: "3 个月",
    overview: "Digital Zen 数据分析系统是为敏捷出海团队与数字化零售企业打造的下一代分析平台。它通过自研的数据捕获 SDK 与极简的可视化画布，让业务团队在不依赖研发的情况下完成埋点、热力图绘制、群组分析等复杂操作。该系统致力于通过极致的加载表现与严苛的交互细节，呈现“数据如水，静水深流”的设计禅意。",
    challenge: "原版监控面板存在大规模图表渲染阻塞（10k+ DOM nodes）、高频 WebSocket 数据推挤带来的界面卡顿、以及在弱网环境下的首屏启动缓慢等重大技术痛点，导致平均跳出率高达 18.4%。",
    solution: "1. 引入 React 19 Concurrent Mode 配合虚拟列表（Windowing），将超大图表容器的内存常驻减少 75%。\n2. 使用 D3 纯 Canvas 底层构建高性能多维度趋势图与轨迹分析模块。\n3. 部署自适应离线缓存与 API 乐观更新策略，支持无感离线查阅与表单保存。",
    results: [
      "📊 首屏加载时间从 4.2s 缩短至 0.9s (Speedup 78%)",
      "🔥 单页面高密度渲染 10,000+ 点数据无卡顿，流畅度维持在 58+ FPS",
      "📈 线上用户跳出率从 18.4% 降至 2.1%，获得客户一致赞誉",
      "💡 完美兼容移动端响应式，手势拖拽缩放灵敏度提升 150%"
    ],
    screenshots: [
      heroImage1,
      heroImage2,
    ]
  },
  {
    id: "zhixing-mini",
    title: "智行 Mini 交通出行小程序",
    subtitle: "百万级日活的一站式智慧城市交通调度与实时路线规划小程序",
    tag: "小程序",
    tags: ["微信小程序 SDK", "原生 JavaScript", "Tailwind CSS", "Map SDK", "CSS3 Animation"],
    techStack: ["微信小程序 SDK", "原生 JavaScript", "Tailwind CSS", "Map SDK", "CSS3 Animation"],
    heroImage: heroImage3,
    client: "新一线城市交通运输局",
    role: "小程序架构师 & 核心开发",
    duration: "5 个月",
    overview: "智行 Mini 是为新一线城市定制的智慧交通出行方案。集合了公交、地铁、共享单车和网约车实时调度功能。为满足在公交站牌、地铁闸机等临时扫码场景下的极速响应需求，小程序从零开始进行了极致的代码压缩、首屏优化与高德地图二次渲染定制。",
    challenge: "在扫码开锁或快速查车等场景下，用户对小程序加载时长极其敏感。旧版本由于历史债务严重，包体积达 8.4MB，弱网下启动长达 3.2s，伴有明显的组件闪烁与二次定位卡顿，严重阻碍用户出行体验。",
    solution: "1. 重构小程序目录，实施精细化主包与分包加载方案（Subpackaging），将主包包体积极限缩减至 840KB。\n2. 移除所有冗余 JS-driven 动画，全面改用基于 CSS Transitions 并在 GPU 触发下的高性能流畅动效。\n3. 独立封装 Canvas 二维码生成和地图标记聚合，对 setData 进行多级合并降频。",
    results: [
      "⚡ 核心冷启动时长从原先的 3.2s 缩减至 0.8s，实现了「扫码即开」的极致体验",
      "📦 小程序评测工具跑分从 72 分跃升至 98 分，荣登同类出行小程序前 1%",
      "📱 扫码开锁流失率降低 65%，累计服务超 200 万市民绿色出行"
    ],
    screenshots: [
      heroImage4,
      heroImage5,
    ]
  },
  {
    id: "moxiangge-community",
    title: "墨香阁 2.0 东方美学社区",
    subtitle: "基于 React 19 & SSR 架构的国风书法交流与高清字帖赏析社区",
    tag: "React / Web",
    tags: ["React 19", "Tailwind CSS", "SVG Canvas", "IntersectionObserver", "Vite"],
    techStack: ["React 19", "Tailwind CSS", "SVG Canvas", "IntersectionObserver", "Vite"],
    heroImage: heroImage6,
    client: "墨香阁国学沙龙",
    role: "设计师 & 开发",
    duration: "4 个月",
    overview: "墨香阁是一个垂直于传统书画与艺术设计的交流平台。该项目在前端层面融合了大量高精度的字帖 SVG 放大镜渲染技术与流畅的网格瀑流展示，旨在为艺术家与传统文化爱好者提供一个像素级清晰、纯净且无干扰的国学空间。",
    challenge: "高清字帖扫描件（单张 30MB+）的动态加载与任意手势下的缩放模糊问题，以及跨平台多终端设备下墨竹国画风视觉效果的统一呈现。",
    solution: "1. 基于 SVG 瓦片地图加载思路，实现高分辨率拓本的多级异步裁切加载（Tile Loading）。\n2. 结合 CSS Mix Blend Mode 和自定义 Canvas 偏色滤镜，完美实现“纸黄变古、墨黑晕染”的东方古韵视觉效果。\n3. 构建无缝无限滚动瀑布流，利用 IntersectionObserver 实施严格的离屏 DOM 回收。",
    results: [
      "🎨 4K级高清碑帖实现秒级加载，任意手势缩放维持纤毫毕现的清晰度",
      "🍵 东方古典极简交互斩获年度 UI 设计创新大奖",
      "🚀 网站综合访问速度（LCP）平均提速 180%，社区日活跃帖攀升 120%"
    ],
    screenshots: [
      heroImage7,
      heroImage8,
    ]
  },
  {
    id: "yunxiang-explorer",
    title: "云享极简云端文件管理器",
    subtitle: "灵动、安全的沉浸式多端云盘管理器交互界面设计与前端重构",
    tag: "Design / UI",
    tags: ["React", "Tailwind CSS", "HTML5 Drag & Drop", "Motion Animation", "TypeScript"],
    techStack: ["React", "Tailwind CSS", "HTML5 Drag & Drop", "Motion Animation", "TypeScript"],
    heroImage: heroImage9,
    client: "云享网络科技",
    role: "后端架构师 & 核心开发",
    duration: "2.5 个月",
    overview: "云享云盘是一款注重数据可视化管理与灵动卡片交互的云端私有存储管理工具。在设计上，大量使用了类似 Apple 的毛玻璃材质、流畅的弹性动画与基于拖拽手势的文件批量归档交互，让枯燥的文件管理成为一种愉悦的指尖微操体验。",
    challenge: "在大批量的文件上传与复杂的拖动层级（多级文件夹穿透拖入）交互下，极易产生 DOM 渲染震荡（Reflow/Repaint）以及操作丢失的问题。",
    solution: "1. 设计高精度的 Drag-and-Drop 物理阻尼与路径吸附动效。\n2. 结合 React Ref 与状态缓存切片，绕过高频 state 更新，直接进行物理帧运算后一并提交。\n3. 精巧设计带有层级深度反馈的动态卡片视觉。",
    results: [
      "✨ 文件拖入、分类、归档动效响应延迟控制在 16ms 以内，无任何肉眼卡顿",
      "📁 完美支持单次 10,000+ 文件树的大规模无刷新极速加载与检索",
      "💯 Dribbble 设计趋势榜单前十，在 GitHub 获得 2.4k+ stars"
    ],
    screenshots: [
      heroImage10,
      heroImage11,
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: "go-payment-center-gozero-refactor",
    title: "Go 微服务实战：从 Swoft 到 Go-Zero 的高并发支付中心重构",
    subtitle: "支付路由、幂等、对账与渠道动态切换的工程化落地",
    category: "Backend",
    date: "2020-04-16",
    readTime: "12 分钟",
    views: 3821,
    summary: "支付中心承载公司所有应用的支付、退款、提现、预扣款，早期基于 Swoft/Swoole，随着业务增长出现内存泄漏、worker 重启绑定丢失等问题。本文记录如何使用 Go + Go-Zero + gRPC + RabbitMQ + Redis 重构支付路由、幂等、对账和渠道动态切换能力。",
    contentMarkdown: `## 🏷️ 背景

支付中心是公司所有应用的资金入口，需要支持微信、支付宝、Stripe、Paypal、Google 等多渠道支付，以及支付、退款、提现、预扣款等操作。旧系统基于 Swoft，开发效率高，但在长时间运行、高并发和长连接场景下，内存泄漏和 worker 重启后的绑定关系丢失成为痛点。

## 🛠️ 架构设计

重构后的支付中心分为三层：

1. **API 网关层**：Kong + Lua，负责鉴权、限流、路由。
2. **支付服务层**：Go-Zero 微服务，负责支付单、渠道路由、回调处理。
3. **异步任务层**：RabbitMQ + Redis 延迟队列，处理超时关单、对账、重试。

核心表设计遵循“最少可用原则”，支付单、渠道流水、退款单分离，避免字段冗余。

## ⚡ 关键实现：渠道动态切换

\`\`\`go
type PayChannel struct {
    Name    string
    Enabled bool
    Weight  int
}
func SelectChannel(channels []PayChannel) (PayChannel, error) {
    var total int
    for _, ch := range channels {
        if ch.Enabled {
            total += ch.Weight
        }
    }
    if total == 0 {
        return PayChannel{}, errors.New("no available channel")
    }
    n := rand.Intn(total)
    for _, ch := range channels {
        if !ch.Enabled {
            continue
        }
        if n < ch.Weight {
            return ch, nil
        }
        n -= ch.Weight
    }
    return channels[0], nil
}
\`\`\`

## 🔐 幂等与对账

支付回调必须幂等。我们使用 **out_trade_no + channel** 作为唯一键，Redis 分布式锁 + MySQL 唯一索引双保险。对账任务每天凌晨跑批，对比渠道流水和本地流水，差异自动告警。

## 🚀 性能优化

- 使用 gRPC 替代部分 HTTP 内部调用，降低延迟。
- MySQL 分表：按商户 ID 哈希分 16 表。
- Redis 连接池 + 本地缓存，减少热点 Key 压力。
- K8s HPA 根据 QPS 自动伸缩。

## 📊 总结

从 Swoft 到 Go-Zero，不只是语言切换，更是服务治理、内存控制和部署方式的升级。Go 在支付中心这种高并发、高稳定场景下，表现非常适合。`
},
  {
    id: "go-websocket-cluster-architecture",
    title: "Go 实现 WebSocket 集群：从 2K 到 1.6W 实时连接的架构演进",
    subtitle: "goroutine、Redis 发布订阅、K8s 自动伸缩与冷热数据分离",
    category: "Backend",
    date: "2021-05-22",
    readTime: "14 分钟",
    views: 4173,
    summary: "业务需要排队、到期通知、余额不足、好友在线、聊天、群聊等双向通信能力。第一版使用 Swoft2，遇到内存泄漏和 worker 重启绑定丢失问题；第二版用 Go 重构，配合 K8s、Redis 发布订阅和每日分表，支撑高峰 1.6W+ 实时连接。",
    contentMarkdown: `## 🏷️ 背景

长连接场景对内存、连接管理和消息可靠性要求很高。Swoft2 版本在长时间运行后出现内存上涨，worker 重启会导致连接绑定关系丢失，用户需要重新连接。

## 🛠️ 架构设计

第二版架构：

- **接入层**：Go WebSocket 服务，使用 gorilla/websocket。
- **路由层**：K8s Service + Ingress，4 个副本起步，根据连接数自动伸缩。
- **消息层**：Redis 发布订阅 + RabbitMQ，跨节点广播。
- **存储层**：MongoDB 存离线消息，MySQL 存关系数据，Redis 存在线状态。
- **分表策略**：按天分表，3 个月前数据转冷存储。

## ⚡ 关键实现：连接管理

\`\`\`go
type Client struct {
    ID   string
    Conn *websocket.Conn
    Send chan []byte
}
type Hub struct {
    clients    map[string]*Client
    register   chan *Client
    unregister chan *Client
    broadcast  chan []byte
}
func (h *Hub) Run() {
    for {
        select {
        case c := <-h.register:
            h.clients[c.ID] = c
        case c := <-h.unregister:
            if _, ok := h.clients[c.ID]; ok {
                delete(h.clients, c.ID)
                close(c.Send)
            }
        case msg := <-h.broadcast:
            for _, c := range h.clients {
                select {
                case c.Send <- msg:
                default:
                    close(c.Send)
                    delete(h.clients, c.ID)
                }
            }
        }
    }
}
\`\`\`

## 🌐 跨节点广播

单机 Hub 只能广播本节点连接。我们用 Redis 发布订阅：

\`\`\`go
func (h *Hub) SubscribeRedis() {
    pubsub := redisClient.Subscribe(ctx, "ws:broadcast")
    ch := pubsub.Channel()
    for msg := range ch {
        h.broadcast <- []byte(msg.Payload)
    }
}
\`\`\`

## 🚀 优化点

- 心跳检测：30 秒 ping/pong，超时断开。
- 写超时：每个连接独立写协程，避免阻塞。
- 内存控制：限制单连接发送缓冲区，超过阈值断开。
- 冷热分离：3 个月前消息归档，减少 MySQL 压力。

## 📊 总结

Go 的 goroutine 和 channel 非常适合长连接场景。配合 K8s 自动伸缩和 Redis 发布订阅，可以较低成本支撑万级实时连接。`
  },
  {
    id: "go-crawler-automation-overseas-traffic",
    title: "Go 爬虫与自动化：海外私域引流系统的工程化设计",
    subtitle: "并发调度、养号策略、反爬与 Python 数据清洗协作",
    category: "Backend",
    date: "2025-07-11",
    readTime: "11 分钟",
    views: 2784,
    summary: "海外私域引流需要自动化注册、养号、爬数据、分析筛选、加好友、拉群、私聊、发广告。我们用 Go 做爬虫和自动化，Python 做数据清洗，Docker + 自建 VPN 解决环境隔离。",
    contentMarkdown: `## 🏷️ 背景

自然流量需要大量自动化操作，人工成本高且容易封号。系统需要模拟真实用户行为，同时处理验证码识别、OCR、地理定位筛选等。

## 🛠️ 技术栈

- **Go**：爬虫、自动化任务、并发调度。
- **Python**：数据清洗、AI 对话。
- **Docker**：每个账号独立容器环境。
- **自建 VPN**：不同账号不同 IP。
- **OCR**：头像识别性别、年龄。
- **AI 机器人**：自动应答、筛选意向客户。

## ⚡ 关键实现：并发任务调度

\`\`\`go
type Task struct {
    AccountID string
    Action    string
    Payload   map[string]string
}
func WorkerPool(tasks <-chan Task, workers int) {
    var wg sync.WaitGroup
    for i := 0; i < workers; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for task := range tasks {
                if err := execute(task); err != nil {
                    log.Printf("task failed: %v", err)
                }
            }
        }()
    }
    wg.Wait()
}
\`\`\`

## 🛡️ 反爬与养号策略

- 随机 User-Agent、浏览器指纹。
- 操作间隔随机化，模拟人工。
- 每日任务量限制，避免异常。
- 账号分组，A/B 测试养号策略。

## 🧹 数据清洗

Go 爬取原始数据后，写入 Kafka，Python 消费并清洗，再写回 MySQL。清洗规则包括：去重、格式化、地理位置解析、意图标签。

## 📊 总结

Go 的高并发和低内存占用非常适合爬虫与自动化。关键不是“爬得快”，而是“像真人”。工程化设计要围绕稳定性、可观测性和可恢复性。`
  },
  {
    id: "go-rag-qdrant-ai-customer-service",
    title: "Go + RAG + Qdrant：AI 智能客服的检索增强生成实践",
    subtitle: "文档切片、向量检索、Prompt 工程与意向客户筛选",
    category: "AI",
    date: "2026-02-21",
    readTime: "13 分钟",
    views: 3326,
    summary: "传统客服机器人基于关键词匹配，回答生硬。我们使用 RAG + Qdrant 向量数据库 + 文档切片 + Prompt 工程，在 Go 后端搭建 AI 智能客服，实现用户咨询自动应答和意向客户筛选。",
    contentMarkdown: `## 🏷️ 背景

海外私域引流中，用户咨询量大，人工回复慢。大模型直接回答容易幻觉，需要基于知识库检索增强。

## 🔁 RAG 流程

1. **文档切片**：将产品文档、FAQ、话术切分成 300-500 字片段。
2. **向量化**：调用 Embedding 模型生成向量。
3. **存储**：写入 Qdrant 向量数据库。
4. **检索**：用户问题向量化，Top-K 相似片段。
5. **生成**：将片段 + 问题 + Prompt 发给大模型。
6. **后处理**：过滤敏感词，格式化输出。

## ⚡ Go 调用 Qdrant 示例

\`\`\`go
type QdrantClient struct {
    BaseURL string
    APIKey  string
    HTTP    *http.Client
}
func (c *QdrantClient) Search(ctx context.Context, collection string, vector []float32, limit int) ([]SearchResult, error) {
    body := map[string]interface{}{
        "vector": vector,
        "limit":  limit,
        "with_payload": true,
    }
    data, _ := json.Marshal(body)
    req, _ := http.NewRequestWithContext(ctx, "POST",
        fmt.Sprintf("%s/collections/%s/points/search", c.BaseURL, collection),
        bytes.NewReader(data))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("api-key", c.APIKey)

    resp, err := c.HTTP.Do(req)
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()

    var result []SearchResult
    if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
        return nil, err
    }
    return result, nil
}
\`\`\`

## 🧠 Prompt 设计

\`\`\`text
你是一个海外私域客服助手。请根据以下知识库片段回答用户问题。
如果知识库没有相关信息，请回答“我需要进一步确认”。
知识库：
{{context}}
用户问题：
{{question}}
\`\`\`

## 🎯 意向客户筛选

AI 对话过程中，提取用户意图标签：价格、功能、试用、合作。高意向用户自动推送给销售，低意向用户继续机器人跟进。

## 📊 总结

Go 适合做 RAG 的后端编排：并发调用向量检索、大模型 API、业务数据库。Qdrant 轻量、性能好，适合中小规模知识库。关键是切片策略和 Prompt 质量，而不是盲目堆模型。`
  },
  {
    id: "wechat-performance-opt",
    title: "微信小程序性能优化：从 3s 到 0.8s 的优化之旅",
    subtitle: "分包架构、setData调优、首屏异步编排与骨架屏的深度落地实践",
    category: "性能调优",
    date: "2024-05-18",
    readTime: "12 分钟",
    views: 4829,
    summary: "详细记录如何通过分包加载、setData 合并降低重绘、离线数据预抓取、图片懒加载、骨架屏无感骨架等综合技术手段，将一款高吞吐日活电商小程序的首屏白屏时间从 3s 直接压缩到 0.8s 内，给出了核心代码方案与生产指标变化对比。",
    contentMarkdown: `## 🏷️ 背景与性能挑战

在移动互联网深水区，小程序的「即开即用」特性是其最大优势。然而，随着业务逻辑的膨胀，我们的一款电商小程序冷启动耗时一路攀升至 **3.12 秒**。

通过监测工具发现，**冷启动 3s** 期间，用户流失率（Bounce Rate）高达 **18.4%**。为此，我们启动了名为「0.8s 极速启动」的专项性能攻坚。本文将毫无保留地分享我们的优化路径。

---

## 🛠️ 小程序渲染机制简析

在进入优化前，必须明确微信小程序的底层架构：

\`\`\`
+-------------------------------------------------------+
|                       视图层 (Webview)                |
|  [Page 1 WXML]  [Page 2 WXML]  [Component CSS] ...   |
+-------------------------------------------------------+
                           |  |
                 JSBridge (setData通信)
                           |  |
+-------------------------------------------------------+
|                    逻辑层 (AppService JS)              |
|   [onLaunch]     [onShow]     [Page JS]     [App JS]  |
+-------------------------------------------------------+
\`\`\`

- **双线程架构**：视图层（View）和逻辑层（AppService）双线程运行。
- **性能瓶颈**：逻辑层到视图层的数据交互，极其依赖 \`setData\`。高频、大数据量的 \`setData\` 会导致严重的 JSBridge 通信阻塞与视图卡顿。

---

## 🚀 核心优化策略与落地

### 1. 📦 包体积极致拆分（分包与独立分包）

小程序冷启动的首个耗时大户是 **代码包下载**。

- **主包瘦身**：我们将非核心组件（退款售后、会员中心、积分兑换）剥离，主包体积从 **1.94MB 骤降至 780KB**。
- **引入分包预下载 (Subpackage Pre-download)**：在配置中声明分包预下载规则，当用户进入主包首页时，利用闲置带宽静默拉取二级页面的分包代码。

\`\`\`json
{
  "pages": [
    "pages/index/index",
    "pages/search/search"
  ],
  "subpackages": [
    {
      "root": "packageDetail/",
      "pages": [
        "pages/detail/detail"
      ]
    }
  ],
  "preloadRule": {
    "pages/index/index": {
      "network": "all",
      "packages": ["packageDetail"]
    }
  }
}
\`\`\`

---

### 2. ⚡ 精简与合并 setData（突破 JSBridge 瓶颈）

这是解决「首屏闪动」与「手势响应延迟」的关键。

- **杜绝高频 setData**：将多处连续的更新归并为单次调用。
- **剔除与视图无关的数据**：凡是不参与 WXML 渲染的临时变量（如定时器 ID、当前页数、临时埋点状态），不要放到 \`data\` 属性中，而是直接挂在 \`this\` 上。

#### ❌ 负面教材：
\`\`\`javascript
// 频繁、细碎的更新，导致视图层反复渲染与通信卡顿
this.setData({ isLoading: true });
this.setData({ list: res.list });
this.setData({ page: this.data.page + 1 });
\`\`\`

#### ✅ 优雅实践：
\`\`\`javascript
// 1. 合并更新
this.setData({
  isLoading: false,
  list: [...this.data.list, ...res.list]
});
// 2. 纯逻辑属性，挂载在 this 上，绕过 setData
this.currentPage = this.currentPage + 1;
\`\`\`

---

### 3. 🌐 API 异步编排与离线预抓取 (BackgroundFetch)

在冷启动中，获取主接口数据的网络延迟（RTT）也是影响渲染的大头。

- **开启 backgroundFetch**：在微信后台配置，在小程序冷启动前，由微信客户端预先向我们的服务器请求首页核心 API。当小程序 JS 初始化完毕，直接调用 \`wx.getBackgroundFetchData\`，**零等待**拿到数据！
- **多接口异步并发 (Promise.all)**：

\`\`\`javascript
// 核心 API 异步编排
Page({
  onLoad() {
    this.fetchDataWithCache();
  },
  
  async fetchDataWithCache() {
    // 优先读取本地静态缓存，秒开渲染，然后再请求最新数据乐观替换
    const localCache = wx.getStorageSync('index_data');
    if (localCache) {
      this.setData({ list: localCache, isSkeleton: false });
    }
    
    try {
      const [banner, goods] = await Promise.all([
        getBanners(),
        getGoodsList()
      ]);
      
      this.setData({
        banners: banner,
        list: goods,
        isSkeleton: false
      });
      // 存储最新缓存
      wx.setStorage({ key: 'index_data', data: goods });
    } catch(err) {
      console.error("Fetch Data failed", err);
    }
  }
});
\`\`\`

---

### 4. 🎨 无感骨架屏 (Skeleton Screen) 与图片懒加载

传统的 \`Loading\` 加载菊花图会让用户主观感觉漫长，而高度贴合真实界面的**骨架屏**能够极大地平抚焦虑感。

- **自动化骨架屏生成**：使用微信开发者工具一键生成 WXML 骨架结构，并自定义过渡动画。
- **图片懒加载**：启用 \`lazy-load\` 属性，结合 CDN 高速 WebP 处理，将图片下载开销压缩至极限。

\`\`\`html
<!-- 骨架屏组件配合条件渲染 -->
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{isSkeleton}}" />

<view class="main-content" wx:else>
  <image 
    wx:for="{{list}}" 
    wx:key="id"
    src="{{item.webpUrl}}" 
    lazy-load="true"
    mode="aspectFill"
  />
</view>
\`\`\`

---

## 📊 优化成果对比

历时三周的代码净化与底层解耦，在对全国多个节点和主流机型（iOS / Android / 弱网 3G）的跟踪测试下，我们取得了如下进展：

| 性能评测指标 | 优化前 (3.0s 版本) | 优化后 (0.8s 版本) | 改善幅度 |
| :--- | :--- | :--- | :--- |
| **冷启动首屏时间 (LCP)** | 3.12 秒 | **0.82 秒** | **-73.7%** |
| **主包包体积** | 1.94 MB | **780 KB** | **-59.8%** |
| **平均 CPU 占用率** | 42.1% | **18.3%** | **-56.5%** |
| **FPS 稳定度** | 41 FPS | **59 FPS** | **+43.9%** |
| **3s内用户流失率** | 18.4% | **1.9%** | **极佳性能释放** |

---

## 🔮 总结：禅意开发

极速性能不仅是一组冷冰冰的技术指标，更是**人文关怀**。每一个 100ms 的提升，都在守护用户的耐心和时间。

作为开发者，我们应坚持极致精神，用更纯粹、更精巧的代码架构，在移动端打造如春风拂面、止水静深的「Digital Zen」用户体验。`
  },
  {
    id: "react-19-concurrent",
    title: "React 19 核心特性与架构模式探索",
    subtitle: "全新 Action API、Server Components、use() Hook 与性能调优实践",
    category: "Frontend",
    date: "2024-04-12",
    readTime: "8 分钟",
    views: 2931,
    summary: "针对 React 19 的全新特性进行全方位拆解，包括服务端组件(Server Components)在非服务端架构下的混合应用、Actions 状态自动维护、以及全新的 use(Promise) 懒加载模式。",
    contentMarkdown: `## 🏷️ React 19 时代的到来

React 19 带来了近年来最彻底的「开发心智模型」进化。其核心目标是消除样板代码、精简异步状态管理，并将首屏性能推向极限。

本文将通过真实的代码，带大家逐一解析在 React 19 下如何写出高效率、低延时的前端代码。

---

## 🛠️ 1. 从状态地狱中解脱：Actions

在 React 19 之前，处理异步提交表单或 API 请求时，你必须手动维护 \`isPending\`、\`error\` 状态：

\`\`\`javascript
// React 19 之前
function UpdateButton() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setIsPending(true);
    try {
      await updateData();
    } catch (e) {
      setError(e);
    } finally {
      setIsPending(false);
    }
  };

  return <button disabled={isPending} onClick={handleClick}>更新</button>;
}
\`\`\`

### 🚀 React 19 优雅解法：
在 React 19 中，你可以直接传递一个异步函数给事件，或者使用 \`useTransition\`，React 会自动跟踪并向你透传 pending 状态：

\`\`\`javascript
// React 19 自动并发跟踪
import { useTransition } from 'react';

function UpdateButton() {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await updateData();
    });
  };

  return <button disabled={isPending} onClick={handleClick}>
    {isPending ? "正在加载..." : "极速更新"}
  </button>;
}
\`\`\`

---

## 🌀 2. 划时代的 use() API

React 19 引入了 \`use()\` 这一灵活、颠覆性的函数。它可以在**条件分支**和**循环**中直接消费 Promise 或者是 Context！

\`\`\`javascript
import { use, Suspense } from 'react';

// 传入 Promise
function WeatherCard({ weatherPromise }) {
  const weather = use(weatherPromise); // 自动解包 Promise
  return <p>杭州当前温度: {weather.temp}°C</p>;
}

// 容器层
export default function WeatherSection() {
  const promise = fetchWeather(); // 返回一个 Promise
  return (
    <Suspense fallback={<div>加载天气中...</div>}>
      <WeatherCard weatherPromise={promise} />
    </Suspense>
  );
}
\`\`\`

这种设计避免了在组件初始化时，使用繁琐的 \`useEffect\` 触发数据获取，大幅降低了无用重绘的频率。

---

## 📊 3. 性能调优指标总结

通过合理利用 React 19 的内置 Actions、并发模式与 D3 虚拟渲染，我们的前端响应效率获得了质的提升：
- 避免了 \`useEffect\` 级联触发（Waterfall）引起的 120ms - 300ms 额外渲染开销。
- 组件内部不需要声明庞大的冗余 State，使核心库的内存占用率平均降低了 **22%**。`
  },
  {
    id: "minimalist-ui-zen",
    title: "基于 CSS Variables 的动态主题与视觉设计禅",
    subtitle: "在大厂推崇的极简 UI 规范下，探索光影、留白与交互弹性之美",
    category: "Thoughts",
    date: "2024-03-05",
    readTime: "6 分钟",
    views: 1842,
    summary: "探寻如何用最少的 CSS 实现暗黑/明亮、冷/暖、科技/人文主题的优雅过渡，并在个人作品中落地实践，探讨极简主义设计背后的哲学思辨。",
    contentMarkdown: `## 🏮 设计之禅：极简与克制

真正的设计，不是往画面里增加多少炫目的元素，而是敢于留白，让真正重要的「内容」和「功能」自己呼吸。

在这篇随笔中，我想聊聊如何在现代 Web 开发中，通过巧妙地控制 CSS Variables 与光影对比，营造一种「静能安神，动能生慧」的极简主义界面。

---

## 🛠️ 1. CSS 变量主题调色盘

在我的个人项目 \`Digital Zen\` 中，我使用了极其克制的色彩构成：
- **背景背景色**：使用极低饱和度的微灰冷色（如 \`#f8fafc\`），而非刺眼的纯白；
- **字形层级**：高饱和的深灰炭黑（如 \`#0f172a\`）负责标题，次级字用 \`#475569\`，让眼睛自然过滤信息优先级。

\`\`\`css
/* index.css 中优雅的主题色声明 */
@theme {
  --color-zen-bg-light: #fbfbfd;
  --color-zen-bg-dark: #090a0f;
  --color-zen-text-primary: #121319;
  --color-zen-text-secondary: #565d6c;
  --color-zen-accent: #3b82f6;
}
\`\`\`

---

## 🍃 2. 留白（Negative Space）的艺术

许多工程师在编写组件时，习惯使用极紧凑的 padding（如 \`p-2\`、\`p-3\`）。这在数据密集型表格中是高效的，但在注重体验的门户或个人产品中，会产生无形的压迫感。

推荐在组件四周留出更宽阔的负空间（\`p-8\` 甚至 \`p-12\`）。宽广的留白能赋予用户视觉缓冲区，使其更加专注并享受探索过程。`
  }
];
