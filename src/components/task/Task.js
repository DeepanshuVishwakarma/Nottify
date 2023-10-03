import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import colors from "../../../styles/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import CheckIcon from "react-native-vector-icons/Entypo";
import CancelIcon from "react-native-vector-icons/MaterialIcons";
import TagIcon from "react-native-vector-icons/AntDesign";

export default function Task({ data }) {
  const [isActive, setActive] = useState(false);
  console.log(data, "data from task component ");
  return (
    <View style={styles.task}>
      <View style={styles.left}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.right}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <View style={styles.descriptionCon}>
          <View style={styles.dateCon}>
            <Text style={styles.date}>{data.date}</Text>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.tag}>
              <TagIcon name="tagso" size={30} color={colors.border} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.reminder}>
              {!isActive ? (
                <Icon name="alarm" size={30} color={colors.border} />
              ) : (
                <Icon name="alarm-on" size={30} color={colors.border} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.buttons}>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.doneBox}>
                <CheckIcon name="check" color={colors.border} size={30} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelBox}>
                <CancelIcon name="cancel" style={styles.cancel} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    padding: 5,
    backgroundColor: colors.sColor,
  },
  left: {
    width: 20,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 50,
    width: 15,
    height: 15,
  },
  right: {
    flex: 1,
    marginLeft: 10,
  },
  titleContainer: {
    height: "50%",
  },
  title: {
    color: colors.white,
    fontSize: 16,
  },
  descriptionCon: {
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    color: colors.border,
    fontSize: 14,
  },
  icons: {
    flexDirection: "row",
    columnGap: 20,
    alignItems: "flex-start",
  },
  tag: {
    width: 20,
    height: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    marginRight: 5,
  },
  reminder: {
    width: 20,
    height: 20,
    backgroundColor: colors.secondary,
    borderRadius: 50,
  },
  buttons: {},
  buttonRow: {
    flexDirection: "row",
    columnGap: 20,
  },
  //   doneBox: {
  //     flex: 1,
  //     height: 30,
  //     borderWidth: 1,
  //     borderRadius: 20,
  //     borderColor: "purple",
  //     backgroundColor: "rgba(255, 0, 255, 0.5)",
  //     flexDirection: "column",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginRight: 10,
  //   },
  //   cancelBox: {
  //     flex: 1,
  //     height: 30,
  //     borderWidth: 1,
  //     borderRadius: 20,
  //     borderColor: "purple",
  //     backgroundColor: "rgba(255, 0, 255, 0.5)",
  //     flexDirection: "column",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  cancelText: {
    color: colors.white,
  },
});
