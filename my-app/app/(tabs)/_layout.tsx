import { Tabs } from 'expo-router';
import 'react-native-reanimated';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="/products" />
      <Tabs.Screen name="user" />
      <Tabs.Screen name="/cart" />
    </Tabs>
  );
}
