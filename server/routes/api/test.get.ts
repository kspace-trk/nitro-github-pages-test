export default eventHandler((event) => {
  const tmp = process.versions.node
  return {
    nodeVersion: tmp,
    currentDate: new Date().toISOString(),
  };
});
