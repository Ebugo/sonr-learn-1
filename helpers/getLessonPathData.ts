import fs from 'fs';
import path from 'path';

export const getLessonPathData = async(topic: 'tutorials' | 'programs' = 'tutorials') => {
    const trackDir = path.join('lessons');
	const allPaths: {
		params: {
			lesson: string
			slug: string
		}
	}[] = []
	const topicDirectory = path.join(trackDir, topic)
	const files = fs.readdirSync(topicDirectory)

	files.forEach((fileName: string) => {
		const path = {
			params: {
				lesson: topic,
				slug: fileName.replace('.mdx', ''),
			},
		}

		allPaths.push(path)
	})

	return allPaths;
}