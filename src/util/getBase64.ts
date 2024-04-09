import { getPlaiceholder } from 'plaiceholder';

const getBase64 = async (src: string) => {
  // const buffer = await fs.readFile(path.join(src));
  const buffer = await fetch(src).then(async res => Buffer.from(await res.arrayBuffer()));

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export default getBase64;
