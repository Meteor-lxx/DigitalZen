/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Layers, Feather, Sparkles, Zap, Flame, Shield, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO, PROJECTS, ARTICLES } from "../data";
import { Project, Article } from "../types";

interface HomeViewProps {
  onTabChange: (tab: string) => void;
  onProjectClick: (id: string) => void;
  onArticleClick: (id: string) => void;
}

export default function HomeView({ onTabChange, onProjectClick, onArticleClick }: HomeViewProps) {
  // Take top 2 projects
  const featuredProjects = PROJECTS.slice(0, 2);
  // Take top 2 articles
  const featuredArticles = ARTICLES.slice(0, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-20 pb-20"
    >
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16">
        {/* Decorative Grid BG */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Tag badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-600 ring-1 ring-blue-600/10"
            >
              <Sparkles className="h-3.5 w-3.5 animate-spin-slow" />
              <span>2026 Developer Portfolio | Ready for Inquiries</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I am <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-4 text-lg font-medium text-gray-900 sm:text-xl"
            >
              {PERSONAL_INFO.title}
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="mt-6 max-w-2xl text-base text-gray-500 leading-relaxed sm:text-lg"
            >
              {PERSONAL_INFO.subTitle}
            </motion.p>

            {/* Action buttons */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <button
                onClick={() => onTabChange("projects")}
                className="inline-flex items-center justify-center rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white shadow hover:bg-blue-600 transition-all cursor-pointer"
                id="hero-view-works-btn"
              >
                <span>浏览作品集</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                onClick={() => onTabChange("contact")}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 shadow-sm hover:bg-gray-50 transition-all cursor-pointer"
                id="hero-contact-btn"
              >
                立即联系
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "项目研发经验", value: "10+ 年", desc: "大厂性能攻坚沉淀", icon: Shield },
            { label: "主导/落地项目", value: "20+ 个", desc: "均实现高效率交付", icon: Layers },
            { label: "小程序极速启动", value: "< 0.8s", desc: "扫码即开冷启动优化", icon: Zap },
            { label: "技术社区阅读", value: "10k+", desc: "持续输出高质量干货", icon: Feather },
          ].map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{metric.label}</span>
                  <Icon className="h-5 w-5 text-blue-500/80" />
                </div>
                <p className="mt-4 text-3xl font-bold tracking-tight text-gray-950">{metric.value}</p>
                <p className="mt-1 text-xs text-gray-500">{metric.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Biography & Zen Philosophy Card */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={itemVariants}
          className="grid gap-8 lg:grid-cols-12 lg:items-center"
        >
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl" />
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="relative h-44 w-44 rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-950">关于 {PERSONAL_INFO.name}</h2>
              <p className="text-xs font-mono text-blue-600 mt-1">{PERSONAL_INFO.title}</p>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            <button
              onClick={() => onTabChange("contact")}
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
              id="bio-learn-more-btn"
            >
              <span>查看我的全套技能与履历</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </button>
          </div>

          <div className="lg:col-span-7 bg-gray-950 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 space-y-6">
              <span className="inline-flex items-center space-x-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-blue-400">
                <Flame className="h-3.5 w-3.5 animate-pulse text-orange-400" />
                <span>Digital Zen 核心价值观</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">“代码的静，交互的动，美学的纯粹”</h3>
              <div className="grid gap-6 md:grid-cols-3 mt-8 pt-4 border-t border-white/10">
                <div>
                  <h4 className="text-sm font-semibold text-blue-400">禅静极简 (Zen Mind)</h4>
                  <p className="mt-2 text-xs text-gray-400 leading-relaxed">追求代码质量的纯净与解耦。不添加任何冗余无谓的功能，每一行逻辑都严丝合缝。</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400">极致流畅 (Speed Zen)</h4>
                  <p className="mt-2 text-xs text-gray-400 leading-relaxed">将性能指标烙印于灵魂中。致力于极致的分包与预读、毫秒级渲染响应和闪电般的冷启动。</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400">交互呼吸 (Breathe UI)</h4>
                  <p className="mt-2 text-xs text-gray-400 leading-relaxed">设计应如指尖呼吸。通过高频高精度的微交互、物理级阻尼和自然的负空间，平抚人性的焦躁。</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Selected Projects Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between border-b border-gray-100 pb-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">精选案例展示</h2>
            <p className="mt-1.5 text-sm text-gray-500">主导研发的高性能数字化系统与小程序</p>
          </div>
          <button
            onClick={() => onTabChange("projects")}
            className="hidden sm:inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
            id="featured-projects-all-btn"
          >
            <span>查看所有作品</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => onProjectClick(project.id)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-200"
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-50 relative">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-950 transition-colors group-hover:text-blue-600">{project.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded bg-gray-50 px-2 py-1 text-[11px] font-medium text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="inline-block rounded bg-gray-50 px-2 py-1 text-[11px] font-medium text-gray-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Selected Articles Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between border-b border-gray-100 pb-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">最近深度解析</h2>
            <p className="mt-1.5 text-sm text-gray-500">记录小程序性能优化、前端并发架构与设计思想的探索</p>
          </div>
          <button
            onClick={() => onTabChange("articles")}
            className="hidden sm:inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
            id="featured-articles-all-btn"
          >
            <span>访问文章中心</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featuredArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              onClick={() => onArticleClick(article.id)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-200"
            >
              <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                <span className="rounded bg-blue-50 px-2 py-1 font-semibold text-blue-600">{article.category}</span>
                <div className="flex items-center space-x-3">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-950 transition-colors group-hover:text-blue-600 line-clamp-1">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                {article.summary}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span className="group-hover:underline flex items-center">
                  阅读全文 <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span className="text-gray-400 font-normal">浏览量: {article.views}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
