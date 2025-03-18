import { Section } from "@/app/components/Section";
import * as React from "react";

interface Props {}

const SoundCloud: React.FC<Props> = ({}) => {
  return (
    <Section>
      <iframe
        width="100%"
        height="450"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1987166092&color=%2327285a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          textDecoration: "none",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/independentrecordsstudio"
          title="Independent Records"
          target="_blank"
          style={{
            color: "#cccccc",
            textDecoration: "none",
          }}
        >
          Independent Records
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/independentrecordsstudio/sets/independent-records-web"
          title="Independent Records Web"
          target="_blank"
          style={{
            color: "#cccccc",
            textDecoration: "none",
          }}
        >
          Independent Records Web
        </a>
      </div>
    </Section>
  );
};

export default SoundCloud;
