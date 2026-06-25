/**
 * Tarjeta del perfil del niño en el dashboard.
 */
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { colors, fonts, radius } from '../../../constants/theme';

export default function ChildCard({ child }) {
  return (
    <Pressable style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{child.avatar}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{child.name}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>🔥 {child.streak} días de racha</Text>
          <Text style={styles.metaDot}>·</Text>
          <Text style={styles.meta}>⭐ Nivel {child.level}</Text>
        </View>
      </View>
      <ChevronRight size={20} color="rgba(255,255,255,0.7)" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: radius.xl,
    padding: 14,
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: `${colors.coral}55`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontSize: 28 },
  info: { flex: 1, marginLeft: 12 },
  name: {
    fontFamily: fonts.heading,
    fontSize: 18,
    color: colors.white,
  },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4, flexWrap: 'wrap' },
  meta: { fontFamily: fonts.body, fontSize: 12, color: 'rgba(255,255,255,0.75)' },
  metaDot: { color: 'rgba(255,255,255,0.5)', marginHorizontal: 6 },
});
