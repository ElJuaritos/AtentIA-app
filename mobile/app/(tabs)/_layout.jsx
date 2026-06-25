/**
 * Tab navigator con barra flotante estilo pill.
 */
import { Tabs } from 'expo-router';
import {
  BarChart3,
  BookOpen,
  Home,
  Shield,
  User,
} from 'lucide-react-native';
import FloatingTabBar from '../../components/layout/FloatingTabBar';
import { colors } from '../../constants/theme';

const TAB_ICONS = {
  index: Home,
  biblioteca: BookOpen,
  reportes: BarChart3,
  control: Shield,
  perfil: User,
};

function makeIcon(name) {
  return ({ focused, color, size }) => {
    const Icon = TAB_ICONS[name];
    return <Icon size={size ?? 20} color={color} strokeWidth={focused ? 2.2 : 1.7} />;
  };
}

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <FloatingTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: colors.offwhite },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Inicio', tabBarIcon: makeIcon('index') }}
      />
      <Tabs.Screen
        name="biblioteca"
        options={{ title: 'Biblioteca', tabBarIcon: makeIcon('biblioteca') }}
      />
      <Tabs.Screen
        name="reportes"
        options={{ title: 'Reportes', tabBarIcon: makeIcon('reportes') }}
      />
      <Tabs.Screen
        name="control"
        options={{ title: 'Control', tabBarIcon: makeIcon('control') }}
      />
      <Tabs.Screen
        name="perfil"
        options={{ title: 'Perfil', tabBarIcon: makeIcon('perfil') }}
      />
    </Tabs>
  );
}
