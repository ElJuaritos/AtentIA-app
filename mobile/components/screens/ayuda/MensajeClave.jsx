/**
 * Bloque destacado con el mensaje clave de cada estrategia ABA.
 */
import { StyleSheet, Text, View } from 'react-native';
import { Quote } from 'lucide-react-native';
import { colorMap, colors, fonts, radius } from '../../../constants/theme';

export default function MensajeClave({ message, colorKey = 'mint' }) {
  const accent = colorMap[colorKey] ?? colors.mint;

  return (
    <View style={[styles.container, { backgroundColor: `${accent}33` }]}>
      <View style={[styles.iconWrap, { backgroundColor: `${accent}55` }]}>
        <Quote size={16} color={accent} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.label, { color: accent }]}>Mensaje clave</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 14,
    borderRadius: radius.lg,
    marginTop: 4,
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  content: {
    flex: 1,
  },
  label: {
    fontFamily: fonts.bodySemi,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  message: {
    fontFamily: fonts.headingBold,
    fontSize: 14,
    lineHeight: 21,
    color: colors.navy,
  },
});
