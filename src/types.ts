/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  tags: string[];
  heroImage: string;
  client: string;
  role: string;
  duration: string;
  techStack: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  screenshots: string[];
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  views: number;
  summary: string;
  contentMarkdown?: string;
  // We can also support content as a JSX renderer or direct html
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
