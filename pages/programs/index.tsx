import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from '../../components';
import React from "react";
import {ProgramsList} from "../../components";
import { getLessons } from '../../helpers';
import { LessonProps } from '../../types';


const Programs: NextPage<LessonProps> = ({ lessons }) => {
	console.log({lessons})
	return (
		<AppLayout>
			<div className="container md:px-16 lg:px-28">
				<Head>
					<title>Sonr Learn | Tutorials</title>
				</Head>

				<ProgramsList lessons={lessons} />
			</div >
		</AppLayout>
	);
};

export default Programs;

export const getStaticProps = async () => {
	return {
		props: {
			lessons: await getLessons('programs'),
		},
	}
}
