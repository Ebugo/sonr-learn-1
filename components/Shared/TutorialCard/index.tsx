/** @format */

import React from "react";
import styles from "./styles.module.css";
import {Image} from "../Image";
import {useRouter} from "next/router";
import {Tag} from "../Tag";
import { Tutorial1 } from "../../../assets";

interface Props {
  title: string;
  author: string;
  duration: string;
  image: any;
  date: string;
  slug: string;
  tags: string[];
}


const TutorialCard: React.FC<Props> = ({ title, author, duration, image, tags, date, slug }) => {
    const { push } = useRouter();


  return (
      <div
          className={`${styles["container"]} flex flex-col mx-auto`}
        onClick={()=>push(`/tutorials/${slug}`)}
      >
        <div>
          <Image src={image[0] || Tutorial1} width={397} height={282.53} />
        </div>
        <div className="flex-grow flex flex-col p-5 lg:px-8 xl:px-10 md:py-6">
            <div className="flex flex-wrap gap-3 w-full mb-2">
                <Tag text="Consensus Mechanism" color="primary" />
                <Tag text="Blockchain" color="secondary" />
                <Tag text="Tutorial" color="tertiary" />
            </div>
          <h4>{title}</h4>
          <span className="mt-5">{duration || "5 mins"} Read</span>
          <div className={`${styles["description"]} mt-auto flex items-center`}>
            <span className="flex items-center">
                <span className={`${styles["avatar"]} mr-3`}>
                    {author && typeof author === "string" ? author.split(" ").map(a=>a[0]).join("") : ""}
                </span>
                {author}
            </span>
              <span className="ml-auto">{date}</span>
          </div>
      </div>
    </div>
  );
};

export { TutorialCard };
