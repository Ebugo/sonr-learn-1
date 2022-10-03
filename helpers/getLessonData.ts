import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from "next-mdx-remote/serialize";

export const getLessonData = async(topic: 'tutorials' | 'programs' = 'tutorials', slug: string) => {
	const learn = fs.readFileSync(path.join('lessons', topic, slug + '.mdx'))
	const { data: metaData, content } = matter(learn)
	const mdxSource = await serialize(content, { scope: metaData })

	return mdxSource;
}