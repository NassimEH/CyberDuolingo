type SoundLike = {
  setPositionAsync: (positionMillis: number) => Promise<unknown>;
  playAsync: () => Promise<unknown>;
};

type AudioApi = {
  setAudioModeAsync: (mode: {
    playsInSilentModeIOS?: boolean;
    staysActiveInBackground?: boolean;
  }) => Promise<void>;
  Sound: {
    createAsync: (
      source: number
    ) => Promise<{ sound: SoundLike }>;
  };
};

let AudioModule: AudioApi | null = null;
let audioUnavailable = false;
let successSound: SoundLike | null = null;
let errorSound: SoundLike | null = null;
let completeSound: SoundLike | null = null;
let loaded = false;

function getAudio(): AudioApi | null {
  if (audioUnavailable) return null;
  if (AudioModule) return AudioModule;
  try {
    // Dynamic require: Expo Go without ExponentAV must not crash app boot.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("expo-av") as { Audio: AudioApi };
    AudioModule = mod.Audio;
    return AudioModule;
  } catch {
    audioUnavailable = true;
    return null;
  }
}

async function ensureLoaded() {
  if (loaded || audioUnavailable) return;
  const Audio = getAudio();
  if (!Audio) return;

  try {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
    });
    const [success, error, complete] = await Promise.all([
      Audio.Sound.createAsync(require("@/assets/sounds/success.wav")),
      Audio.Sound.createAsync(require("@/assets/sounds/error.wav")),
      Audio.Sound.createAsync(require("@/assets/sounds/complete.wav")),
    ]);
    successSound = success.sound;
    errorSound = error.sound;
    completeSound = complete.sound;
    loaded = true;
  } catch {
    audioUnavailable = true;
    loaded = false;
  }
}

async function replay(sound: SoundLike | null) {
  if (!sound) return;
  try {
    await sound.setPositionAsync(0);
    await sound.playAsync();
  } catch {
    // ignore playback errors
  }
}

export async function playSuccess() {
  await ensureLoaded();
  await replay(successSound);
}

export async function playError() {
  await ensureLoaded();
  await replay(errorSound);
}

export async function playComplete() {
  await ensureLoaded();
  await replay(completeSound);
}
