import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../../components';
import React from "react";
import {ProgramsDetail} from "../../components";
import { getLessonPathData } from '../../helpers/getLessonPathData';
import { getLessonData } from '../../helpers/getLessonData';
import { LessonDetailProps } from '../../types';


const ProgramDetail: NextPage<LessonDetailProps> = ({ mdxSource, slug }) => {
	return (
		<AppLayout showFooter={false}>
			<div className="container md:px-16 lg:px-28">
				<Head>
					<title>Sonr Learn | Tutorials</title>
				</Head>

				<ProgramsDetail mdxSource={mdxSource} />
			</div >
		</AppLayout>
	);
};

export default ProgramDetail;

export const getStaticPaths = async () => {
	return {
		paths: await getLessonPathData('programs'),
		fallback: false, // if access path/slug that doesn't exist -> 404 page
	}
}

export const getStaticProps = async ({ params: { slug } }: any) => {
	const lesson = 'programs';
	// const mdxSource = await getLessonData(lesson, slug);
	// console.log({ mdxSource, lesson, slug })
	// return { props: { mdxSource: mdxSource, lesson, slug } }
	return {props:{}}
}
