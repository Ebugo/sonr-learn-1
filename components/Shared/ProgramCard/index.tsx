/** @format */

import React from "react";
import styles from "./styles.module.css";
import {Image} from "../Image";
import {ArrowCircleRight, Consensus, Program1} from "../../../assets";
import {Tag} from "../Tag";
import {Button} from "../Button";
import {useRouter} from "next/router";

interface Props {
  title: string;
  header: string;
  desc: string;
  image: any;
  id: number;
  tags?: string[];
  date?: string;
  slug: string;
}


const ProgramCard: React.FC<Props> = ({ title, header, desc, image, id, date, slug }) => {
  const { push } = useRouter();


    return (
        <section className={styles["container"]}>
          <h3 className="py-8">{title}</h3>
          <div className={`${styles["program-body"]} flex flex-col md:flex-row`}>
            <div>
            {/* <Image src={image[0] || Program1} width={582} height={470} /> */}
            </div>
            <div className="flex-grow flex flex-col md:flex-row p-5 xl:p-16">
              <div className="flex flex-col">
                <div className="flex flex-wrap gap-3 w-full mb-3 md:mb-5">
                  <Tag text="Beginner" color="primary" />
                  <Tag text="Blockchain" color="secondary" />
                  <Tag text="Project-based learning" color="tertiary" />
                </div>
                <h3>{header}</h3>
                <span className={`mt-5 ${styles["sub-text"]}`}>{desc}</span>
                <div className="py-10">
                  <Button
                      className="px-5"
                      onClick={() => push(`/programs/${slug}`)}
                  >
                    <span>Start Learning</span>
                  </Button>
                </div>

                <div className={`${styles["description"]} mt-auto flex items-center`}>
                  <strong className="ml-auto">Last updated: 28th June, 2022</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export { ProgramCard };
