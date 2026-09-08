import { ChallengeCard } from "@/components/challenges/ChallengeCard";
import type { Challenge } from "@/data/challenges";
import { useLearningStore } from "@/store/learningStore";

type Props = {
  challenge: Challenge;
  onPress: () => void;
};

export function DailyChallengeCard({ challenge, onPress }: Props) {
  const completed = useLearningStore((s) =>
    s.completedChallengeIds.includes(challenge.id)
  );

  return (
    <ChallengeCard
      challenge={challenge}
      completed={completed}
      featured
      onPress={onPress}
    />
  );
}
