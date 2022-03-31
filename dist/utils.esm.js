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
export {
  FrontSailUtils
};
