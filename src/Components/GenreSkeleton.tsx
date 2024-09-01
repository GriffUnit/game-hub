import { Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="10px" />
      <SkeletonText />;
    </Stack>
  );
};

export default GenreSkeleton;
