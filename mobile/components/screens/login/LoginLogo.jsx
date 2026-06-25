/**
 * Logo minimalista de matIA Parents para la pantalla de login.
 */
import { StyleSheet, Text, View } from 'react-native';
import { Sparkles } from 'lucide-react-native';
import { colors, fonts, radius, shadows } from '../../../constants/theme';

export default function LoginLogo() {
  return (
    <View style={styles.wrap}>
      <View style={styles.box}>
        <Text style={styles.mat}>mat</Text>
        <Text style={styles.ia}>IA</Text>
        <Sparkles size={16} color={colors.coral} strokeWidth={2.5} />
      </View>
      <Text style={styles.badge}>PARENTS · AtentIA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', marginBottom: 32 },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: colors.navy,
    borderRadius: radius.xl,
    paddingHorizontal: 22,
    paddingVertical: 18,
    ...shadows.soft,
  },
  mat: {
    fontFamily: fonts.heading,
    fontSize: 28,
    color: colors.white,
    letterSpacing: -0.5,
  },
  ia: {
    fontFamily: fonts.heading,
    fontSize: 28,
    color: colors.coral,
    letterSpacing: -0.5,
  },
  badge: {
    fontFamily: fonts.bodySemi,
    fontSize: 11,
    color: colors.olive,
    letterSpacing: 1.2,
    marginTop: 12,
    textTransform: 'uppercase',
  },
});
