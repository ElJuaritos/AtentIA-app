/**
 * Pantalla de guía para padres — estrategias ABA para transición a matIA.
 */
import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AyudaBanner from '../../components/screens/ayuda/AyudaBanner';
import EstrategiaAccordion from '../../components/screens/ayuda/EstrategiaAccordion';
import { colors, fonts } from '../../constants/theme';
import { ESTRATEGIAS } from '../../data/ayudaData';

export default function GuiaScreen() {
  const [expandedId, setExpandedId] = useState(ESTRATEGIAS[0]?.id ?? null);
  const [checkedSteps, setCheckedSteps] = useState(new Set());

  const handleToggleExpand = useCallback((id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  const handleToggleStep = useCallback((stepId) => {
    setCheckedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepId)) {
        next.delete(stepId);
      } else {
        next.add(stepId);
      }
      return next;
    });
  }, []);

  const totalSteps = ESTRATEGIAS.reduce((acc, e) => acc + e.steps.length, 0);
  const completedCount = checkedSteps.size;

  return (
    <View style={styles.root}>
      <AyudaBanner />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.progressRow}>
          <Text style={styles.progressLabel}>Tu progreso</Text>
          <Text style={styles.progressValue}>
            {completedCount}/{totalSteps} pasos
          </Text>
        </View>

        {ESTRATEGIAS.map((estrategia) => (
          <EstrategiaAccordion
            key={estrategia.id}
            estrategia={estrategia}
            expanded={expandedId === estrategia.id}
            onToggleExpand={handleToggleExpand}
            checkedSteps={checkedSteps}
            onToggleStep={handleToggleStep}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.offwhite,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 110,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  progressLabel: {
    fontFamily: fonts.bodySemi,
    fontSize: 13,
    color: colors.textMuted,
  },
  progressValue: {
    fontFamily: fonts.headingBold,
    fontSize: 14,
    color: colors.olive,
  },
});
