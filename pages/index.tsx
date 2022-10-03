import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';
import { AppLayout, Button, Image, Input, Tag, TechCard } from "../components";
import {
	ArrowCircleRight, ArrowRight,
	Award,
	Banner,
	Book, Box, Build,
	Community,
	Grid,
	Identity, Learn,
	P2p,
	Screenshot,
	Screenshot2, Star,
	Zkp
} from "../assets";
import { tutorials, events } from "../__mock__";
import React, { createRef, Ref, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UpcomingEvents } from "../components/UpcomingEvents";
import { SuggestedTutorials } from "../components/SuggestedTutorials";
import FlickityComponent from 'react-flickity-component';
import "flickity/css/flickity.css";
import { getLessons } from '../helpers';
import { LessonProps } from '../types';

const flickityOptions = {
	// initialIndex: 0,
	// initialIndex: '.is-initial-select',
	freeScroll: true,
	// wrapAround: true,
	// autoPlay: false,
	// pauseAutoPlayOnHover: true,
	contain: true,
	prevNextButtons: false,
	pageDots: false,
	adaptiveHeight: true
};


const Home: NextPage<LessonProps> = ({ lessons }) => {
	//state management
	const [activeTechCard, setActiveTechCard] = useState(0);

	const { push } = useRouter();

	let toggle: any = null;

	const flickityRef: Ref<any> = createRef();

	//constants
	const Flickity: any = FlickityComponent;

	const technologies = [
		{
			title: "Peer-to-Peer technology",
			icon: <P2p />,
			desc: "Learn about the tool of the art of, \n" +
				"This is a junk content and will be replaced",
			image: Screenshot
		},
		{
			title: "Decentralized Identity",
			icon: <Identity />,
			desc: "Learn about the tool of the art of, \n" +
				"This is a junk content and will be replaced",
			image: Screenshot2
		},
		{
			title: "Zero-knowledge proof",
			icon: <Zkp />,
			desc: "Learn about the tool of the art of, \n" +
				"This is a junk content and will be replaced",
			image: Screenshot
		},
	]

	//Handler
	function handleTechsToggle() {
		// clearInterval(toggle);
		let nextCard = activeTechCard + 1;
		if (nextCard > technologies.length - 1) {
			nextCard = 0;
		}
		toggle = setTimeout(() => setActiveTechCard(nextCard), 2000)
			;
	}

	const handleToggle = (cardIndex: number) => {
		setActiveTechCard(cardIndex);
		clearTimeout(toggle);
	}

	const handleNext = () => {
		flickityRef.current.flkty.next();
	};

	const handlePrevious = () => {
		flickityRef.current.flkty.previous();
	};


	useEffect(() => {
		handleTechsToggle();
	}, [activeTechCard])


	// @ts-ignore
	// @ts-ignore
	// @ts-ignore
	// @ts-ignore
	// @ts-ignore
	return (
		<AppLayout>
			<div className={styles["container"]}>
				<Head>
					<title>Sonr Learn | Home</title>
				</Head>
				<section className={`${styles["banner"]} container md:px-16 lg:px-28 flex flex-col md:flex-row justify-center`}>
					<div className="md:mt-16 lg:mt-28">
						<div className="flex flex-wrap gap-3 w-full">
							<Tag text="Learn" color="primary" size="medium" />
							<Tag text="Build" color="tertiary" size="medium" />
							<Tag text="Share" color="green" size="medium" />
							<Tag text="Earn" color="secondary" size="medium" />
						</div>
						<h1 className="mb-2 my-5">Learn how to build in
							a true Decentralized
							Web</h1>
						<p className="mb-5">Learn to build for many use cases in the user controlled internet in one place.</p>

						<div className={styles["subscribe"]}>
							<form className="flex flex-col md:flex-row mt-auto md:mt-8">
								<div className={styles["subscribe-input"]}>
									<Input
										name="email"
										placeholder="Email Address"
										className={`md:mr-3 mb-5 md:mb-0`}
									/>
								</div>
								<Button
									type="submit"
									text="Subscribe"
								/>
							</form>
							<p className="my-5">Subscribe to get our certification course emailed to you daily</p>
						</div>
					</div>
					<div className="">
						<Image
							height={545.28}
							width={629.82}
							src={Banner}
							alt="banner"
							priority={true}
						/>
					</div>
				</section>

				<section className="my-10 md:my-20 py-10 md:py-20 md:pb-5 bg-blue-100">
					<div className={`${styles["tutorials-sample-container"]} container pb-12`}>
						<div className={`${styles["tutorials-sample"]} container pl-0 pr-0 flex flex-col xl:flex-row`}>
							<div>
								<h3 className="mb-10">Learn about the different tools and technologies in the Sonr Ecosystem</h3>

								<div className={`${styles["tutorials-sample-control"]} flex flex-wrap xl:flex-col mb-10 xl:mb-0`}>
									{technologies.map(({ title, desc, icon }, i) => (
										<TechCard
											id={i}
											key={i}
											title={title}
											desc={desc}
											icon={icon}
											activeTechCard={activeTechCard}
											handleClick={handleToggle}
										/>
									))}
								</div>
							</div>
							<div className="hidden md:block">
								<Image
									height={651}
									width={978}
									src={technologies[activeTechCard]?.image || Screenshot}
									alt="tutorials"
									className={""}
									priority={true}
								/>
							</div>
						</div>
					</div>
					<div className="pb-12">
						<Button
							className="px-5 mx-auto"
							onClick={() => push("#")}
						>
							<span>Start tutorials</span>
						</Button>
					</div>
				</section>

				<section className={`container my-10 md:my-20 ${styles["programs-container"]}`}>
					<h3 className="mb-10 text-center">Featured Programs</h3>

					<div className="grid grid-cols-2 gap-6">
						<div className="col-span-2 px-5 md:px-10 py-8 md:py-14 bg-blue-500">
							<Button className="ml-auto mb-5 md:mb-0">
								<span className="flex items-center">
									<ArrowRight />
									<span className="ml-2">Become a Certified Sonr Developer</span>
								</span>
							</Button>
							<div className={styles["icon-container"]}><Award /></div>
							<h5 className="mt-5 mb-2">Sonr Certification - <span>Missions</span></h5>
							<p>This is a learning journey that affords you a defined scope of learning while you build a project as you learn. <br />
								You start from basic blockchain courses and dive deeper into the Sonr Ecosystem. <br />
								You get certified and receive a reward in form(token, Non-fungible tokens, NFT or monetary).</p>
							<div className="mt-5 md:mt-10 flex gap-5 flex-col md:flex-row">
								<span className="flex items-center gap-2"><Box /> Introductory Blockchain Developer Certification</span>
								<span className="flex items-center gap-2"><Box /> Intermediate Sonr Developer Certification</span>
								<span className="flex items-center gap-2"><Box /> Master Sonr Developer Certification</span>
							</div>
						</div>

						<div className="col-span-2 md:col-span-1 px-5 md:px-10 py-8 md:py-14 bg-red-500">
							<div className={styles["icon-container"]}><Book /></div>
							<h5 className="mt-2 mb-5 md:mt-5 md:mb-10">Tutorials</h5>
							<p>&quot;Show me the concept in codes&quot; kind of learning. <br />
								This involves building basic projects illustrating a particular
								concept in the Sonr Ecosystem.</p>
						</div>
						<div className="col-span-2 md:col-span-1 px-5 md:px-10 py-8 md:py-14 bg-green-500 relative">
							<Learn />
							<Build />
							<div className={styles["icon-container"]}><Grid /></div>
							<h5 className="mt-2 mb-5 md:mt-5 md:mb-10">Hackathons</h5>
							<p>This includes online and offline Hackathons organized for
								developers in different regions across the globe.</p>
						</div>
					</div>
				</section>

				<SuggestedTutorials
					header="All things Decentralization, Building in an IBC enabled chain, and the future of the web."
					lessons={lessons}
				/>

				<section className={`container ${styles["community-container"]}`}>
					<h3 className="my-8 md:my-10">Participate in our community bounty programs</h3>
					<div className={`${styles["community-container-scroll"]} gap-10 bg-blue-700 p-5 md:p-10`}>
						<Flickity
							ref={flickityRef}
							className={"carousel"} // default ''
							elementType={"div"} // default 'div'
							options={flickityOptions} // takes flickity options {}
							disableImagesLoaded={false} // default false
							reloadOnUpdate // default false
							static={true}
						>
							{
								[1, 2, 3, 4, 5, 6, 7, 8, 9].map((community, i) => (
									<div
										key={i}
										className={`${styles["image-container"]} ${i <= 8 && " pr-5 "}`}
									>
										<Image
											height={290}
											width={408}
											src={Community}
											alt="community"
											className={""}
											priority={true}
										/>
									</div>
								))
							}
						</Flickity>
					</div>
					<div className="flex justify-end pt-10">
						<span className={styles["arrow-container"]} onClick={handlePrevious}>
							<ArrowCircleRight onClick={handlePrevious} />
						</span>
						<span className={`ml-20 ${styles["arrow-container"]}`} onClick={handleNext}>
							<ArrowCircleRight onClick={handleNext} />
						</span>
					</div>
				</section>

				<hr className="container md:px-16 lg:px-28 my-10 md:my-20" />

				<UpcomingEvents />
			</div >
		</AppLayout>
	);
};

export default Home;

export const getStaticProps = async () => {
	return {
		props: {
			lessons: await getLessons('tutorials'),
		},
	}
}
