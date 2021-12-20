export type Realm = "os" | "user";

export interface Multiverse {
  os: {
    name: string;
    family: "unix" | "windows";
    distro: string;
    baseDistro: string;
  };

  user: {
    name: string;
    username: string;
    home: string;
  };
}

export type Lambda = () => boolean;

export interface IGodAction {
  name: string;
  realm: Realm;
  sudo: boolean;
  when: Lambda;
}

export class Odim {}
