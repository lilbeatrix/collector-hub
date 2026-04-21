import { faker } from '@faker-js/faker';

export type Photocard = {
  id: string;
  memberName: string;
  albumName: string;
  condition: 'Mint' | 'Good' | 'Fair' | 'Damaged';
  price: number;
};

const soloAlbums = {
  'Irene': ['Biggest Fan'],
  'Seulgi': ['28 Reasons'],
  'Wendy': ['Like Water', 'Wish You Hell'],
  'Joy': ['Hello'],
  'Yeri': ['Letter', 'Yeri Mini Album'],
};

// Create a specific type from the object keys
type MemberName = keyof typeof soloAlbums;

// Cast Object.keys to our specific MemberName array type
const members = Object.keys(soloAlbums) as MemberName[];

export const generateMockPhotocards = (count: number): Photocard[] => {
  return Array.from({ length: count }, () => {
    const memberName = faker.helpers.arrayElement(members);
    
    const albumName = faker.helpers.arrayElement(soloAlbums[memberName]);

    return {
      id: faker.string.uuid(),
      memberName: memberName,
      albumName: albumName,
      condition: faker.helpers.arrayElement(['Mint', 'Good', 'Fair', 'Damaged']),
      price: faker.number.int({ min: 150, max: 5000 }),
    };
  });
};