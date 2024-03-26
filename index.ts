const TEXT_COLORS = ["#fff", "#fff", "#fff", "#fff", "#000"];

const BACKGROUND_COLORS = [
  "#363636",
  "#FC3F1D",
  "#f56788",
  "#15c6cf",
  "#faeedd",
];

function getStyled(tags: string[]) {
  return tags.map((tag, index) => {
    const borderColor = "#76c42b";
    const textColor = TEXT_COLORS[index % TEXT_COLORS.length];
    const backgroundColor = BACKGROUND_COLORS[index % BACKGROUND_COLORS.length];

    const result = [
      `background-color:${backgroundColor};`,
      `border-top:1px solid ${borderColor};`,
      `border-bottom:1px solid ${borderColor};`,
      `color:${textColor};`,
      `font-size:11px;`,
      `adding:2px 3px;`,
    ];

    if (!index) {
      result.push(
        `font-weight:bold;`,
        `border-top-left-radius:5px;`,
        `border-left:1px solid ${borderColor};`
      );
    }

    if (index === tags.length - 1) {
      result.push(
        `border-bottom-right-redius:5px;`,
        `border-right:1px solid ${borderColor};`
      );
    }

    return result.join("");
  });
}

export const bebrex = {
  table({ tags, details }) {
    const nonEmptyTags = tags.filter(Boolean);
    const preparedCSS = getStyled(nonEmptyTags);

    console.groupCollapsed(`%c ${nonEmptyTags.join(" %c ")} `, ...preparedCSS);

    console.table(details);
    console.groupEnd();
  },

  trace({ tags, details }) {
    const nonEmptyTags = tags.filter(Boolean);
    const preparedCSS = getStyled(nonEmptyTags);

    console.groupCollapsed(`%c ${nonEmptyTags.join(" %c ")} `, ...preparedCSS);

    console.trace(details);
    console.groupEnd();
  },

  entries({ tags, details }) {
    const nonEmptyTags = tags.filter(Boolean);
    const preparedCSS = getStyled(nonEmptyTags);

    console.groupCollapsed(`%c ${nonEmptyTags.join(" %c ")} `, ...preparedCSS);

    Object.entries(details).forEach(([key, value]) =>
      console.info(`%c${key}:`, "color: #1FBEC7FF;", value)
    );

    console.groupEnd();
  },

  push({ tags, details }) {
    const nonEmptyTags = tags.filter(Boolean);
    const preparedCSS = getStyled(nonEmptyTags);

    console.info(
      `%c ${nonEmptyTags.join(" %c ")} `,
      ...preparedCSS,
      "\n",
      details
    );
  },

  hide({ tags, details }) {
    const nonEmptyTags = tags.filter(Boolean);
    const preparedCSS = getStyled(nonEmptyTags);

    console.groupCollapsed(`%c ${nonEmptyTags.join(" %c ")} `, ...preparedCSS);
    console.info(details);
    console.groupEnd();
  },

  noDetails({ tags }) {
    const nonEmptyTags = tags.filter(Boolean);
    const preparedCSS = getStyled(nonEmptyTags);

    console.info(`%c ${nonEmptyTags.join(" %c ")} `, ...preparedCSS);
  },
};
