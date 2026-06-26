/**
 * Card expandible por estrategia ABA con descripción, pasos y mensaje clave.
 */
import { useState } from 'react';
import { LayoutAnimation, Platform, Pressable, StyleSheet, Text, UIManager, View } from 'react-native';
import { ChevronDown, Heart, ShieldCheck, Sunset } from 'lucide-react-native';
import Card from '../../ui/Card';
import MensajeClave from './MensajeClave';
import PasoItem from './PasoItem';
import { colorMap, colors, fonts, radius } from '../../../constants/theme';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ICON_MAP = {
  Sunset,
  ShieldCheck,
  Heart,
};

export default function EstrategiaAccordion({
  estrategia,
  expanded: expandedProp,
  onToggleExpand,
  checkedSteps,
  onToggleStep,
}) {
  const [expandedLocal, setExpandedLocal] = useState(expandedProp ?? false);
  const expanded = expandedProp !== undefined ? expandedProp : expandedLocal;

  const Icon = ICON_MAP[estrategia.icon] ?? Sunset;
  const accent = colorMap[estrategia.color] ?? colors.mint;

  const handleToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (onToggleExpand) {
      onToggleExpand(estrategia.id);
    } else {
      setExpandedLocal((prev) => !prev);
    }
  };

  return (
    <Card style={styles.card}>
      <Pressable
        onPress={handleToggle}
        style={({ pressed }) => [styles.header, pressed && styles.headerPressed]}
        accessibilityRole="button"
        accessibilityState={{ expanded }}
      >
        <View style={[styles.numberBadge, { backgroundColor: `${accent}44` }]}>
          <Text style={[styles.number, { color: accent }]}>{estrategia.number}</Text>
        </View>

        <View style={styles.headerText}>
          <Text style={styles.title}>{estrategia.title}</Text>
          <Text style={styles.subtitle}>{estrategia.subtitle}</Text>
        </View>

        <View style={[styles.iconBox, { backgroundColor: `${accent}33` }]}>
          <Icon size={18} color={accent} />
        </View>

        <View style={[styles.chevron, expanded && styles.chevronUp]}>
          <ChevronDown size={20} color={colors.textMuted} />
        </View>
      </Pressable>

      {expanded && (
        <View style={styles.body}>
          <Text style={styles.description}>{estrategia.description}</Text>

          <Text style={styles.stepsLabel}>Pasos accionables</Text>
          {estrategia.steps.map((step) => (
            <PasoItem
              key={step.id}
              text={step.text}
              done={checkedSteps.has(step.id)}
              onToggle={() => onToggleStep(step.id)}
              accentColor={accent}
            />
          ))}

          <MensajeClave message={estrategia.keyMessage} colorKey={estrategia.color} />
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 14,
    padding: 0,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 10,
  },
  headerPressed: {
    opacity: 0.85,
  },
  numberBadge: {
    width: 32,
    height: 32,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  number: {
    fontFamily: fonts.headingBold,
    fontSize: 15,
  },
  headerText: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontFamily: fonts.headingBold,
    fontSize: 15,
    color: colors.navy,
  },
  subtitle: {
    fontFamily: fonts.body,
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 2,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  chevron: {
    flexShrink: 0,
  },
  chevronUp: {
    transform: [{ rotate: '180deg' }],
  },
  body: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  description: {
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
    color: colors.textSoft,
    marginTop: 14,
    marginBottom: 16,
  },
  stepsLabel: {
    fontFamily: fonts.bodySemi,
    fontSize: 12,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
});
