import { execSync } from "node:child_process";

const coreRepo = "https://github.com/Hoyasumii/my-skills-api-core";
const actions = [
  "rm -rf core",
  `git clone ${coreRepo} core`,
  "rm -rf core/data",
  "rm -rf core/.git",
  "rm -rf core/pnpm-lock.yaml",
];

for await (const action of actions) {
  execSync(action);
}
