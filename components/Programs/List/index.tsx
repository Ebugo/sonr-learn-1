import React from "react";
import {useRouter} from "next/router";
import Head from 'next/head';
import styles from './styles.module.css';
import {Button, ProgramCard} from "../../";
import {BannerIcon, Star} from "../../../assets";
import {UpcomingEvents} from "../../UpcomingEvents";
import {programs} from "../../../__mock__/programs";
import { LessonProps } from "../../../types";

const ProgramsList: React.FC<LessonProps> = ({ lessons }) => {
	const { push } = useRouter();

	return (
		<div className={styles["container"]}>
			<Head>
				<title>Sonr Learn | Home</title>
			</Head>
			<section className={`${styles["banner"]} flex relative p-5 md:p-10 xl:p-16 overflow-hidden`}>
				<div className="md:w-4/6">
					<h1>Learn about Sonr Technologies using a
						project based learning curriculum</h1>
					<Button className="mt-20 md:mt-10" onClick={()=>push("#start")}>
							<span className="flex items-center">
								<Star />
								<span className="ml-2">Start here, for beginners</span>
							</span>
					</Button>
				</div>
				<div className="absolute">
					<BannerIcon />
				</div>
			</section>

			<section id="start" className="py-5 md:py-12">
				{lessons.map(({ frontMatter: { title, author, duration, icons, tags, date }, path, slug }, i: number) => (
					<div key={i}>
						<ProgramCard title={title} header={"header"} id={i} image={icons} desc={"desc"} tags={tags} slug={slug} date={date} />
						<hr className={`${lessons && i!== lessons.length-1 ? "block" : "hidden"} mt-14 mb-5 bg-grey-100`} />
					</div>
				))}
			</section>

			<UpcomingEvents />
		</div >
	);
};

export {ProgramsList};
