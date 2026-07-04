/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Menu, X, Flame, Layers, Feather, Mail, ShieldAlert } from "lucide-react";

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ currentTab, onTabChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: "home", label: "首页", icon: Flame },
    { id: "projects", label: "作品展示", icon: Layers },
    { id: "articles", label: "文章中心", icon: Feather },
    { id: "contact", label: "联系我", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div 
          onClick={() => onTabChange("home")}
          className="group flex cursor-pointer items-center space-x-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600">
            <span className="font-mono text-lg font-bold">DZ</span>
          </div>
          <div>
            <span className="font-sans font-bold tracking-tight text-gray-950 transition-colors group-hover:text-blue-600">Digital Zen</span>
            <span className="ml-1.5 hidden rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600 sm:inline-block">Aria Portfolio</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-8">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = currentTab === item.id || (item.id === "projects" && currentTab === "project_detail") || (item.id === "articles" && currentTab === "article_detail");
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`relative flex items-center space-x-1.5 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <IconComponent className="h-4 w-4" />
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => onTabChange("contact")}
            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-600"
          >
            即刻启航
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 block" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 block" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-100 bg-white md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = currentTab === item.id || (item.id === "projects" && currentTab === "project_detail") || (item.id === "articles" && currentTab === "article_detail");
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => {
                onTabChange("contact");
                setMobileMenuOpen(false);
              }}
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-gray-900 py-2.5 text-sm font-semibold text-white shadow"
            >
              即刻联系我
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
