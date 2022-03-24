import { GlobalFlags } from '../types';
import install from './install-cmd';
import list from './list-cmd';
import repo from './repo-cmd';
import registry from './registry-cmd'


export const getAliasedGlobalFlags = (flags: GlobalFlags) => {
  const result: { [key: string]: string } = {}
  for (let [key, value] of Object.entries(flags)) {
    const k: string = "--" + key;
    result[k] = value as string;
  };
  return result;
};

export default {
  install,
  list,
  repo,
  registry,
};
