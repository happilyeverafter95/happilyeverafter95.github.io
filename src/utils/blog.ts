import type { CollectionEntry } from 'astro:content';

export function isPublishedPost(entry: CollectionEntry<'blog'>): boolean {
	if (import.meta.env.PROD && entry.data.draft) return false;
	return true;
}

export function sortByPubDateDesc(
	a: CollectionEntry<'blog'>,
	b: CollectionEntry<'blog'>,
): number {
	return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

export function formatPostDate(d: Date): string {
	return d.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}
