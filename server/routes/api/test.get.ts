export default eventHandler(async (event) => {
  const tmp = process.versions.node
  const fetchResponse = await $fetch('https://worldtimeapi.org/api/timezone/Asia/Tokyo')

  return {
    nodeVersion: tmp,
    currentDate: new Date().toISOString(),
    fetchResponse: fetchResponse,
  };
});
