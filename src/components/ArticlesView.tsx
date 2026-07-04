/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Feather, Search, Eye, Calendar, Clock, ArrowRight, CornerDownRight } from "lucide-react";
import { ARTICLES } from "../data";
import { Article } from "../types";

interface ArticlesViewProps {
  onArticleClick: (id: string) => void;
}

export default function ArticlesView({ onArticleClick }: ArticlesViewProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const categories = ["All", "性能调优", "Frontend", "Thoughts"];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* 1. Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-600/10">
          <Feather className="h-5 w-5" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
          Digital Zen - 文章中心
        </h1>
        <p className="text-base text-gray-500 leading-relaxed">
          在这里，我将沉淀与分享在移动端研发、前端性能攻坚、大厂小程序实战以及设计美学中的思考。以匠心筑造深度干货。
        </p>
      </div>

      {/* 2. Interactive Search & Filter Panels */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-100 pb-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 order-2 md:order-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gray-950 text-white"
                  : "bg-white text-gray-500 hover:text-gray-900 border border-gray-150 hover:border-gray-200"
              }`}
            >
              {cat === "All" ? "全部文章" : cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-sm w-full order-1 md:order-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索文章标题、概述..."
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-xs text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
          />
        </div>
      </div>

      {/* 3. Articles List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                layout
                variants={itemVariants}
                onClick={() => onArticleClick(article.id)}
                className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-gray-200 flex flex-col md:flex-row md:items-start md:justify-between gap-6"
              >
                {/* Content info */}
                <div className="space-y-3 flex-grow max-w-4xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                    <span className="rounded bg-blue-50 px-2.5 py-1 font-semibold text-blue-600">
                      {article.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      阅读 {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-950 transition-colors group-hover:text-blue-600 line-clamp-1">
                    {article.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 flex items-center">
                    <CornerDownRight className="h-3.5 w-3.5 mr-1 shrink-0" />
                    <span>{article.subtitle}</span>
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 pt-1">
                    {article.summary}
                  </p>
                </div>

                {/* Read button / View count */}
                <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between md:justify-center md:h-full gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-gray-50 md:pl-6">
                  <div className="text-xs text-gray-400 flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>{article.views} 浏览</span>
                  </div>
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 group-hover:bg-blue-600 group-hover:text-white transition-all text-gray-600">
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              className="text-center py-16 border border-dashed border-gray-200 rounded-3xl bg-gray-50"
            >
              <p className="text-sm text-gray-500">没有找到符合条件的研究文章，换个关键词搜搜看吧！</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
