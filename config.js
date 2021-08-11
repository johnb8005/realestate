import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

export const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "arandomsha";
export const title = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_TITLE || "Real Estate";
export const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL;
const ghUrl = "https://github.com/johnb8005/realestate";
export const github = {sha: `${ghUrl}/commit/${sha}`, url: ghUrl};
