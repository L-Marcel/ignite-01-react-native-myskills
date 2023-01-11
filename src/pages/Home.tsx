import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, ListViewBase, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from './components/Button';
import { SkillCard } from './components/SkillCard';

type Skill = {
  id: string;
  name: string;
};

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState<Skill[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    const data: Skill = {
      id: String(new Date().getTime()),
      name: newSkill
    };

    console.log("New skill added", data);
    setSkills(skills => [...skills, data]);
  }

  function handleRemoveSkill(id: string) {
    setSkills(skills => skills.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12) {
      setGreeting("Good morning");
    } else if(currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good night");
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Marcel!</Text>
      <Text style={styles.greetings}>
        {greeting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#999"
        value={newSkill}
        onChangeText={setNewSkill}
      />
      
      <Button onPress={handleAddNewSkill}>
        Confirm
      </Button>

      <Text style={[styles.title, {
        marginVertical: 30
      }]}>
        My Skills
      </Text>

      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <SkillCard 
              skill={item.name}
              onPress={() => {
                handleRemoveSkill(item.id);
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios"? 15:10,
    marginTop: 30,
    borderRadius: 7
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10
  },
  textSkill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  greetings: {
    color: "#fff"
  }
});