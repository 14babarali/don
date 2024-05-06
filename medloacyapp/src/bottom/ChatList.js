import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

const ChatList = ({ navigation }) => {
  const [chats, setChats] = useState([

    { id: 2, name: 'Babar', lastMessage: 'Hi',  selected: false },
    { id: 3, name: 'Ali', lastMessage: 'How are you?',  selected: false },
    { id: 4, name: 'Ahmad', lastMessage: 'I am fine',  selected: false },
    { id: 5, name: 'Ali', lastMessage: 'What about you?',  selected: false },
    { id: 6, name: 'Ali', lastMessage: 'I am good',selected: false },
    { id: 7, name: 'Alu', lastMessage: 'See you later',  selected: false },
    { id: 8, name: 'Ayan', lastMessage: 'See you later',  selected: false },
    { id: 9, name: 'Rayan', lastMessage: 'See you later',  selected: false },
    { id: 10, name: 'Faiz', lastMessage: 'See you later',  selected: false },
    { id: 11, name: 'Rehman', lastMessage: 'See you later',  selected: false },
    { id: 12, name: 'Raja G', lastMessage: 'See you later',  selected: false },
    { id: 13, name: 'Faisal', lastMessage: 'See you later',  selected: false },
    { id: 14, name: 'Imran', lastMessage: 'See you later',  selected: false },
    { id: 15, name: 'Balti', lastMessage: 'See you later',  selected: false },
    { id: 16, name: 'Jutt', lastMessage: 'See you later',  selected: false },
  ]);

  const [selectedChats, setSelectedChats] = useState([]);
  const [showBackButton, setShowBackButton] = useState(false);
  const [hideChatHeader, setHideChatHeader] = useState(false);

  const toggleChatSelection = (chatId) => {
    const updatedChats = chats.map((chat) => {
      if (chat.id === chatId) {
        chat.selected = !chat.selected;
      }
      return chat;
    });
    setChats(updatedChats);
    updateSelectedChats(updatedChats);
  };

  const updateSelectedChats = (updatedChats) => {
    const selected = updatedChats.filter((chat) => chat.selected);
    setSelectedChats(selected);
    setShowBackButton(selected.length > 0);
    setHideChatHeader(selected.length > 0);
  };

  const handleDeleteSelectedChats = () => {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete ${selectedChats.length} items?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedChats = chats.filter((chat) => !chat.selected);
            setChats(updatedChats);
            setSelectedChats([]);
            setShowBackButton(false);
            setHideChatHeader(false);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleSelectAllChats = () => {
    const updatedChats = chats.map((chat) => {
      chat.selected = true;
      return chat;
    });
    setChats(updatedChats);
    updateSelectedChats(updatedChats);
  };

  const handleCancelSelect = () => {
    const updatedChats = chats.map((chat) => {
      chat.selected = false;
      return chat;
    });
    setChats(updatedChats);
    setSelectedChats([]);
    setShowBackButton(false);
    setHideChatHeader(false);
  };

  const Gotochating = (chatName) => {
    navigation.navigate('Chats', { chatName: chatName });
  };

  const renderChatItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.chatItem, item.selected && { backgroundColor: '#3AAFA9' }]}
      onPress={() => Gotochating(item.name)}
      onLongPress={() => toggleChatSelection(item.id)}
    >
      <Image source={require('../../assets/images/me1.png')} style={styles.profileImage} />
      <View>
        <Text style={[styles.chatName, item.selected && { color: 'white' }]}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerProfiletxt}>
        {!hideChatHeader && <Text style={styles.headertxt}>MedLocate</Text>}
        {selectedChats.length > 0 && (
          <View style={styles.selectionOptions}>
            <Text style={styles.selectedCount}>{selectedChats.length}</Text>
            <TouchableOpacity onPress={handleDeleteSelectedChats}>
              <Image source={require('../../assets/images/delete.png')} style={styles.actionIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSelectAllChats}>
              <Text style={styles.selectAllText}>Select All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancelSelect}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
        
      </View>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderChatItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
    height: 70,
    justifyContent:"flex-start",
    borderBottomColor: '#3AAFA9',
    borderColor: '#3AAFA9',
    marginTop: 2,
    padding: 10,
    borderRadius: 5,
  },
  chatName: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: 'grey',
  },
  time: {
    alignSelf:'flex-end',
    marginLeft:70,
    fontSize: 12,
    color: 'grey',
  },
  headerProfiletxt: {
    width: '100%',
    height: 50,
    backgroundColor: '#3AAFA9',
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    fontWeight:'bold',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headertxt: {
    color: 'white',
    fontSize: 20,
    textAlign:"center",
  },
  selectionOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedCount: {
    color: 'white',
    marginRight: 10,
  },
  actionIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
    marginRight: 10,
  },
  selectAllText: {
    color: 'white',
    marginRight: 10,
  },
  cancelText: {
    color: 'white',
    marginRight: 10,
  },
  backButton: {
    color: 'white',
    fontSize: 18,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 20,
  },
});

export default ChatList;
