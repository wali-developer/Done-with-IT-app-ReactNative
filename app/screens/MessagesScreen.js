import React, { useState } from "react";
import { FlatList, View } from "react-native";

import {
  ListItem,
  ListItemSeperator,
  ListItemDeleteAction,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Mr. Khan",
    description: "Some random text description.",
    image: require("../assets/myPic.jpg"),
  },
  {
    id: 2,
    title: "Anwar Ali",
    description: "Some random text description.",
    image: require("../assets/myPic.jpg"),
  },
  {
    id: 3,
    title: "Shahid",
    description: "Some random text description.",
    image: require("../assets/myPic.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refresh, setRefresh] = useState(false);

  const handleDelete = (message) => {
    // delete message on tap on delete icon
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refresh}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D3",
              image: require("../assets/myPic.jpg"),
            },
          ]);
        }}
      />
    </View>
  );
}

export default MessagesScreen;
