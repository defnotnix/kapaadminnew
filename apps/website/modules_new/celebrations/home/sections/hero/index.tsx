"use client";

import { MotionHeroText } from "@/animation/svg/hero.celebrate";
//styles
import cx from "clsx";
import classes from "./hero.module.css";
//svg
import { MotionHeroFlower } from "@/animation/svg/hero.flower";

export function SectionHero({ sectionData }: any) {
  return (
    <>
      <section className={classes.root}>
        <div className={cx(classes.video_shadow, "has_clip")}></div>
        <div className={cx(classes.video_container, "has_clip")}>
          <iframe
            src={`${sectionData?.link}&autoplay=1&loop=1&controls=0&mute=1&hd=1&start=0`}
            title="YouTube video player"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={classes.hero_video}
          />
        </div>
      </section>

      <section className={classes.flower_content}>
        <MotionHeroFlower />
      </section>
    </>
  );
}
