const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Keep default package exports (required for react-native 0.86 / Expo 57).
// Lucide icons import deep .mjs paths directly, so mjs must be resolvable.
if (!config.resolver.sourceExts.includes("mjs")) {
  config.resolver.sourceExts.push("mjs");
}

const streamStub = path.resolve(__dirname, "shims/stream-web-stub.js");
const defaultResolveRequest = config.resolver.resolveRequest;

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === "@better-auth/expo/client") {
    return {
      filePath: path.resolve(
        __dirname,
        "node_modules/@better-auth/expo/dist/client.js"
      ),
      type: "sourceFile",
    };
  }

  if (
    platform === "web" &&
    (moduleName === "@stream-io/video-react-native-sdk" ||
      moduleName === "@stream-io/react-native-webrtc" ||
      moduleName.startsWith("@stream-io/video-react-native-sdk/") ||
      moduleName.startsWith("@stream-io/react-native-webrtc/"))
  ) {
    return { filePath: streamStub, type: "sourceFile" };
  }

  if (defaultResolveRequest) {
    return defaultResolveRequest(context, moduleName, platform);
  }

  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withNativewind(config, { input: "./global.css" });
