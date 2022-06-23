export async function getFetchData(url, setArr) {
  const res = await fetch(url);
  const result = await res.json();
  setArr(result);

  console.log('result', result);
}
