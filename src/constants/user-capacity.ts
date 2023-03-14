export const UserCapacity = {
  FlipMachine: 500,
  ETFBonds: Infinity,
  ETFStock: Infinity,
  LemonadeStand: 1000,
  IceCreamTruck: 500,
  House: 100,
  TownHouse: 50,
  Mansion: 20,
  IndustrialSpace: 10,
  HotelSkyscraper: 5,
  BulletSpeedSkyRailway: 1,
} as const;
export type UserCapacity = (typeof UserCapacity)[keyof typeof UserCapacity];
