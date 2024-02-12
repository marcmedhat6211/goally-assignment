import { FC, ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../../../enums/ColorsEnum";

type Props = {
  onPress: () => void;
  icon: ReactNode;
  style?: object;
  buttonConfig?: object;
};

const ButtonStyle1: FC<Props> = ({ onPress, icon, style, buttonConfig }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        style,
        pressed && styles.rippleEffect,
      ]}
      android_ripple={{ color: Colors.Grey1 }}
      {...buttonConfig}
    >
      {icon}
    </Pressable>
  );
};

export default ButtonStyle1;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.White,
    justifyContent: "center",
    alignItems: "center",
  },
  rippleEffect: {
    opacity: 0.5,
  },
});
