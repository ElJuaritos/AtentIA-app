/**
 * Badge/chip pequeño para estados y contadores.
 */
import { StyleSheet, Text, View } from 'react-native';
import { colorMap, colors, fonts, radius } from '../../constants/theme';

export default function Badge({ label, tone = 'mint', style }) {
  const bgMap = {
    mint: `${colors.mint}40`,
    coral: `${colors.coral}40`,
    olive: `${colors.olive}25`,
    navy: `${colors.navy}15`,
  };

  const textMap = {
    mint: colors.olive,
    coral: colors.navy,
    olive: colors.olive,
    navy: colors.navy,
  };

  return (
    <View style={[styles.badge, { backgroundColor: bgMap[tone] || bgMap.mint }, style]}>
      <Text style={[styles.text, { color: textMap[tone] || colors.olive }]}>{label}</Text>
    </View>
  );
}

export function AccentDot({ color = 'coral' }) {
  return <View style={[styles.dot, { backgroundColor: colorMap[color] || colors.coral }]} />;
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.pill,
    alignSelf: 'flex-start',
  },
  text: {
    fontFamily: fonts.bodySemi,
    fontSize: 12,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
