import { Lesson } from "../types";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getLessons = async(topic: 'tutorials' | 'programs' = 'tutorials') => {
    const lessons: Lesson[] = []
	fs.readdirSync(path.join('lessons', topic)).map((file) => {
		const markdownWithMeta = fs.readFileSync(
			path.join('lessons', topic, file),
			'utf-8',
		)

		const { data: frontMatter } = matter(markdownWithMeta)
		lessons.push({
			path: topic,
			frontMatter,
			slug: `${file.replace('.mdx', '')}`,
		})
	})
	return lessons;
}