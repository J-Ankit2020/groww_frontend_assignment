export default async function (url) {
  try {
    const data = await fetch(url);
    const res = await data.json();
    return res;
  } catch (error) {
    return { error: 'Failed to fetch data' };
  }
}
