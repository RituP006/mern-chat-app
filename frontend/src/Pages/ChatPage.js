import React from "react";
import { useChatContext } from "../context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/miscellaneous/MyChats";
import ChatBox from "../components/miscellaneous/ChatBox";

import { Box, Flex } from "@chakra-ui/react";

const ChatPage = () => {
  const { user } = useChatContext();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box w="100%" h="91.5vh" p="10px" backgroundColor="pink">
        <Flex justifyContent="space-between">
          {user && <MyChats />}
          {user && <ChatBox />}
        </Flex>
      </Box>
    </div>
  );
};

export default ChatPage;
