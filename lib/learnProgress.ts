import { CHALLENGES, type Challenge } from "@/data/challenges";
import { LAB_SCENARIOS, type LabScenario } from "@/data/labScenarios";
import { LESSON_SKILL } from "@/data/skills";
import { TRACKS } from "@/data/tracks";
import { getUnitsForTrack } from "@/data/units";
import type { TrackId, Unit } from "@/types/learning";

export function getContentModulesForTrack(trackId: string): Unit[] {
  return getUnitsForTrack(trackId).filter((u) => u.lessonIds.length > 0);
}

export function getTrackLessonIds(trackId: string): string[] {
  return getContentModulesForTrack(trackId).flatMap((u) => u.lessonIds);
}

/** Next available track’s first content module after the current track. */
export function getNextTrackModule(currentTrackId: TrackId): Unit | null {
  const availableTracks = TRACKS.filter((t) => t.available);
  const trackIdx = availableTracks.findIndex((t) => t.id === currentTrackId);
  for (let i = trackIdx + 1; i < availableTracks.length; i++) {
    const track = availableTracks[i];
    if (!track) continue;
    const first = getContentModulesForTrack(track.id)[0];
    if (first) return first;
  }
  return null;
}

export function findRelatedChallenge(unit: Unit): Challenge | null {
  const byUnit = CHALLENGES.find((c) => c.unitId === unit.id);
  if (byUnit) return byUnit;

  const skills = new Set(
    unit.lessonIds
      .map((id) => LESSON_SKILL[id])
      .filter((s): s is NonNullable<typeof s> => Boolean(s))
  );
  return CHALLENGES.find((c) => skills.has(c.skillId)) ?? null;
}

export function findRelatedLab(
  unit: Unit,
  completedLabIds: string[]
): LabScenario | null {
  const byTrack = LAB_SCENARIOS.filter((l) => l.trackId === unit.trackId);
  const incomplete = byTrack.find((l) => !completedLabIds.includes(l.id));
  if (incomplete) return incomplete;
  return byTrack[0] ?? LAB_SCENARIOS[0] ?? null;
}
