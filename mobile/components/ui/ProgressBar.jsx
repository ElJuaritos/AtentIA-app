/**
 * Barra de progreso con color de acento configurable.
 */
import { StyleSheet, Text, View } from 'react-native';
import { colorMap, colors, fonts, radius } from '../../constants/theme';

export default function ProgressBar({ progress = 0, color = 'olive', height = 8, showLabel }) {
  const fillColor = colorMap[color] || colors.olive;
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <View>
      {showLabel && (
        <Text style={styles.label}>{clamped}%</Text>
      )}
      <View style={[styles.track, { height }]}>
        <View style={[styles.fill, { width: `${clamped}%`, backgroundColor: fillColor, height }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.bodySemi,
    fontSize: 13,
    color: colors.navy,
    marginBottom: 6,
    textAlign: 'right',
  },
  track: {
    backgroundColor: `${colors.navy}10`,
    borderRadius: radius.pill,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: radius.pill,
  },
});
