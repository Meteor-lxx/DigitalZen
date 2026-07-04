/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowLeft, Landmark, ShieldCheck, Briefcase, Calendar, Sparkles, CheckCircle, ExternalLink } from "lucide-react";
import { Project } from "../types";

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetailView({ project, onBack }: ProjectDetailViewProps) {
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
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12"
    >
      {/* 1. Back Navigation Button */}
      <motion.div variants={itemVariants} className="flex items-center">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer group"
          id="project-detail-back-btn"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>返回作品展示</span>
        </button>
      </motion.div>

      {/* 2. Project Hero Section */}
      <motion.div variants={itemVariants} className="space-y-6">
        <div className="inline-flex items-center space-x-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 ring-1 ring-blue-600/10">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{project.tag} 案例复盘</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl md:text-5xl leading-tight">
          项目详情 - {project.title}
        </h1>
        <p className="text-lg font-medium text-blue-600 max-w-4xl">{project.subtitle}</p>

        {/* Hero image banner */}
        <div className="aspect-video w-full overflow-hidden rounded-3xl bg-gray-50 shadow-sm relative">
          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </motion.div>

      {/* 3. Case Metadata Card */}
      <motion.div 
        variants={itemVariants}
        className="grid gap-6 md:grid-cols-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm text-sm"
      >
        <div className="flex items-start space-x-3">
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Landmark className="h-4 w-4" />
          </div>
          <div>
            <p className="font-semibold text-gray-400 uppercase tracking-wider text-[11px]">合作客户</p>
            <p className="mt-1 font-bold text-gray-900">{project.client}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Briefcase className="h-4 w-4" />
          </div>
          <div>
            <p className="font-semibold text-gray-400 uppercase tracking-wider text-[11px]">担任角色</p>
            <p className="mt-1 font-bold text-gray-900">{project.role}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Calendar className="h-4 w-4" />
          </div>
          <div>
            <p className="font-semibold text-gray-400 uppercase tracking-wider text-[11px]">研发工期</p>
            <p className="mt-1 font-bold text-gray-900">{project.duration}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <p className="font-semibold text-gray-400 uppercase tracking-wider text-[11px]">交付状态</p>
            <p className="mt-1 font-bold text-emerald-600 flex items-center">
              <span>已成功上线</span>
              <span className="ml-1.5 h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </p>
          </div>
        </div>
      </motion.div>

      {/* 4. Dynamic Tech Stack Badges */}
      <motion.div variants={itemVariants} className="space-y-3">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">核心技术组合</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block rounded-xl border border-gray-150 bg-white px-3.5 py-1.5 text-xs font-semibold text-gray-700 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 5. Comprehensive Case Report Panels */}
      <motion.div 
        variants={itemVariants}
        className="grid gap-8 lg:grid-cols-3"
      >
        {/* Left main reports */}
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-950 flex items-center space-x-2">
              <span className="block h-5 w-1.5 rounded bg-blue-600" />
              <span>1. 项目概述 (Overview)</span>
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
              {project.overview}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-950 flex items-center space-x-2">
              <span className="block h-5 w-1.5 rounded bg-red-500" />
              <span>2. 面临挑战 (Challenge)</span>
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
              {project.challenge}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-950 flex items-center space-x-2">
              <span className="block h-5 w-1.5 rounded bg-emerald-500" />
              <span>3. 解决方案 (Solution)</span>
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line font-medium text-gray-900 bg-emerald-50/50 p-4 rounded-2xl">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Right optimization outcome dashboard */}
        <div className="space-y-8">
          <div className="rounded-3xl bg-gray-950 text-white p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-blue-500/10 blur-2xl -mr-16 -mt-16" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-bold tracking-tight">4. 优化效果与指标</h3>
              <p className="text-xs text-gray-400">经线上生产环境验证，最终交出了令多方满意的优异成绩单：</p>
              
              <div className="space-y-4 pt-2">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-white/5 p-3.5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-gray-100 leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Screenshots Gallery Card */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 space-y-4 shadow-sm">
            <h4 className="text-sm font-bold text-gray-950">项目设计细节与构图</h4>
            <div className="grid gap-3 grid-cols-2">
              {project.screenshots.map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl bg-gray-50 relative group">
                  <img
                    src={img}
                    alt={`Screenshot ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
