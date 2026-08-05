/** Web stub for @stream-io/video-react-native-sdk (native-only). */

class StreamVideoClient {
  static getOrCreateInstance() {
    return new StreamVideoClient();
  }

  call() {
    return new Call();
  }

  async disconnectUser() {}
}

class Call {
  id = "web-stub";
  microphone = {
    enable: async () => {},
    disable: async () => {},
  };

  async join() {
    throw new Error("Stream video is not available on web preview");
  }

  async leave() {}
  async update() {}
  async startClosedCaptions() {}
  on() {
    return () => {};
  }
}

function StreamVideo({ children }) {
  return children ?? null;
}

function StreamCall({ children }) {
  return children ?? null;
}

function CallClosedCaption() {
  return null;
}

function useCallStateHooks() {
  return {
    useMicrophoneState: () => ({
      status: "disabled",
      microphone: {
        enable: async () => {},
        disable: async () => {},
      },
    }),
    useCallClosedCaptions: () => [],
  };
}

module.exports = {
  StreamVideoClient,
  Call,
  StreamVideo,
  StreamCall,
  CallClosedCaption,
  useCallStateHooks,
};
