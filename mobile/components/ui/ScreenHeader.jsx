/**
 * Encabezado reutilizable con gradiente navy para pantallas autenticadas.
 */
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fonts } from '../../constants/theme';

export default function ScreenHeader({ title, subtitle, rightAction, children }) {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[colors.navy, '#1a2d4a']}
      style={[styles.header, { paddingTop: insets.top + 12 }]}
    >
      <View style={styles.topRow}>
        <View style={{ flex: 1 }}>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          <Text style={styles.title}>{title}</Text>
        </View>
        {rightAction}
      </View>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  topRow: { flexDirection: 'row', alignItems: 'flex-start' },
  subtitle: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 4,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 26,
    color: colors.white,
  },
});
