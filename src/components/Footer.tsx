/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Send, Compass, Cpu, Layers, HelpCircle } from "lucide-react";

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-gray-50 text-gray-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-900 text-white">
                <span className="font-mono text-sm font-bold">DZ</span>
              </div>
              <span className="font-sans text-lg font-bold text-gray-950">Digital Zen</span>
            </div>
            <p className="max-w-xs text-sm text-gray-500 leading-relaxed">
              以极简之名，书写极致流畅的前端诗篇。探讨体验设计、微信小程序优化、React 架构与现代数字美学。
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/aria-dev-zen" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                id="footer-github-link"
              >
                <Github className="h-5 w-5" />
              </a>
              <button 
                onClick={() => onTabChange("contact")}
                className="text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
                id="footer-contact-button"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center space-x-1">
                  <Compass className="h-3 w-3" />
                  <span>核心导航</span>
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <button onClick={() => onTabChange("home")} className="text-sm text-gray-500 hover:text-gray-950 transition-colors">
                      首页
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onTabChange("projects")} className="text-sm text-gray-500 hover:text-gray-950 transition-colors">
                      作品展示
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onTabChange("articles")} className="text-sm text-gray-500 hover:text-gray-950 transition-colors">
                      文章中心
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onTabChange("contact")} className="text-sm text-gray-500 hover:text-gray-950 transition-colors">
                      联系我
                    </button>
                  </li>
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center space-x-1">
                  <Cpu className="h-3 w-3" />
                  <span>技术栈领域</span>
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li>React 19 & Concurrent Mode</li>
                  <li>WeChat SDK & 微信小程序</li>
                  <li>Tailwind CSS & Web UI Design</li>
                  <li>性能分析 & 首屏加载调优</li>
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center space-x-1">
                  <Layers className="h-3 w-3" />
                  <span>设计理念</span>
                </h3>
                <blockquote className="mt-4 border-l-2 border-gray-200 pl-4 text-sm italic text-gray-500 leading-relaxed">
                  "简单是终极的精致。当代码以亚秒的速度运行，像素完美对齐时，我们找到了真正的数字禅。"
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} Digital Zen Portfolio. Developed with precision by Aria.
          </p>
          <p className="mt-2 text-xs text-gray-400 md:mt-0 flex items-center space-x-2">
            <span>杭州 · 深圳 | 极速冷启动 LCP &lt; 0.8s</span>
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
}
