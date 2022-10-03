import styles from './styles.module.css';
import { tutorials } from "../../__mock__";
import { Button, TutorialCard } from "../Shared";
import React from "react";
import { useRouter } from "next/router";
import { Lesson } from '../../types';


const SuggestedTutorials = ({ header, lessons }: { header: string, lessons: Lesson[] }) => {
	const { push } = useRouter();

	return (
		<section className={`container ${styles["tutorials-container"]}`}>
			<h3 className="mb-10">{header}</h3>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
				{lessons.map(({ frontMatter: { title, author, duration, icons, tags, date }, path, slug }, i: number) => (
					<TutorialCard key={i} title={title} author={author} duration={duration} image={icons} date={date} tags={tags} slug={slug} />
				))}
			</div>
			<div className="py-12">
				{/* <Button
					className="px-10 mx-auto md:mt-8"
					onClick={() => push("/tutorials")}
				>
					<span>Browse all tutorials</span>
				</Button> */}
			</div>
		</section>
	);
};

export { SuggestedTutorials };
