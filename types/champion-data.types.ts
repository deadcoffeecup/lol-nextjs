export type ChampionType = {
  blurb: string;
  id: string;
  image: ChampionImageType;
  info: ChampionInfoType;
  key: string;
  name: string;
  partype: string;
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
  };
  tags: string[];
  title: string;
  version: string;
};

interface ChampionInfoType {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}
interface ChampionImageType {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
