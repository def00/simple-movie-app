export default async function (data, dataSerializer) {
  return await Promise.all(data.map((obj) => dataSerializer(obj)))
}
