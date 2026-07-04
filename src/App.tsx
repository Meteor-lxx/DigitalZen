/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import PortfolioView from "./components/PortfolioView";
import ProjectDetailView from "./components/ProjectDetailView";
import ArticlesView from "./components/ArticlesView";
import ArticleDetailView from "./components/ArticleDetailView";
import ContactView from "./components/ContactView";

import { PROJECTS, ARTICLES } from "./data";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentTab, selectedProjectId, selectedArticleId]);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    // Reset specific details when navigating main tabs
    if (tab !== "project_detail") setSelectedProjectId(null);
    if (tab !== "article_detail") setSelectedArticleId(null);
  };

  const handleProjectClick = (id: string) => {
    setSelectedProjectId(id);
    setCurrentTab("project_detail");
  };

  const handleArticleClick = (id: string) => {
    setSelectedArticleId(id);
    setCurrentTab("article_detail");
  };

  const renderActiveView = () => {
    switch (currentTab) {
      case "home":
        return (
          <HomeView
            onTabChange={handleTabChange}
            onProjectClick={handleProjectClick}
            onArticleClick={handleArticleClick}
          />
        );
      case "projects":
        return <PortfolioView onProjectClick={handleProjectClick} />;
      case "project_detail":
        const proj = PROJECTS.find((p) => p.id === selectedProjectId);
        if (proj) {
          return (
            <ProjectDetailView
              project={proj}
              onBack={() => handleTabChange("projects")}
            />
          );
        }
        return <PortfolioView onProjectClick={handleProjectClick} />;
      case "articles":
        return <ArticlesView onArticleClick={handleArticleClick} />;
      case "article_detail":
        const art = ARTICLES.find((a) => a.id === selectedArticleId);
        if (art) {
          return (
            <ArticleDetailView
              article={art}
              onBack={() => handleTabChange("articles")}
            />
          );
        }
        return <ArticlesView onArticleClick={handleArticleClick} />;
      case "contact":
        return <ContactView />;
      default:
        return (
          <HomeView
            onTabChange={handleTabChange}
            onProjectClick={handleProjectClick}
            onArticleClick={handleArticleClick}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafc] text-gray-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Dynamic Header navigation */}
      <Header currentTab={currentTab} onTabChange={handleTabChange} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Elegant Universal Footer */}
      <Footer onTabChange={handleTabChange} />
    </div>
  );
}
