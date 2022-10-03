import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface Lesson {
    path: string
    frontMatter: any
    slug: string
}

export interface LessonProps {
    lessons: Lesson[]
}

export interface LessonTrackMap {
    [key: string]: Lesson[]
}


export interface LessonDetailProps {
    frontMatter: object
    mdxSource: MDXRemoteSerializeResult
    slug: string
}

export type LessonConnection = Record<string, string>
