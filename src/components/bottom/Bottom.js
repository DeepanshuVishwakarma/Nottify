import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconCheck from "react-native-vector-icons/Feather";
import colors from "../../../styles/colors";
import { Modal } from "react-native";
import { useDispatch } from "react-redux";
import { setTasks } from "../../store/reducers/slice";

export default function Bottom() {
  const [added, setAdded] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDescriptionChange = (newDescription) => {
    setTask({
      ...task,
      description: newDescription,
    });
  };

  const handleTitleChange = (newTitle) => {
    setTask({
      ...task,
      title: newTitle,
    });
  };

  const handleAddTask = () => {
    if (task.title.trim() === "" || task.description.trim() === "") {
      return;
    }
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const formattedDate = `${day}-${month}-${year}`;
    const currentTime = `${hours}:${minutes}:${seconds}`;

    const uniqueKey = `${formattedDate} ${currentTime}`;

    const data = {
      ...task,
      date: formattedDate,
      day: day,
      month: month,
      year: year,
      key: uniqueKey,
    };
    dispatch(setTasks(data));
    setAdded(true);
    setTimeout(() => {
      toggleModal();

      setAdded(false);
      setTask({ title: "", description: "", date: "" });
    }, 1000);
  };

  return (
    <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.plusCircle} onPress={toggleModal}>
        <Icon name="plus" size={40} color={colors.white} />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {added ? (
              <View
                style={{
                  backgroundColor: colors.white,
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Task has been added{" "}
                  <IconCheck
                    name="check-circle"
                    size={20}
                    color={colors.pColor}
                  />
                </Text>
              </View>
            ) : (
              <>
                <Text style={styles.addTask}>Add Task</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleTitleChange}
                  value={task.title}
                  placeholder="Title"
                  placeholderTextColor={colors.border}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={handleDescriptionChange}
                  value={task.description}
                  placeholder="Description"
                  placeholderTextColor={colors.border}
                />
                <View style={styles.buttons}>
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAddTask}
                  >
                    <Text style={styles.txt}>Add</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={toggleModal}
                  >
                    <Text style={styles.txt}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.sColor,
    height: 110,
  },
  plusCircle: {
    backgroundColor: colors.pColor,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    top: -30,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: colors.sColor,
    borderRadius: 16,
    padding: 20,
    width: "80%",
  },
  addTask: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    backgroundColor: colors.iColor,
    height: 47,
    padding: 12,
    paddingHorizontal: 12,
    color: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.pColor,
    padding: 15,
    marginRight: 10,
    borderRadius: 4,
  },
  closeButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.sColor,
    padding: 15,
    marginLeft: 10,
    borderRadius: 4,
  },
  txt: {
    color: colors.white,
  },
});
