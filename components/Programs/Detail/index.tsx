import {Breadcrumb} from "../../Shared/Breadcrumb";

{/* eslint-disable @next/next/no-html-link-for-pages */}

import styles from './styles.module.css';
import {Button, Image, Input} from "../../Shared";
import {CodeBlock, Star, TutorialAccess} from "../../../assets";
import React from "react";
import Link from "next/dist/client/link"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";


const components: any = {
	// code: (props: any) => {
	// 	const [, language] =
	// 		(props.className as string)?.match(/language-(\w+)/) ?? []

	// 	if (language) {
	// 		return (
	// 			<Box position="relative">
	// 				<SyntaxHighlighter language={language} {...props} style={dracula} />
	// 				<CopyToClipboard {...props} />
	// 			</Box>
	// 		)
	// 	}

	// 	return <Code fontSize="md" wordBreak="break-all" {...props} />
	// },
	h1: (props: any) => (
		<h1 className="pb-4" {...props} />
		// <Heading as="h1" apply="mdx.h1" fontSize="4xl" {...props} />
	),
	h2: (props: any) => (
		<h2 {...props} />
		// <Heading as="h2" apply="mdx.h2" fontSize="3xl" {...props} />
	),
	h3: (props: any) => (
		<h3 {...props} />
		// <Heading as="h3" apply="mdx.h3" fontSize="2xl" {...props} />
	),
	h4: (props: any) => (
		<h4 {...props} />
		// <Heading as="h4" apply="mdx.h4" fontSize="xl" {...props} />
	),
	p: (props: any) => (
		<p {...props} />
		// <Text as="p" apply="mdx.p" fontSize="xl" {...props} />
	),
	a: (props: any) =>  (
		<a {...props} />
		// <Text as="a" apply="mdx.a" {...props} />
	),
	ul: (props: any) =>  (
		<ul {...props} />
		// <Text as="ul" apply="mdx.ul" fontSize="xl" {...props} />
	),
	// img: (props: any) => (
	// 	<Image as="img" apply="mdx.image" m="0 auto" alt="" {...props} />
	// ),
	// ContentSideDrawer,
	// ContentCallout,
}


const ProgramsDetail: React.FC<{ mdxSource: MDXRemoteSerializeResult }> = ({ mdxSource }) => {
	return (
		<div className={`${styles["container"]} pb-20`}>
			<section className="flex-grow">
				<div className=" md:hidden flex flex-col gap-3 md:flex-row  mb-10">
					<Breadcrumb previous="Courses" current="Intro Sonr Certification" />
					<Button
						text="Take quiz"
						className="mr-3"
					/>
					<Button variant="light">
							<span className="flex items-center">
								<Star />
								<span className="ml-2">Work on projects</span>
							</span>
					</Button>
				</div>
				<div className={`${styles["side-nav"]} overflow-y-auto pb-10`}>
					<h6>🚀 WELCOME</h6>
					<a href="#" className={styles["visited"]}>About this course</a>

					<div className="flex flex-col">
						<h6>🔵 ABOUT SONR</h6>
						<a href="#" className={styles["visited"]}>Basics of Highway</a>
						<a href="#" className={styles["visited"]}>Access and Authentication</a>
						<a href="#">Schema’s and Data</a>
						<a href="#">Project case study</a>
					</div>

					<div className="flex flex-col">
						<h6>🔵 ABOUT SONR</h6>
						<a href="#">About this course</a>
						<a href="#">About this course</a>
						<a href="#">About this course</a>
						<a href="#">About this course</a>
					</div>

					<div className="flex flex-col">
						<h6>🔵 ABOUT SONR</h6>
						<a href="#">About this course</a>
						<a href="#">About this course</a>
						<a href="#">About this course</a>
						<a href="#">About this course</a>
					</div>
				</div>
			</section>

			<section className="">
				<div className="hidden md:flex flex-col gap-3 md:flex-row items-center md:mb-10">
					<Breadcrumb previous="Courses" current="Intro Sonr Certification" />
					<Button
						text="Take quiz"
						className="mr-3"
					/>
					<Button variant="light">
						<span className="flex items-center">
							<Star />
							<span className="ml-2">Work on projects</span>
						</span>
					</Button>
				</div>
				<div className="">
					<div className={styles["image-container"]}>
						<Image src={TutorialAccess} width={960} height={457} />
					</div>


					{/* <MDXRemote {...mdxSource} components={components} /> */}

					<h2 id="initial" className="mt-10 mb-5">Initial Setup</h2>
					<h6>Sign up to sonr beam</h6>
					<p>We think authentication should be simple, yet secure. The Sonr network uses Webauthn a key-based authentication system utilizing credential systems found on the user operating system to perform key exchanges with our Highway Nodes which then grants you access to the network. The following is a diagram outlining our authentication and registration flows.</p>
					<p>Currently, our implementations of Webauthn use the &lsquo;platform-specific&rsquo; credential options meaning our servers will request your operating system to use whichever authentication method is most native to it. For information on what authentication mechanisims are supported</p>

					{/* Code block	*/}
					<div className={styles["image-container"]}>
						<Image src={CodeBlock} width={954} height={1020} />
					</div>

					<h2 id="run" className="mt-10 mb-5">Running a Hello World testnet</h2>
					<h6>Sign up to sonr beam</h6>
					<p>We think authentication should be simple, yet secure. The Sonr network uses Webauthn a key-based authentication system utilizing credential systems found on the user operating system to perform key exchanges with our Highway Nodes which then grants you access to the network. The following is a diagram outlining our authentication and registration flows.</p>
					<p>Currently, our implementations of Webauthn use the &lsquo;platform-specific&rsquo; credential options meaning our servers will request your operating system to use whichever authentication method is most native to it. For information on what authentication mechanisims are supported</p>

					<div className={`${styles["highlight-text"]} p-5 md:p-8 my-5`}>
						When a user registers their domain will be prompted to supply your user credentials for relating to our generated DID which is then paired with provided PublicKeyCredentials
					</div>

					{/* Code block	*/}
					<div className={styles["image-container"]}>
						<Image src={CodeBlock} width={954} height={1020} />
					</div>


					<p>You can go ahead and verify your project contract address. Your local testnet should be running on 0001:0.0019200.</p>
					<p>Hope you found this tutorial valuable? Drop a rating of a scale of 1 - 10 on how likely you are to recommend our learning resources to your colleagues and pals. Continue Learning <Link href="#">here</Link>.</p>

				</div>
				<div className="mt-10 md:mt-24 ">
					<div className={`${styles["submit-project"]} flex relative p-5 py-10 xl:p-16`}>
						<div className="md:w-4/6 flex flex-col">
							<h4>Submit your project url</h4>
							<form className="flex flex-col md:flex-row items-center my-3">
								<Input
									name="project_link"
									placeholder="Project link"
									className={`md:mr-8 mb-5 md:mb-0 ${styles["submit-project-input"]}`}
								/>
								<Button
									type="submit"
									text="Submit"
								/>
							</form>
							<p>0/4 Projects submitted</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export {ProgramsDetail};
