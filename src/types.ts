export type GlobalFlags = {
  namespace?: string;
  cliValues?: Array<string>;
};

export type ListFlags = GlobalFlags & {
  allNamespaces?: boolean;
};

export type InstallFlags = GlobalFlags & {
  version?: string;
};

export type UninstallFlags = GlobalFlags & {};

export type Release = {
  name: string;
  namespace: string;
  revision: string;
  updated: string;
  status:
    | "unknown"
    | "deployed"
    | "uninstalled"
    | "superseded"
    | "failed"
    | "uninstalling"
    | "pending-install"
    | "pending-upgrade"
    | "pending-rollback";
  chart: string;
  app_version: string;
};

export type Repo = {
  name: string;
  url: string;
};

export type RepoAddFlags = GlobalFlags & {
  username?: string;
  password?: string;
};

export type RepoListFlags = GlobalFlags & {};

export type RegistryLoginFlags = GlobalFlags & {
  username?: string;
};
