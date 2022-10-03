import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../../components';
import React from "react";
import { TutorialsList } from "../../components/Tutorials";
import { Lesson, LessonProps } from '../../types';
import { getLessons } from '../../helpers';


const Tutorials: NextPage<LessonProps> = ({ lessons }) => {
	return (
		<AppLayout>
			<div className="container md:px-16 lg:px-28">
				<Head>
					<title>Sonr Learn | Tutorials</title>
				</Head>

				<TutorialsList lessons={lessons} />
			</div >
		</AppLayout>
	);
};

export default Tutorials;

export const getStaticProps = async () => {
	return {
		props: {
			lessons: await getLessons('tutorials'),
		},
	}
}
