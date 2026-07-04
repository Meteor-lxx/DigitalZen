/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock, Eye, Sparkles, Copy, Check, Menu, List } from "lucide-react";
import { Article } from "../types";

interface ArticleDetailViewProps {
  article: Article;
  onBack: () => void;
}

export default function ArticleDetailView({ article, onBack }: ArticleDetailViewProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Monitor scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyCode = (codeText: string, id: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Simple Markdown Parser to render custom beautiful JSX
  const renderMarkdown = (markdown: string = "") => {
    const blocks = markdown.split("\n\n");
    let keyCounter = 0;

    return blocks.map((block) => {
      const trimmedBlock = block.trim();
      if (!trimmedBlock) return null;

      // 1. Headings (e.g. ## Background)
      if (trimmedBlock.startsWith("## ")) {
        const title = trimmedBlock.replace("## ", "");
        const id = title.replace(/[^\w\u4e00-\u9fa5]/g, "-").toLowerCase();
        return (
          <h2
            key={keyCounter++}
            id={id}
            className="text-2xl font-bold tracking-tight text-gray-950 mt-10 mb-4 pb-2 border-b border-gray-100 flex items-center scroll-mt-20"
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600 mr-2.5" />
            {title}
          </h2>
        );
      }

      if (trimmedBlock.startsWith("### ")) {
        const title = trimmedBlock.replace("### ", "");
        return (
          <h3
            key={keyCounter++}
            className="text-lg font-bold tracking-tight text-gray-900 mt-8 mb-3"
          >
            {title}
          </h3>
        );
      }

      // 2. Horizontal Rule (---)
      if (trimmedBlock === "---") {
        return <hr key={keyCounter++} className="my-8 border-gray-100" />;
      }

      // 3. Blockquotes (> ...)
      if (trimmedBlock.startsWith("> ")) {
        const content = trimmedBlock.replace("> ", "");
        return (
          <blockquote
            key={keyCounter++}
            className="my-6 border-l-4 border-blue-500 bg-blue-50/50 px-5 py-4 text-sm font-medium text-gray-700 rounded-r-xl"
          >
            {content}
          </blockquote>
        );
      }

      // 4. Code Blocks (```json ... ```)
      if (trimmedBlock.startsWith("```")) {
        const lines = trimmedBlock.split("\n");
        const firstLine = lines[0];
        const lang = firstLine.replace("```", "") || "code";
        const codeText = lines.slice(1, lines.length - 1).join("\n");
        const blockId = `code-block-${keyCounter++}`;

        return (
          <div
            key={blockId}
            className="my-6 w-full max-w-full rounded-2xl border border-gray-150 bg-gray-50 overflow-hidden shadow-sm font-mono text-xs text-gray-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{lang}</span>
              <button
                onClick={() => handleCopyCode(codeText, blockId)}
                className="inline-flex items-center space-x-1 rounded bg-white px-2 py-1 text-[10px] font-semibold text-gray-600 border border-gray-200 hover:bg-gray-50 shadow-sm transition-all cursor-pointer"
              >
                {copiedId === blockId ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-500" />
                    <span className="text-emerald-600">已复制!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>复制代码</span>
                  </>
                )}
              </button>
            </div>
            {/* Code */}
            <pre className="p-4 overflow-x-auto whitespace-pre leading-relaxed text-gray-700">
              <code>{codeText}</code>
            </pre>
          </div>
        );
      }

      // 5. Tables
      if (trimmedBlock.startsWith("|")) {
        const lines = trimmedBlock.split("\n");
        const rows = lines.map((line) =>
          line
            .split("|")
            .map((cell) => cell.trim())
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
        );

        const headerRow = rows[0];
        const bodyRows = rows.slice(2); // Skip header and separator (---)

        return (
          <div key={keyCounter++} className="my-8 w-full max-w-full overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  {headerRow.map((cell, idx) => (
                    <th key={idx} className="px-6 py-4 font-bold text-gray-900">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 bg-white">
                {bodyRows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-gray-55 transition-colors">
                    {row.map((cell, cellIdx) => {
                      const isBoldAccent = cell.startsWith("**") && cell.endsWith("**");
                      const cleanedCell = cell.replace(/\*\*/g, "");
                      return (
                        <td key={cellIdx} className="px-6 py-4 text-gray-600">
                          {isBoldAccent ? (
                            <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                              {cleanedCell}
                            </span>
                          ) : (
                            cleanedCell
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      // 6. Bullet lists
      if (trimmedBlock.startsWith("- ")) {
        const items = trimmedBlock.split("\n").map((line) => line.replace("- ", ""));
        return (
          <ul key={keyCounter++} className="my-6 space-y-2 list-disc list-inside text-sm text-gray-600 leading-relaxed pl-2">
            {items.map((item, idx) => {
              // Parse simple inline bold like **bold**
              const boldRegex = /\*\*(.*?)\*\*/g;
              const matches = [...item.matchAll(boldRegex)];
              if (matches.length > 0) {
                let lastIndex = 0;
                const elements: React.ReactNode[] = [];
                matches.forEach((match, mIdx) => {
                  const [full, text] = match;
                  const index = match.index ?? 0;
                  if (index > lastIndex) {
                    elements.push(item.substring(lastIndex, index));
                  }
                  elements.push(<strong key={`b-${mIdx}`} className="font-bold text-gray-950">{text}</strong>);
                  lastIndex = index + full.length;
                });
                if (lastIndex < item.length) {
                  elements.push(item.substring(lastIndex));
                }
                return <li key={idx}>{elements}</li>;
              }
              return <li key={idx}>{item}</li>;
            })}
          </ul>
        );
      }

      // 7. Standard Paragraph
      // Handle simple inline formatting like `inline code` and **bold**
      let parsedParagraph: React.ReactNode = trimmedBlock;
      const boldRegex = /\*\*(.*?)\*\*/g;
      const inlineCodeRegex = /`(.*?)`/g;

      // Quick helper to replace matches with styled nodes
      let text = trimmedBlock;
      // For simplicity, we can render simple inline formatting
      return (
        <p
          key={keyCounter++}
          className="text-sm sm:text-base text-gray-600 leading-relaxed my-4 whitespace-pre-line"
        >
          {text.split("\n").map((line, lIdx) => {
            // Very simple parser for `code` and **bold** on line-level
            const parts: React.ReactNode[] = [];
            let cursor = 0;
            const regex = /(\*\*(.*?)\*\*|`(.*?)`)/g;
            let match;
            while ((match = regex.exec(line)) !== null) {
              const [full, , boldText, codeText] = match;
              const index = match.index;
              if (index > cursor) {
                parts.push(line.substring(cursor, index));
              }
              if (boldText) {
                parts.push(<strong key={`b-${index}`} className="font-bold text-gray-950">{boldText}</strong>);
              } else if (codeText) {
                parts.push(<code key={`c-${index}`} className="font-mono bg-gray-100 text-blue-600 px-1.5 py-0.5 rounded text-xs">{codeText}</code>);
              }
              cursor = index + full.length;
            }
            if (cursor < line.length) {
              parts.push(line.substring(cursor));
            }

            return (
              <span key={lIdx} className="block mt-1">
                {parts.length > 0 ? parts : line}
              </span>
            );
          })}
        </p>
      );
    });
  };

  // Generate simple Table of Contents from markdown headings
  const getTOC = (markdown: string = "") => {
    const lines = markdown.split("\n");
    return lines
      .filter((line) => line.trim().startsWith("## "))
      .map((line) => {
        const title = line.replace("## ", "").trim();
        const id = title.replace(/[^\w\u4e00-\u9fa5]/g, "-").toLowerCase();
        return { title, id };
      });
  };

  const tocItems = getTOC(article.contentMarkdown);

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
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative min-h-screen pb-20 w-full overflow-x-hidden"
    >
      {/* Scroll Progress Bar */}
      <div className="fixed top-[64px] left-0 right-0 h-1 bg-gray-100 z-40">
        <div
          className="h-full bg-blue-600 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main Article Container */}
          <main className="lg:col-span-9 min-w-0 w-full overflow-hidden space-y-8 bg-white border border-gray-100 p-4 sm:p-10 md:p-12 rounded-3xl shadow-sm">
            {/* Back Navigation */}
            <motion.div variants={itemVariants}>
              <button
                onClick={onBack}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer group"
                id="article-detail-back-btn"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                <span>返回文章中心</span>
              </button>
            </motion.div>

            {/* Header info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-medium">
                <span className="rounded bg-blue-50 px-2.5 py-1 font-semibold text-blue-600">
                  {article.category}
                </span>
                <span className="flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  {article.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  {article.readTime}
                </span>
                <span className="flex items-center">
                  <Eye className="h-3.5 w-3.5 mr-1" />
                  {article.views} 阅读
                </span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl md:text-5xl leading-tight">
                {article.title}
              </h1>
              <p className="text-base text-blue-600 font-semibold">{article.subtitle}</p>

              <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5 text-sm text-gray-500 italic leading-relaxed">
                <span className="font-bold text-gray-700 not-italic mr-1.5">摘要:</span>
                {article.summary}
              </div>
            </motion.div>

            <hr className="border-gray-100" />

            {/* Custom styled parsed contents */}
            <motion.div variants={itemVariants} className="prose max-w-none w-full break-words overflow-hidden text-gray-800">
              {renderMarkdown(article.contentMarkdown)}
            </motion.div>
          </main>

          {/* Right Sidebar: Sticky TOC */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center mb-4">
                  <List className="h-4 w-4 mr-1.5" />
                  目录导航
                </h3>
                <nav className="space-y-2.5 text-xs font-medium">
                  {tocItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.id}`}
                      className="block text-gray-500 hover:text-blue-600 transition-colors pl-2.5 border-l border-gray-100 hover:border-blue-600 py-1.5 truncate leading-none"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Author Info Card */}
              <div className="rounded-2xl border border-gray-100 bg-gray-950 text-white p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-blue-500/10 blur-xl -mr-8 -mt-8" />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Aria"
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-white">Aria</h4>
                      <p className="text-[10px] text-blue-400 font-mono">Performance Architect</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    以极简之名，书写极致流畅的前端诗篇。感谢您的深度阅读。
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}
