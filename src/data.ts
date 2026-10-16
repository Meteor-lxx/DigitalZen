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
    category: "Go 后端",
    date: "2025-04-16",
    readTime: "18 分钟",
    views: 3821,
    summary: "支付中心承载公司所有应用的支付、退款、提现、预扣款，早期基于 Swoft/Swoole，随着业务增长出现内存泄漏、worker 重启绑定丢失等问题。本文完整记录如何使用 Go + Go-Zero + gRPC + RabbitMQ + Redis 重构支付路由、幂等、对账和渠道动态切换能力，并给出可落地的工程化方案。",
    contentMarkdown: `## 🏷️ 一、背景：为什么支付中心必须重构

支付中心是公司所有应用的资金入口。它不像普通业务服务，出问题可以降级、可以重试；支付一旦出错，轻则用户投诉，重则资金损失、对账不平。我们当时的支付中心覆盖了掌上网咖、达龙云电脑、达龙社区、茄子云、游戏发行、开发者平台、JoyArk、netboom 等应用，需要支持：

- 微信、支付宝 H5 / APP / 扫码支付
- 预扣款支付
- Stripe、Paypal、Google 支付
- 支付、退款、提现、预扣款等完整资金操作

早期系统基于 Swoft/Swoole 开发。Swoft 的开发效率很高，协程模型也优雅，但随着业务增长，几个问题逐渐暴露：

1. **内存泄漏**：长时间运行后，Swoole worker 内存持续上涨，需要定时重启。
2. **worker 重启绑定丢失**：重启后连接绑定关系丢失，部分用户请求路由失败。
3. **多渠道耦合**：每个业务线各自接入渠道，参数错误导致充值失败。
4. **无法动态切换**：某个渠道故障时，不能快速切换到备用渠道。

于是我们启动了支付中心重构，目标很明确：**统一入口、动态路由、资金安全、高可用**。

---

## 🛠️ 二、架构设计：三层拆分

重构后的支付中心分为三层：

### 1. API 网关层

使用 Kong + Lua，负责鉴权、限流、路由。所有业务方统一通过网关访问支付中心，避免直接暴露内部服务。Lua 脚本处理一些轻量逻辑，比如签名校验、灰度路由。

### 2. 支付服务层

使用 Go-Zero 微服务，负责支付单管理、渠道路由、回调处理。Go-Zero 的优势在于：

- 内置 RPC、HTTP 服务，代码生成效率高
- 内置熔断、限流、自适应降载
- 与 K8s 生态结合好，部署轻量

### 3. 异步任务层

RabbitMQ + Redis 延迟队列，处理超时关单、对账、重试。支付回调不能只依赖同步处理，必须异步补偿。

### 数据表设计

核心表设计遵循“最少可用原则”：

- **支付单表**：记录订单号、金额、状态、渠道、商户
- **渠道流水表**：记录每个渠道的请求与响应
- **退款单表**：独立于支付单，避免字段冗余

按商户 ID 哈希分 16 表，缓解单表压力。

---

## ⚡ 三、关键实现：渠道动态切换

支付中心最重要的能力之一，是**渠道动态切换**。当某个渠道故障或费率变化时，能够按权重自动选择。

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

这段代码看起来简单，但背后有几个工程细节：

1. **权重可动态配置**：通过 Apollo 配置中心下发，无需重启。
2. **渠道健康检查**：定时探测渠道可用性，异常时自动 'Enabled = false'。
3. **灰度切换**：新渠道先给低权重，观察成功率再逐步放量。

---

## 🔐 四、幂等与对账：资金安全的两道防线

### 1. 幂等

支付回调必须幂等。微信、支付宝可能重复回调，如果不做幂等，会重复发货、重复记账。

我们使用 **out_trade_no + channel** 作为唯一键：

- Redis 分布式锁：防止并发重复处理
- MySQL 唯一索引：最终兜底

\`\`\`go
func HandleCallback(ctx context.Context, req CallbackReq) error {
    key := fmt.Sprintf("pay:callback:%s:%s", req.OutTradeNo, req.Channel)
    ok, err := redisClient.SetNX(ctx, key, 1, 24*time.Hour).Result()
    if err != nil {
        return err
    }
    if !ok {
        return nil // 已处理，直接返回成功
    }
    // 处理业务逻辑
    return processPayment(ctx, req)
}
\`\`\`

### 2. 对账

对账任务每天凌晨跑批，对比渠道流水和本地流水。差异分为三类：

- **本地有、渠道无**：可能是渠道丢单，需要补单
- **渠道有、本地无**：可能是回调丢失，需要补录
- **金额不一致**：严重问题，立即告警

对账结果写入对账表，并推送到监控系统。

---

## 🚀 五、性能优化

- **gRPC 替代 HTTP**：内部服务调用从 HTTP 改为 gRPC，降低延迟。
- **MySQL 分表**：按商户 ID 哈希分 16 表。
- **Redis 连接池 + 本地缓存**：减少热点 Key 压力。
- **K8s HPA**：根据 QPS 自动伸缩。
- **延迟队列**：超时关单、重试使用 Redis 延迟队列，避免轮询。

---

## 📊 六、总结

从 Swoft 到 Go-Zero，不只是语言切换，更是服务治理、内存控制和部署方式的升级。Go 在支付中心这种高并发、高稳定场景下，表现非常适合。重构后：

- 支付成功率提升
- 渠道故障可秒级切换
- 内存稳定，无需定时重启
- 对账自动化，资金安全有保障

如果你也在做支付系统，记住一句话：**支付无小事，幂等和对账是底线**。`
  },
  {
    id: "go-websocket-cluster-architecture",
    title: "Go 实现 WebSocket 集群：从 2K 到 1.6W 实时连接的架构演进",
    subtitle: "goroutine、Redis 发布订阅、K8s 自动伸缩与冷热数据分离",
    category: "Go 后端",
    date: "2025-05-22",
    readTime: "20 分钟",
    views: 4173,
    summary: "业务需要排队、到期通知、余额不足、好友在线、聊天、群聊等双向通信能力。第一版使用 Swoft2，遇到内存泄漏和 worker 重启绑定丢失问题；第二版用 Go 重构，配合 K8s、Redis 发布订阅和每日分表，支撑高峰 1.6W+ 实时连接。本文完整复盘架构演进与关键实现。",
    contentMarkdown: `## 🏷️ 一、背景：为什么需要长连接

在达龙的业务里，很多场景需要服务端主动推送：

- 排队进度实时更新
- 到期通知
- 余额不足提醒
- 好友在线状态
- 好友聊天、群聊

这些场景如果用轮询，延迟高、浪费带宽、服务端压力大。长连接是更自然的选择。

第一版我们使用 Swoft2 开发。Swoft 基于 Swoole，协程模型优雅，开发效率高。但长时间运行后，问题逐渐暴露：

1. **内存泄漏**：Swoft2 部分组件存在内存泄漏，运行几天后内存上涨明显。
2. **worker 重启绑定丢失**：设置 worker 定时重启后，连接绑定关系丢失，用户需要重新连接。
3. **扩展困难**：单机连接数有限，无法水平扩展。

于是我们用 Go 重构了第二版。

---

## 🛠️ 二、架构设计

第二版架构：

- **接入层**：Go WebSocket 服务，使用 gorilla/websocket
- **路由层**：K8s Service + Ingress，4 个副本起步，根据连接数自动伸缩
- **消息层**：Redis 发布订阅 + RabbitMQ，跨节点广播
- **存储层**：MongoDB 存离线消息，MySQL 存关系数据，Redis 存在线状态
- **分表策略**：按天分表，3 个月前数据转冷存储

### 为什么选 gorilla/websocket

Go 生态里 WebSocket 库不少，我们选 gorilla/websocket 的原因：

- 稳定、成熟、社区活跃
- API 简洁，易于封装
- 支持自定义缓冲区、心跳、压缩

---

## ⚡ 三、关键实现：连接管理

WebSocket 服务的核心是连接管理。我们用经典的 Hub 模式：

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

这个模式有几个要点：

1. **register/unregister 用 channel**：避免并发读写 map。
2. **Send 缓冲**：每个连接有独立发送缓冲区，避免慢客户端阻塞整个 Hub。
3. **default 分支**：缓冲区满时主动断开，防止内存泄漏。

---

## 🌐 四、跨节点广播

单机 Hub 只能广播本节点连接。要支持集群，必须跨节点广播。我们用 Redis 发布订阅：

\`\`\`go
func (h *Hub) SubscribeRedis() {
    pubsub := redisClient.Subscribe(ctx, "ws:broadcast")
    ch := pubsub.Channel()
    for msg := range ch {
        h.broadcast <- []byte(msg.Payload)
    }
}
\`\`\`

发送消息时，先发到 Redis，所有节点订阅后广播给本地连接。

### 为什么不用 RabbitMQ 做广播

RabbitMQ 更适合点对点、可靠投递。广播场景下 Redis 发布订阅更轻量。但 Redis 发布订阅不保证可靠投递，所以离线消息我们存 MongoDB。

---

## 🚀 五、优化点

### 1. 心跳检测

30 秒 ping/pong，超时断开。避免死连接占用资源。

\`\`\`go
func (c *Client) Ping() {
    ticker := time.NewTicker(30 * time.Second)
    defer ticker.Stop()
    for range ticker.C {
        if err := c.Conn.WriteMessage(websocket.PingMessage, nil); err != nil {
            return
        }
    }
}
\`\`\`

### 2. 写超时

每个连接独立写协程，避免阻塞。

### 3. 内存控制

限制单连接发送缓冲区，超过阈值断开。

### 4. 冷热分离

3 个月前消息归档，减少 MySQL 压力。每日分表，按天查询。

---

## 📊 六、成果

- 每日低峰 2K+ 实时连接，高峰 1.6W+ 实时连接
- Go 重构后内存得到有效控制
- worker 重启不再丢失绑定关系
- K8s 自动伸缩 + 每日分表 + 冷热分离，支撑海量消息存储

---

## 🔮 七、总结

Go 的 goroutine 和 channel 非常适合长连接场景。配合 K8s 自动伸缩和 Redis 发布订阅，可以较低成本支撑万级实时连接。

如果你也在做 WebSocket 集群，记住几个关键点：

1. 连接管理用 Hub 模式
2. 跨节点广播用 Redis 发布订阅
3. 心跳、写超时、缓冲区限制一个都不能少
4. 离线消息和冷热数据要提前规划

长连接不难，难的是稳定运行一年不出事。`
  },
  {
    id: "go-crawler-automation-overseas-traffic",
    title: "Go 爬虫与自动化：海外私域引流系统的工程化设计",
    subtitle: "并发调度、养号策略、反爬与 Python 数据清洗协作",
    category: "Go 后端",
    date: "2025-07-11",
    readTime: "19 分钟",
    views: 2784,
    summary: "海外私域引流需要自动化注册、养号、爬数据、分析筛选、加好友、拉群、私聊、发广告。我们用 Go 做爬虫和自动化，Python 做数据清洗，Docker + 自建 VPN 解决环境隔离。本文完整拆解系统的工程化设计。",
    contentMarkdown: `## 🏷️ 一、背景：海外私域引流的挑战

海外私域引流分为自然流量和竞价流量。竞价流量类似百度竞价，烧钱做广告；自然流量需要大量自动化操作：

- 注册、养号
- 爬数据、分析筛选
- 加好友、拉群、私聊
- 发送广告

人工做这些成本极高，且容易封号。我们需要一套自动化系统，模拟真实用户行为，同时保证稳定性和可恢复性。

---

## 🛠️ 二、技术栈

- **Go**：爬虫、自动化任务、并发调度
- **Python**：数据清洗、AI 对话
- **Docker**：每个账号独立容器环境
- **自建 VPN**：不同账号不同 IP
- **OCR**：头像识别性别、年龄
- **AI 机器人**：自动应答、筛选意向客户

### 为什么用 Go 做爬虫

Go 的优势：

1. **高并发**：goroutine 轻量，适合大量账号并行操作
2. **低内存**：相比 Python，Go 内存占用更低
3. **编译部署**：单二进制，部署简单
4. **生态成熟**：colly、chromedp 等库可用

Python 则负责数据清洗和 AI，因为 Python 在数据处理和 AI 生态上更强。

---

## ⚡ 三、关键实现：并发任务调度

自动化任务的核心是并发调度。我们用 Worker Pool 模式：

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

### 任务分级

不是所有任务都一样重要。我们分了三级：

1. **高优先级**：登录、支付相关
2. **中优先级**：加好友、发消息
3. **低优先级**：养号、爬数据

不同优先级用不同队列，避免低优先级任务阻塞高优先级。

---

## 🛡️ 四、反爬与养号策略

海外平台反爬严格，账号容易封禁。我们的策略：

1. **随机 User-Agent、浏览器指纹**
2. **操作间隔随机化**：模拟人工，避免固定频率
3. **每日任务量限制**：避免异常
4. **账号分组**：A/B 测试养号策略
5. **IP 隔离**：每个账号独立 VPN

### 养号策略

新账号不能立刻发广告，需要先养号：

- 前几天只浏览、点赞
- 逐步增加互动
- 一周后才开始加好友
- 两周后才发广告

这些策略通过配置下发，不同平台不同策略。

---

## 🧹 五、数据清洗

Go 爬取原始数据后，写入 Kafka，Python 消费并清洗，再写回 MySQL。

清洗规则包括：

- 去重
- 格式化
- 地理位置解析
- 意图标签

### 为什么用 Kafka

Kafka 解耦 Go 和 Python，削峰填谷。Go 爬取速度可能远快于 Python 清洗速度，Kafka 缓冲避免数据丢失。

---

## 🤖 六、AI 机器人

封装大模型对话能力，实现用户咨询自动应答。结合 RAG、Qdrant 向量数据库、向量检索、文档切片、Prompt 搭建 AI 智能客服。

AI 机器人做两件事：

1. **自动应答**：常见问题直接回答
2. **意向筛选**：识别高意向客户，推送给销售

---

## 📊 七、总结

Go 的高并发和低内存占用非常适合爬虫与自动化。关键不是“爬得快”，而是“像真人”。工程化设计要围绕稳定性、可观测性和可恢复性。

几个关键点：

1. Worker Pool 控制并发
2. 任务分级避免阻塞
3. 反爬和养号策略要持续迭代
4. Go + Python 分工协作
5. AI 提升转化效率

自动化系统不是一劳永逸，平台规则在变，策略也要跟着变。`
  },
  {
    id: "go-rag-qdrant-ai-customer-service",
    title: "Go + RAG + Qdrant：AI 智能客服的检索增强生成实践",
    subtitle: "文档切片、向量检索、Prompt 工程与意向客户筛选",
    category: "AI 后端",
    date: "2025-09-21",
    readTime: "21 分钟",
    views: 3326,
    summary: "传统客服机器人基于关键词匹配，回答生硬。我们使用 RAG + Qdrant 向量数据库 + 文档切片 + Prompt 工程，在 Go 后端搭建 AI 智能客服，实现用户咨询自动应答和意向客户筛选。本文完整拆解 RAG 流程与工程实现。",
    contentMarkdown: `## 🏷️ 一、背景：为什么需要 RAG

海外私域引流中，用户咨询量大，人工回复慢。传统客服机器人基于关键词匹配，回答生硬，无法理解语义。

大模型虽然强大，但直接回答容易幻觉。比如问“你们支持退款吗”，大模型可能编造一个退款政策。

RAG（Retrieval-Augmented Generation，检索增强生成）的思路是：先从知识库检索相关片段，再让大模型基于片段回答。这样既保留大模型的语言能力，又保证答案有据可依。

---

## 🔁 二、RAG 流程

1. **文档切片**：将产品文档、FAQ、话术切分成 300-500 字片段
2. **向量化**：调用 Embedding 模型生成向量
3. **存储**：写入 Qdrant 向量数据库
4. **检索**：用户问题向量化，Top-K 相似片段
5. **生成**：将片段 + 问题 + Prompt 发给大模型
6. **后处理**：过滤敏感词，格式化输出

### 为什么选 Qdrant

Qdrant 的优势：

1. **轻量**：单二进制，部署简单
2. **性能好**：Rust 编写，检索快
3. **API 友好**：HTTP/gRPC 都有
4. **过滤能力强**：支持 payload 过滤

相比 Milvus、Pinecone，Qdrant 更适合中小规模知识库。

---

## ⚡ 三、Go 调用 Qdrant

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

### 向量化

Embedding 模型可以选择：

- OpenAI text-embedding-3
- 本地部署 BGE、M3E
- 阿里、百度等云服务

我们选择本地部署 BGE，原因是数据不出境，成本可控。

---

## 🧠 四、Prompt 设计

Prompt 是 RAG 的灵魂。设计不好，大模型会忽略检索结果，继续幻觉。

\`\`\`text
你是一个海外私域客服助手。请根据以下知识库片段回答用户问题。
如果知识库没有相关信息，请回答“我需要进一步确认”。
知识库：
{{context}}
用户问题：
{{question}}
\`\`\`

几个要点：

1. **明确角色**：告诉模型它是谁
2. **限定知识库**：只能基于片段回答
3. **兜底话术**：没有答案时怎么说
4. **格式要求**：输出格式统一

---

## 🎯 五、意向客户筛选

AI 对话过程中，提取用户意图标签：

- 价格
- 功能
- 试用
- 合作

高意向用户自动推送给销售，低意向用户继续机器人跟进。

### 意图识别

意图识别可以用两种方式：

1. **规则**：关键词匹配，简单但准确率低
2. **模型**：让大模型输出 JSON，准确率高但成本高

我们混合使用：先用规则粗筛，再用模型精判。

---

## 🚀 六、性能优化

- **缓存**：常见问题答案缓存，避免重复调用大模型
- **并发**：Go 并发调用向量检索、大模型 API
- **降级**：大模型超时，降级到关键词匹配
- **限流**：防止大模型 API 被刷爆

---

## 📊 七、总结

Go 适合做 RAG 的后端编排：并发调用向量检索、大模型 API、业务数据库。Qdrant 轻量、性能好，适合中小规模知识库。关键是切片策略和 Prompt 质量，而不是盲目堆模型。

几个关键点：

1. 切片粒度 300-500 字
2. Prompt 要明确角色和兜底
3. 意图识别规则 + 模型混合
4. 缓存、并发、降级一个都不能少

RAG 不是银弹，但它是目前最务实的 AI 客服方案。`
  }
];
