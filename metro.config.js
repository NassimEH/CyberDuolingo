const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const streamStub = path.resolve(__dirname, "shims/stream-web-stub.js");

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (
    platform === "web" &&
    (moduleName === "@stream-io/video-react-native-sdk" ||
      moduleName === "@stream-io/react-native-webrtc" ||
      moduleName.startsWith("@stream-io/video-react-native-sdk/") ||
      moduleName.startsWith("@stream-io/react-native-webrtc/"))
  ) {
    return { filePath: streamStub, type: "sourceFile" };
  }

  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withNativewind(config, { input: "./global.css" });
