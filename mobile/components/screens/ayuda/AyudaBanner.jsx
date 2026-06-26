/**
 * Hero superior de la guía para padres con badge de respaldo UNAM.
 */
import { StyleSheet, Text, View } from 'react-native';
import { GraduationCap, Sparkles } from 'lucide-react-native';
import ScreenHeader from '../../ui/ScreenHeader';
import { colors, fonts, radius } from '../../../constants/theme';
import { AYUDA_BANNER } from '../../../data/ayudaData';

export default function AyudaBanner() {
  return (
    <ScreenHeader title={AYUDA_BANNER.title} subtitle={AYUDA_BANNER.subtitle}>
      <View style={styles.badge}>
        <GraduationCap size={14} color={colors.mint} />
        <Text style={styles.badgeText}>{AYUDA_BANNER.badge}</Text>
      </View>
      <View style={styles.intro}>
        <Sparkles size={16} color={colors.coral} />
        <Text style={styles.introText}>
          Tres estrategias basadas en análisis conductual aplicado para facilitar la
          transición hacia matIA sin conflictos innecesarios.
        </Text>
      </View>
    </ScreenHeader>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.12)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.pill,
    marginTop: 12,
  },
  badgeText: {
    fontFamily: fonts.bodySemi,
    fontSize: 11,
    color: 'rgba(255,255,255,0.85)',
    flexShrink: 1,
  },
  intro: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.15)',
  },
  introText: {
    flex: 1,
    fontFamily: fonts.body,
    fontSize: 13,
    lineHeight: 20,
    color: 'rgba(255,255,255,0.75)',
  },
});
