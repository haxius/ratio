const stringToSpans = (s: string): string =>
  Array.from(s)
    .map((s) => `<span>${s}</span>`)
    .join("");

export default stringToSpans;
