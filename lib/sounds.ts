import { isExpoGo } from "@/lib/is-expo-go";

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
    createAsync: (source: number) => Promise<{ sound: SoundLike }>;
  };
};

let AudioModule: AudioApi | null = null;
/** Skip audio permanently (Expo Go / missing native module / load failure). */
let audioUnavailable = isExpoGo;
let successSound: SoundLike | null = null;
let errorSound: SoundLike | null = null;
let completeSound: SoundLike | null = null;
let loaded = false;
let loading: Promise<void> | null = null;

function getAudio(): AudioApi | null {
  if (audioUnavailable) return null;
  if (AudioModule) return AudioModule;
  try {
    // Dynamic require: must not run in Expo Go (no ExponentAV).
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("expo-av") as { Audio: AudioApi };
    if (!mod?.Audio) {
      audioUnavailable = true;
      return null;
    }
    AudioModule = mod.Audio;
    return AudioModule;
  } catch {
    audioUnavailable = true;
    return null;
  }
}

async function ensureLoaded() {
  if (loaded || audioUnavailable) return;
  if (loading) {
    await loading;
    return;
  }

  loading = (async () => {
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
    } finally {
      loading = null;
    }
  })();

  await loading;
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
  try {
    if (audioUnavailable) return;
    await ensureLoaded();
    await replay(successSound);
  } catch {
    audioUnavailable = true;
  }
}

export async function playError() {
  try {
    if (audioUnavailable) return;
    await ensureLoaded();
    await replay(errorSound);
  } catch {
    audioUnavailable = true;
  }
}

export async function playComplete() {
  try {
    if (audioUnavailable) return;
    await ensureLoaded();
    await replay(completeSound);
  } catch {
    audioUnavailable = true;
  }
}
