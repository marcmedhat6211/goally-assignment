import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "./enums/ScreensEnum";
import RoutinesScreen from "./screens/RoutinesScreen";
import ButtonStyle1 from "./components/ui/buttons/ButtonStyle1";
import { Colors } from "./enums/ColorsEnum";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.Routines}
          component={RoutinesScreen}
          options={{
            headerTintColor: Colors.White,
            headerStyle: {
              backgroundColor: Colors.Primary,
            },
            headerTitleStyle: {
              fontWeight: "400",
              fontSize: 20,
            },
            headerLeft: () => (
              <ButtonStyle1
                onPress={() => {}}
                icon={<Entypo name="home" size={20} color={Colors.Secondary} />}
              />
            ),
            headerRight: () => (
              <ButtonStyle1
                onPress={() => {}}
                icon={
                  <Ionicons name="settings" size={20} color={Colors.Pink1} />
                }
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
