export default async function (data, dataSerializer) {
  if (typeof dataSerializer !== 'function' || !Array.isArray(data)) {
    throw new Error('Wrong argument provided')
  }
  return await Promise.all(data.map((obj) => dataSerializer(obj)))
}
