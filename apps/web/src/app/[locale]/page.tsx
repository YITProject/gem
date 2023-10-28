"use client";
import Image from "next/image";
import { type RotationPool as RotationPoolClass } from "godown";
import { BaseButton, RotationPool } from "godown/react";
import { css, tagged } from "powerstyl";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface RotationDataType {
  id: string;
  name: string;
  comment: number;
  label: string[];
  author: string;
  issue: string;
}
export default function Page(): JSX.Element|null {
  const roRef = useRef<RotationPoolClass | null>(null);
  const [data, setData] = useState<Partial<RotationDataType>[]>();
  useEffect(() => {
    setData([
      {
        id: "gta5",
        name: "Grand Theft Auto V",
        comment: 0.98,
        label: ["crime", "openWorld", "act"],
        author: "Rockstar North",
        issue: "Rockstar Games",
      },
      {
        id: "rdr2",
        name: "Red Dead Redemption 2",
        comment: 0.87,
        label: ["crime", "openWorld", "act"],
        author: "Rockstar San Diego",
        issue: "Rockstar Games",
      },
      {
        id: "bf5",
        name: "Battlefield 5",
        comment: 0.4,
        label: ["fps"],
        author: "DICE",
        issue: "Electronic Arts",
      },
      {
        id: "cs",
        name: "Counter Strike 2",
        label: ["fps"],
        comment: 0.07,
        author: "Valve",
      },
      {
        id: "nba2k24",
        name: "NBA 2K24",
        label: ["sports"],
        comment: 0.31,
        author: "2K Sports",
      },
      {
        id: "loveisallaround",
        name: "完蛋我被美女包围了",
        label: ["sexy", "story"],
        comment: 0.77,
        author: "Intiny",
      },
    ]);
  }, []);
  if (data) {
    return (
      <RotationPool ref={roRef} width="100%">
        {data.map((i: RotationDataType) => (
          <Item {...i} key={i.id} />
        ))}
      </RotationPool>
    );
  }
  return null
}

function Item(props: RotationDataType) {
  return (
    <div className="rotation-item">
      <Image
        alt=""
        className="rotation-image"
        height={1080}
        key={props.id}
        priority
        src={`/resources/${props.id}.webp`}
        width={1920}
      />
      <Details {...props} />
    </div>
  );
}
const comments = [0, 0.2, 0.5, 0.8, 0.95];
const Text = tagged`span``
    margin: 6px;
    `;
const Section = tagged`section``
    margin: 0.6em;
`;
function Details(props: RotationDataType) {
  const t = useTranslations("(global)");
  let commentIndex = "";
  // eslint-disable-next-line @typescript-eslint/no-for-in-array
  for (const c in comments) {
    if (props.comment >= comments[c]) {
      commentIndex = c;
    }
  }
  return (
    <div className="rotation-details">
      <h3
        style={css`
          width: fit-content;
          font-size: 2em;
        `}
      >
        {props.name}
      </h3>
      <main>
        <div>
          {props.label.map((i) => (
            <BaseButton
              key={i}
              style={css`
                margin: 8px;
              `}
            >
              <div
                style={css`
                  margin: 6px 12px;
                `}
              >
                {t(i)}
              </div>
            </BaseButton>
          ))}
        </div>
        <div
          style={css`
            width: 100%;
          `}
        >
          <Section>
            {t("developer")}:<Text>{props.author}</Text>
          </Section>
          <Section>
            {t("issue")}:<Text>{props.issue || props.author}</Text>
          </Section>
          <Section>
            {t("commentRate")}:<Text>{(props.comment * 100).toFixed()}%</Text>
            <span
              className={`comment${commentIndex}`}
              style={css`
                margin: 0.5em;
              `}
            >
              {t(`comment${commentIndex}`)}
            </span>
          </Section>
        </div>
      </main>
    </div>
  );
}
