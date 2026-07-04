/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, ArrowRight, Grid, LayoutGrid, Calendar, Landmark, Hammer } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

interface PortfolioViewProps {
  onProjectClick: (id: string) => void;
}

export default function PortfolioView({ onProjectClick }: PortfolioViewProps) {
  const [selectedTag, setSelectedTag] = React.useState<string>("All");

  const tags = ["All", "React / Web", "小程序", "Design / UI"];

  const filteredProjects = selectedTag === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.tag === selectedTag);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
    exit: { opacity: 0, scale: 0.95, y: 15, transition: { duration: 0.15 } }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-600/10">
          <Grid className="h-5 w-5" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
          Digital Zen - 作品展示
        </h1>
        <p className="text-base text-gray-500 leading-relaxed">
          这里记录了我主导和参与的核心研发项目。涵盖高性能 SaaS 分析仪表盘、日活百万级的智慧民生出行小程序、以及注重国学美学的互动社区。
        </p>
      </div>

      {/* Tags Filter Grid */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-100 pb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide shadow-sm transition-all duration-200 cursor-pointer ${
              selectedTag === tag
                ? "bg-gray-950 text-white"
                : "bg-white text-gray-500 hover:text-gray-900 border border-gray-150 hover:border-gray-300"
            }`}
          >
            {tag === "All" ? "全部作品" : tag}
          </button>
        ))}
      </div>

      {/* Grid List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-8 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={cardVariants}
              onClick={() => onProjectClick(project.id)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-200 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="aspect-video w-full overflow-hidden bg-gray-50 relative">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block rounded-lg bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Text Section */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-950 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-600 line-clamp-1">{project.subtitle}</p>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 pt-1">
                    {project.overview}
                  </p>
                </div>

                {/* Meta details */}
                <div className="pt-4 border-t border-gray-50 grid grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center space-x-1.5 text-gray-500">
                    <Landmark className="h-3.5 w-3.5 text-gray-400" />
                    <span className="truncate">客户: {project.client}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-gray-500">
                    <Calendar className="h-3.5 w-3.5 text-gray-400" />
                    <span>研发期: {project.duration}</span>
                  </div>
                  <div className="col-span-2 flex items-center space-x-1.5 text-gray-500">
                    <Hammer className="h-3.5 w-3.5 text-gray-400" />
                    <span className="truncate">职责: {project.role}</span>
                  </div>
                </div>

                {/* Tags and CTA */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="inline-block rounded bg-gray-50 px-2 py-1 text-[11px] font-medium text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-block rounded bg-gray-50 px-2 py-1 text-[11px] font-medium text-gray-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-2 flex items-center text-xs font-semibold text-blue-600 group-hover:underline">
                  <span>查看深度项目复盘与性能指标</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
