import styles from './styles.module.css';
import {events} from "../../data";
import {EventCard} from "../Shared";
import React from "react";


const UpcomingEvents = () => {
	return (
		<section className={`md:container ${styles["events-container"]} pb-10`}>
			<h3 className="my-8 md:my-10">Upcoming events</h3>
			<div className="grid md:grid-cols-3 gap-5 xl:gap-10 items-center">
				{events.map(({ title, desc, image, time, date}, i) => (
					<EventCard key={i} title={title} desc={desc} time={time} image={image} date={date} />
				))}
			</div>
		</section>
	);
};

export { UpcomingEvents };
