import { UninstallFlags } from "../types";
import { getAliasedGlobalFlags } from "./helm-cmd";
import { runCommand, buildFlagsString } from "../utils/helpers";

const buildHelmUninstallCmd = (name: string, flags: UninstallFlags = {}) => {
  const allFlags = {
    ...getAliasedGlobalFlags(flags),
  };
  const flagsString = buildFlagsString(allFlags);
  return `helm uninstall ${name} ${flagsString}`;
};

/**
 * This command uninstalls a helm chart.
 */

const uninstall = async (
  name: string,
  flags: UninstallFlags = {}
): Promise<{ stdout: string }> => {
  const command = buildHelmUninstallCmd(name, flags);
  const stdout = await runCommand(command);
  return { stdout };
};

export default uninstall;
