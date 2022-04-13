import {getImplementation} from "./getImplementation.js";

// Thanks https://github.com/iliakan/detect-node/blob/master/index.esm.js
const isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";

export const bls = await getImplementation(isNode ? "blst-native" : "herumi");
export default bls;
export * from "./interface.js";
