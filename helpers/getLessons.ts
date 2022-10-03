import { Lesson } from "../types";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getLessons = async(type: 'tutorials' | 'programs' = 'tutorials') => {
    const lessons: Lesson[] = []
	fs.readdirSync(path.join('lessons', type)).map((file) => {
		const markdownWithMeta = fs.readFileSync(
			path.join('lessons', type, file),
			'utf-8',
		)

		const { data: frontMatter } = matter(markdownWithMeta)
		lessons.push({
			path: type,
			frontMatter,
			slug: `${file.replace('.mdx', '')}`,
		})
	})
	return lessons;
}