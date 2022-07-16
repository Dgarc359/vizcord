import fetch from "node-fetch";

export const requestCSM = async () => {
  const html = await fetch('https://www.viz.com/shonenjump/chapters/chainsaw-man')
    .then((data) => data.text())
    .catch(err => console.error(err))

  return html;
}
