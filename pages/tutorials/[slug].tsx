import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../../components';
import React from "react";
import { TutorialsDetail } from "../../components/Tutorials";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { LessonDetailProps } from '../../types';
import { getLessonPathData } from '../../helpers/getLessonPathData';
import { getLessonData } from '../../helpers/getLessonData';


const TutorialDetail: NextPage<LessonDetailProps> = ({ mdxSource, slug }) => {
	return (
		<AppLayout>
			<div className="container md:px-16 lg:px-28">
				<Head>
					<title>Sonr Learn | Tutorials</title>
				</Head>

				<TutorialsDetail mdxSource={mdxSource} />
			</div >
		</AppLayout>
	);
};

export default TutorialDetail;

export const getStaticPaths = async () => {
	return {
		paths: await getLessonPathData('tutorials'),
		fallback: false, // if access path/slug that doesn't exist -> 404 page
	}
}

// export const getStaticProps = async ({ params }: any) => {
// export const getStaticProps = async ({ params: { lesson, slug } }: any) => {
export const getStaticProps = async ({ params: { slug } }: any) => {
	const lesson = 'tutorials';
	const mdxSource = await getLessonData(lesson, slug);
	console.log({ mdxSource, lesson, slug })
	return { props: { mdxSource: mdxSource, lesson, slug } }
}
