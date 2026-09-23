import { Redirect } from "expo-router";

/**
 * Legacy route kept so old deep links / installs do not crash.
 * Apple Guideline 4 forbids requiring name/email after Sign in with Apple —
 * profile edits stay optional via Profile → Modifier mes infos.
 */
export default function CompleteProfileScreen() {
  return <Redirect href="/" />;
}
