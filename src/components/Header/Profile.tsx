import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box textAlign="right" mr="4">
          <Text>William Roger</Text>
          <Text color="gray.300" fontSize="small">
            william@email.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="William Roger" src="https://github.com/williamroger.png" />
    </Flex>
  );
}