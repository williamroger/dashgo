import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box textAlign="right" mr="4">
        <Text>William Roger</Text>
        <Text color="gray.300" fontSize="small">
          william@email.com
        </Text>
      </Box>
      <Avatar size="md" name="William Roger" src="https://github.com/williamroger.png" />
    </Flex>
  );
}