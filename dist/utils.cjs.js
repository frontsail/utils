var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  FrontSailUtils: () => FrontSailUtils
});
module.exports = __toCommonJS(src_exports);

// src/http/getBearerToken.ts
function getBearerToken(request) {
  const header = request.header("Authorization");
  if (header == null ? void 0 : header.startsWith("Bearer ")) {
    return header.replace("Bearer ", "");
  }
  return null;
}

// src/string/slugify.ts
function slugify_default(value) {
  return value.toLowerCase().normalize("NFKD").replace(/[^\w\s\.\-\/]/g, "").replace(/[\s\-]/g, " ").trim().replace(/\s+/g, "-");
}

// src/string/random.ts
function random(length, characters = "mixed", mode = "mixed", startsWith = "any", endsWith = "any") {
  let output = "";
  let allowed = "";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  if (characters === "letters" || characters === "mixed") {
    if (mode === "upper" || mode === "mixed") {
      allowed += upper;
    }
    if (mode === "lower" || mode === "mixed") {
      allowed += lower;
    }
  }
  if (characters === "digits" || characters === "mixed") {
    allowed += digits;
  }
  for (let i = 0; i < length; i++) {
    if (i === 0 && startsWith !== "any") {
      output += random(1, startsWith === "digit" ? "digits" : "letters", mode);
    } else if (i === length - 1 && endsWith !== "any") {
      output += random(1, endsWith === "digit" ? "digits" : "letters", mode);
    } else {
      output += allowed.charAt(Math.floor(Math.random() * allowed.length));
    }
  }
  return output;
}

// src/index.ts
var FrontSailUtils;
((FrontSailUtils2) => {
  let Http;
  ((Http2) => {
    Http2.getBearerToken = getBearerToken;
  })(Http = FrontSailUtils2.Http || (FrontSailUtils2.Http = {}));
  let String;
  ((String2) => {
    String2.slugify = slugify_default;
    String2.random = random;
  })(String = FrontSailUtils2.String || (FrontSailUtils2.String = {}));
})(FrontSailUtils || (FrontSailUtils = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FrontSailUtils
});
