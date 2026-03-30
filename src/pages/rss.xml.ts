import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { siteDescription, siteTitle } from '../site.config';
import { isPublishedPost, sortByPubDateDesc } from '../utils/blog';

export const GET: APIRoute = async (context) => {
	const posts = (await getCollection('blog')).filter(isPublishedPost).sort(sortByPubDateDesc);

	return rss({
		title: siteTitle,
		description: siteDescription,
		site: context.site ?? 'https://happilyeverafter95.github.io',
		items: posts.map((post) => ({
			link: `/blog/${post.id}/`,
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
		})),
		customData: '<language>en-us</language>',
	});
};
