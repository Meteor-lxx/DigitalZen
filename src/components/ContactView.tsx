/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Github,
  CheckCircle,
  TrendingUp,
  FileText,
  User,
  ExternalLink,
  MessageSquare,
  Trash2
} from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { ContactMessage } from "../types";

export default function ContactView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  
  const [sentMessages, setSentMessages] = useState<ContactMessage[]>([]);
  const [localTime, setLocalTime] = useState("");

  // Load sent messages from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("digital_zen_messages");
    if (stored) {
      try {
        setSentMessages(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse stored messages", err);
      }
    }

    // Dynamic Clock in China (UTC+8) or standard user local time
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Shanghai",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat("zh-CN", options).format(new Date());
      setLocalTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        subject,
        message,
        timestamp: new Date().toLocaleString("zh-CN")
      };

      const updated = [newMessage, ...sentMessages];
      setSentMessages(updated);
      localStorage.setItem("digital_zen_messages", JSON.stringify(updated));

      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      setIsSubmitting(false);
      setShowSuccessToast(true);

      setTimeout(() => setShowSuccessToast(false), 4000);
    }, 1200);
  };

  const handleDeleteMessage = (id: string) => {
    const updated = sentMessages.filter((msg) => msg.id !== id);
    setSentMessages(updated);
    localStorage.setItem("digital_zen_messages", JSON.stringify(updated));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16 relative">
      
      {/* Toast Alert */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-20 right-4 sm:right-10 z-50 flex items-center space-x-3 rounded-2xl bg-emerald-900 px-5 py-4 text-white shadow-xl ring-1 ring-white/10"
          >
            <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold">留言投递成功！</p>
              <p className="text-[10px] text-emerald-200 mt-0.5">您的留言已成功保存至本地，可在下方信箱中查看。</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Header Grid */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-600/10">
          <Mail className="h-5 w-5" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
          联系我 - Digital Zen Portfolio
        </h1>
        <p className="text-base text-gray-500 leading-relaxed">
          有关于性能攻坚、架构搭建或者出海业务的前端需求？亦或是纯技术层面的畅聊，欢迎在此投递您的信件或直接联系我。
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-12">
        {/* Left column: Bios & Skill Metrics & TIMELINE */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Profile Card */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="h-24 w-24 rounded-full border-4 border-gray-50 object-cover shadow"
              />
              <div className="space-y-2 text-center sm:text-left flex-grow">
                <h3 className="text-xl font-bold text-gray-950">{PERSONAL_INFO.name}</h3>
                <p className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-wider">{PERSONAL_INFO.title}</p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 pt-1.5 text-xs text-gray-500 font-medium">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-1 shrink-0" />
                    {PERSONAL_INFO.location}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-1 shrink-0" />
                    <span>中国 · 杭州时间 (UTC+8): <strong className="font-mono text-gray-900 ml-1">{localTime || "00:00:00"}</strong></span>
                  </span>
                </div>
              </div>
            </div>

            {/* Direct contact link lines */}
            <div className="pt-4 border-t border-gray-50 grid gap-3 sm:grid-cols-2 text-xs">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="flex items-center space-x-2.5 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors text-gray-600 border border-transparent hover:border-blue-100"
              >
                <Mail className="h-4 w-4" />
                <span>电子邮箱: {PERSONAL_INFO.email}</span>
              </a>
              <a 
                href={`tel:${PERSONAL_INFO.phone}`} 
                className="flex items-center space-x-2.5 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors text-gray-600 border border-transparent hover:border-blue-100"
              >
                <Phone className="h-4 w-4" />
                <span>电话热线: {PERSONAL_INFO.phone}</span>
              </a>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="col-span-1 sm:col-span-2 flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors text-gray-600 border border-transparent hover:border-blue-100"
              >
                <span className="flex items-center space-x-2.5">
                  <Github className="h-4 w-4" />
                  <span>开源主页: {PERSONAL_INFO.github}</span>
                </span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Core Skills meter dashboard */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-950 flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              <span>技能专业度 (Skill Meters)</span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {PERSONAL_INFO.skills.map((skill, index) => (
                <div key={index} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-gray-900">{skill.name}</span>
                    <span className="text-blue-600 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded uppercase tracking-wide">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Work experience timelines */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-950 flex items-center space-x-2">
              <FileText className="h-5 w-5 text-blue-500" />
              <span>履历生平 (Work Experience)</span>
            </h3>
            <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100 pl-8">
              {PERSONAL_INFO.experience.map((exp, index) => (
                <div key={index} className="relative space-y-2">
                  {/* node dot */}
                  <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-blue-600 bg-white" />
                  
                  <div className="flex flex-wrap items-center gap-x-3 text-xs font-semibold">
                    <span className="rounded bg-blue-50 px-2.5 py-1 text-blue-600 font-mono">{exp.period}</span>
                    <span className="text-gray-900 font-bold">{exp.company}</span>
                  </div>
                  <p className="text-sm font-bold text-gray-950">{exp.role}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right column: Interactive Message Form & SENT MESSAGE LOGS */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Form */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-950 flex items-center space-x-2">
                <Send className="h-5 w-5 text-blue-500" />
                <span>留言投递信箱</span>
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                此留言系统具有完整持久化引擎，提交后可直接在下方「我的信箱历史」中查看与管理。
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-semibold text-gray-700 flex items-center">
                  <User className="h-3.5 w-3.5 mr-1 text-gray-400" />
                  您的姓名 (Name) *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="例如: 陆明先生"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-gray-700 flex items-center">
                  <Mail className="h-3.5 w-3.5 mr-1 text-gray-400" />
                  联系邮箱 (Email) *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="例如: lu.ming@company.com"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-gray-700">留言主题 (Subject) *</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="例如: 商务合作咨询 / 性能优化需求"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-gray-700">具体陈述 (Message Content) *</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="在这里输入您想对我说的话..."
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center rounded-xl bg-gray-950 py-3 font-semibold text-white shadow hover:bg-blue-600 transition-all cursor-pointer disabled:opacity-50"
                id="contact-form-submit-btn"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>留言密封中...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>即刻投递信件</span>
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Inbox logs */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-950 flex items-center space-x-2">
              <MessageSquare className="h-4 w-4 text-blue-500" />
              <span>我的信箱历史 ({sentMessages.length})</span>
            </h3>

            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
              <AnimatePresence mode="popLayout">
                {sentMessages.length > 0 ? (
                  sentMessages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                      className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm text-xs space-y-2 relative group"
                    >
                      <button
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-1"
                        title="删除此条记录"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                      
                      <div className="flex items-center justify-between font-semibold">
                        <span className="text-gray-900">{msg.name}</span>
                        <span className="text-[10px] text-gray-400 font-normal">{msg.timestamp}</span>
                      </div>
                      <p className="text-[10px] text-blue-600 font-semibold truncate pr-6">主题: {msg.subject}</p>
                      <p className="text-gray-500 leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                      <div className="text-[10px] text-gray-400 pt-1 flex items-center">
                        <Mail className="h-3 w-3 mr-1" />
                        <span>回复地址: {msg.email}</span>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-10 border border-dashed border-gray-200 rounded-2xl bg-gray-50 text-gray-400 text-xs">
                    信箱目前空空如也。提交留言后将显示在此处。
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
