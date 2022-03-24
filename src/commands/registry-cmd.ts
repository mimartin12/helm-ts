import { RegistryLoginFlags } from "../types";
import { getAliasedGlobalFlags } from "./helm-cmd";
import { runCommand, buildFlagsString } from "../utils/helpers";

const getAliasedRegistryLoginFlags = ({
  username = "",
}: RegistryLoginFlags = {}) => ({
  "--username": username,
});

const buildHelmRegistryLoginCmd = (
  url: string,
  password: string,
  flags: RegistryLoginFlags
) => {
  const allFlags = {
    ...getAliasedRegistryLoginFlags(flags),
    ...getAliasedGlobalFlags(flags),
  };
  const flagsString = buildFlagsString(allFlags);
  return `echo ${password} | helm registry login ${url} ${flagsString} --password-stdin`;
};

const buildHelmRegistryLogoutCmd = (
  url: string,
  flags: RegistryLoginFlags
) => {
  const allFlags = {
    ...getAliasedGlobalFlags(flags),
  }

  const flagsString = buildFlagsString(allFlags);
  return `helm registry logout ${url} ${flagsString}`;
}

const login = (
  url: string,
  password: string,
  flags: RegistryLoginFlags = {}
) => {
  const command = buildHelmRegistryLoginCmd(url, password, flags);
  return runCommand(command);
};

const logout = (
  url: string,
  flags: RegistryLoginFlags = {}
) => {
  const command = buildHelmRegistryLogoutCmd(url, flags);
  return runCommand(command);
}

export default {
  login,
  logout
}
