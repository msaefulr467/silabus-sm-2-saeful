function cutCube(volume, n) {
  const cubeRoot = Math.cbrt(volume);

  return (
    Number.isInteger(cubeRoot) && Number.isInteger(cubeRoot / Math.cbrt(n))
  );
}