import { MetadataRoute } from 'next';
import { portfolioProjects } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aveniqdev.com';
  const currentDate = new Date();

  const caseStudyUrls = portfolioProjects.map((project) => ({
    url: `${baseUrl}/work/${project.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...caseStudyUrls,
  ];
}
