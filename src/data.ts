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
import heroImage12 from "../assets/photo-1506880018603-83d5b814b5a6.avif";
import heroImage13 from "../assets/photo-1618005182384-a83a8bd57fbe.avif";
import heroImage14 from "../assets/photo-1512941937669-90a1b58e7e9c.avif";
import heroImage15 from "../assets/photo-1531297484001-80022131f5a1.avif";
import heroImage16 from "../assets/photo-1618005182384-a83a8bd57fbe.avif";
import heroImage17 from "../assets/photo-1512941937669-90a1b58e7e9c.avif";
import heroImage18 from "../assets/photo-1531297484001-80022131f5a1.avif";

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
    id: "dalong-microservices",
    title: "达龙微服务架构改造",
    subtitle: "承载 4 亿用户注册、300 万日活的高并发微服务重构",
    tag: "Go / 微服务",
    tags: ["Swoft", "Swoole", "gRPC", "RPC", "K8s", "Docker", "MySQL", "Redis", "RabbitMQ", "Apollo"],
    techStack: ["Swoft", "Swoole", "gRPC", "RPC", "K8s", "Docker", "MySQL", "Redis", "RabbitMQ", "Apollo"],
    heroImage: heroImage1,
    client: "上海达龙信息科技有限公司",
    role: "架构师 & 核心开发",
    duration: "2019.05 - 2020.04",
    overview:
      "项目改造是为了承接旧系统的流量以及数据存储问题。旧系统用户注册数 3 千万，日活 80 万，数据库到达瓶颈。通过数据库重新设计带动业务重构，选择微服务架构，目标承载 4 亿用户注册，300 万日活。项目分为用户中心、消费订单中心、充值订单中心、公共配置中心、用户行为中心、资源调度中心以及监控报警中心。",
    challenge:
      "旧系统数据库瓶颈，高并发下服务稳定性差，业务迭代困难。需要在不影响现有用户的情况下完成架构迁移，并支撑未来数亿级用户规模。",
    solution: `1. 采用 Swoole 扩展框架 Swoft 构建微服务，API 网关 + 各服务 RPC，服务内部通讯采用 TCP 连接池（RPC、MySQL、Redis、MQ 连接池）。
2. 网关层采用熔断、降级、限流消峰等技术。
3. 核心公共组件使用私有 Composer 管理，Git 进行框架迭代，Apollo 配置管理，Docker-compose 编排本地开发。
4. 部署使用 K8s + Docker 自动化部署。`,
    results: [
      "🚀 架构改造后可承载 4 亿用户注册、300 万日活",
      "📈 旧系统数据库瓶颈得到解决，业务迭代效率大幅提升",
      "🔧 微服务拆分出用户、订单、充值、配置、行为、调度、监控等中心",
      "☁️ 实现 K8s + Docker 自动化部署与弹性伸缩"
    ],
    screenshots: [heroImage2, heroImage3]
  },
  {
    id: "dsom-middle-platform",
    title: "DSOM 中台服务",
    subtitle: "支付、鉴权、通讯、监控、配置下发一体化中台",
    tag: "Go / 中台",
    tags: ["Swoft", "Go", "gRPC", "K8s", "Docker", "Kong+Lua", "Jenkins", "MySQL集群", "Redis集群", "RabbitMQ集群", "MongoDB", "Vue"],
    techStack: ["Swoft", "Go", "gRPC", "K8s", "Docker", "Kong+Lua", "Jenkins", "MySQL集群", "Redis集群", "RabbitMQ集群", "MongoDB", "Vue"],
    heroImage: heroImage4,
    client: "上海达龙信息科技有限公司",
    role: "开发、架构、运维",
    duration: "2020.04 - 2022.12",
    overview:
      "中台服务由我开发的有：支付中心、中台统一管理 openhome、中台统一鉴权 auc、通讯服务（Golang）、服务质量监控（Golang）、配置下发中心（Golang）、中台统一管理后台。项目基于 K8s 搭建，旨在为各业务提供稳定、高并发的共享服务。",
    challenge:
      "各业务线重复建设支付、鉴权、通讯等能力，资源浪费且稳定性参差不齐。需要抽象出共性能力，支撑业务快速迭代，同时保证高并发、高稳定。",
    solution: `1. 基于 K8s 搭建中台服务，使用 Swoft 连接池、熔断、降级、TCP 客户端、HTTP 服务端、RPC、gRPC、AOP、反射、协程、分布式事务、服务注册发现。
2. 使用 Kong+Lua、Jenkins、Docker、Docker-compose 进行网关与 CI/CD。
3. Go 实现 TCP/HTTP/WebSocket/gRPC 服务端。
4. Vue 开发后台管理界面。
5. MySQL 集群、Redis 集群、RabbitMQ 集群、MongoDB。`,
    results: [
      "📡 质量监控服务支撑 1.5 万台机器同时建立 TCP 连接并实时写入日志",
      "💳 支付中心承载公司所有应用的支付、退款、提现、预扣款等操作",
      "🔐 中台 openhome 统一管理所有服务接入规则与商户权限",
      "🔌 WebSocket 集群低峰 2K+、高峰 1.6W+ 实时连接"
    ],
    screenshots: [heroImage5, heroImage6]
  },
  {
    id: "payment-center",
    title: "支付中心",
    subtitle: "面向多商户、多渠道的动态支付路由与资金安全系统",
    tag: "Go / 支付",
    tags: ["Swoft", "Swoole", "RSA", "连接池", "熔断", "降级", "AOP", "RPC", "延迟队列", "微信支付", "支付宝", "Stripe", "Paypal", "Google支付"],
    techStack: ["Swoft", "Swoole", "RSA", "连接池", "熔断", "降级", "AOP", "RPC", "延迟队列", "微信支付", "支付宝", "Stripe", "Paypal", "Google支付"],
    heroImage: heroImage7,
    client: "上海达龙信息科技有限公司",
    role: "开发、架构、运维",
    duration: "2019.08 - 2022.12",
    overview:
      "由于旧系统支付会出现商家参数错误或系统问题造成玩家不能充值，故做了一个支付中心能够动态切换支付应用。接入微信和支付宝 H5 支付、APP 支付、扫码支付、预扣款支付、Stripe 支付、Paypal 支付、Google 支付。支付中心面向商户，目前提供内部掌上网咖、达龙云电脑、达龙社区、茄子云、游戏发行、开发者平台、JoyArk、netboom 等应用支付。",
    challenge:
      "多渠道支付参数复杂，商户配置错误导致充值失败；需要统一支付入口，支持动态切换渠道，保证资金安全与高可用。",
    solution: `1. 使用 Swoft 框架开发，采用 RSA 加解密、连接池、熔断、降级、AOP、RPC、延迟队列等技术。
2. 设计支付路由层，支持按商户、渠道、权重动态选择支付应用。
3. 统一封装微信、支付宝、Stripe、Paypal、Google 等支付渠道。
4. 实现支付、退款、提现、预扣款等完整资金操作。`,
    results: [
      "💳 统一承载公司所有应用的支付、退款、提现、预扣款",
      "🔀 支持支付应用动态切换，降低商户配置错误导致的充值失败",
      "🌍 接入微信、支付宝、Stripe、Paypal、Google 等全球主流支付渠道",
      "🛡️ 通过 RSA 加解密、熔断降级、延迟队列保障资金安全与最终一致性"
    ],
    screenshots: [heroImage8, heroImage9]
  },
  {
    id: "wss-communication-service",
    title: "WSS 通讯服务",
    subtitle: "从 Swoft 到 Go 重构的万级长连接双向通信集群",
    tag: "Go / WebSocket",
    tags: ["Swoft2", "Go", "WebSocket", "K8s", "MongoDB", "MySQL", "Redis", "发布订阅", "AOP", "RPC", "TCP", "协程", "延迟队列"],
    techStack: ["Swoft2", "Go", "WebSocket", "K8s", "MongoDB", "MySQL", "Redis", "发布订阅", "AOP", "RPC", "TCP", "协程", "延迟队列"],
    heroImage: heroImage10,
    client: "上海达龙信息科技有限公司",
    role: "开发、架构、运维",
    duration: "2019.05 - 2022.12",
    overview:
      "在业务里面会使用到双向通信，比如排队、到期通知、余额不足通知、好友在线、好友聊天、群聊等双向通信的场景。开发中使用到连接池、熔断、降级、MongoDB、MySQL、Redis 发布订阅、AOP、RPC、TCP 客户端、协程、延迟队列等技术。一版本使用 Swoft2 版本开发，因框架组件存在内存泄漏原因设置 worker 重启也会导致框架绑定关系丢失等问题，后使用 Go 开发二版本，切换 Go 开发后内存得以控制。",
    challenge:
      "Swoft2 版本存在内存泄漏，worker 重启导致连接绑定关系丢失，用户需要重新连接；每日数据量庞大，需要高效存储与冷热分离。",
    solution: `1. 使用 Go 重构通讯服务，控制内存，提升稳定性。
2. 使用 K8s 部署服务，初始 4 个副本集，根据流量自动伸缩。
3. 每日分表存储数据，3 个月之前的数据冷热分离。
4. 使用 Redis 发布订阅实现跨节点消息广播。`,
    results: [
      "📡 每日低峰 2K+ 实时连接，高峰 1.6W+ 实时连接",
      "🧠 Go 重构后内存得到有效控制，worker 重启不再丢失绑定关系",
      "📦 K8s 自动伸缩 + 每日分表 + 冷热分离，支撑海量消息存储",
      "💬 支撑排队、到期通知、余额不足、好友在线、聊天、群聊等双向通信"
    ],
    screenshots: [heroImage11, heroImage12]
  },
  {
    id: "automation-system",
    title: "海外私域自动化引流系统",
    subtitle: "注册、养号、爬虫、AI 客服与批量广告投放一体化",
    tag: "Go / 自动化",
    tags: ["Golang", "Python", "Docker", "自建VPN", "自动化爬虫", "AI机器人", "OCR", "数据清洗", "RAG", "Qdrant"],
    techStack: ["Golang", "Python", "Docker", "自建VPN", "自动化爬虫", "AI机器人", "OCR", "数据清洗", "RAG", "Qdrant"],
    heroImage: heroImage13,
    client: "贵州云佩科技有限公司",
    role: "研发、维护",
    duration: "2024.01 - 2026.05",
    overview:
      "项目涉及到大量自动化功能，包含注册、登陆、验证码识别、数据爬取、分析筛选数据、用户日常养号策略、批量发送广告、封装大模型对话能力，实现用户咨询自动应答、快速筛选有意图的客户。数据分析用到头像 OCR 识别性别年龄；介绍或者定位筛选地理位置；使用 AI 机器人聊天引导流量。项目使用 Docker + 自建 VPN + Golang 自动化爬虫 + AI 机器人 + Python 数据清洗。",
    challenge:
      "海外平台反爬严格，账号容易封禁；需要模拟真实用户行为，同时处理验证码、OCR、地理定位、AI 对话等复杂任务。",
    solution: `1. 使用 Docker 为每个账号提供独立环境，自建 VPN 分配不同 IP。
2. Golang 编写高并发自动化爬虫与任务调度。
3. Python 进行数据清洗、格式化、地理位置解析、意图标签。
4. 封装大模型对话能力，结合 RAG、Qdrant 向量数据库实现 AI 智能客服。
5. 随机化操作间隔、User-Agent、浏览器指纹，实施养号策略。`,
    results: [
      "🤖 开发了一套商业化自然引流软件，依靠软件服务赚取服务费",
      "📈 实现注册、养号、爬数据、分析筛选、加好友、拉群私聊、发送广告全自动化",
      "💬 AI 机器人自动应答，快速筛选高意向客户",
      "🌍 支持 Facebook、TikTok、Ins 等多平台海外私域引流"
    ],
    screenshots: [heroImage14, heroImage15]
  },
  {
    id: "wanqian-cloud-mall",
    title: "万千云商 APP",
    subtitle: "停车业务导流、多线下商家入驻的微服务电商平台",
    tag: "Go / 电商",
    tags: ["Kong", "Gin", "Gorm", "Protobuf", "gRPC", "Redis", "MySQL", "RabbitMQ", "Linux", "微服务"],
    techStack: ["Kong", "Gin", "Gorm", "Protobuf", "gRPC", "Redis", "MySQL", "RabbitMQ", "Linux", "微服务"],
    heroImage: heroImage16,
    client: "贵州车秘科技有限公司",
    role: "负责人",
    duration: "2023.01 - 2023.03",
    overview:
      "万千云商是一款由停车业务导流、多个线下商家入驻的一款电商类 APP。项目研发是以微服务的方式开发的，分为 5 个服务：基础、用户、订单、商品、供应链。采用的技术：Kong + Gin + Gorm + Protobuf + gRPC + Redis + MySQL + RabbitMQ + Linux。",
    challenge:
      "需要快速搭建电商平台，支撑停车业务导流和多商家入驻，保证订单、商品、供应链数据一致性。",
    solution: `1. 负责订单、商品服务功能开发，供应链与第三方接口实时交互（数据同步）。
2. 接入支付宝、微信支付，手机充值业务接入。
3. 设计数据库表，遵循最少可用原则避免字段冗余，创建合适索引，优化查询。
4. 负责上线部署、运维。`,
    results: [
      "🛒 完成万千云商 APP 技术选型、开发、运维、交付",
      "🔗 实现供应链与第三方接口实时数据同步",
      "💳 接入支付宝、微信支付及手机充值业务",
      "⚙️ 微服务架构拆分基础、用户、订单、商品、供应链 5 个服务"
    ],
    screenshots: [heroImage17, heroImage18]
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
