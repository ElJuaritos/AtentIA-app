/**
 * Reportes de aprendizaje del niño.
 */
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ConceptChips from '../../components/screens/reportes/ConceptChips';
import EvolutionChart from '../../components/screens/reportes/EvolutionChart';
import ScreenHeader from '../../components/ui/ScreenHeader';
import { colors, fonts } from '../../constants/theme';
import { mockData } from '../../data/mockData';
import { getChild, getReport } from '../../services/api';

export default function ReportesScreen() {
  const [child, setChild] = useState(mockData.child);
  const [report, setReport] = useState(mockData.report);

  useEffect(() => {
    getChild().then((d) => setChild(d.child));
    getReport().then(setReport);
  }, []);

  const firstName = child.name.split(' ')[0];

  return (
    <View style={styles.root}>
      <ScreenHeader
        title="Reportes"
        subtitle={`Evolución de ${firstName} · ${report.period}`}
      >
        <View style={styles.headerStats}>
          {[
            { value: report.stats.studyTime, label: 'Tiempo estudio' },
            { value: `${report.stats.accuracy}%`, label: 'Precisión' },
            { value: String(report.stats.lessons), label: 'Lecciones' },
          ].map((s) => (
            <View key={s.label} style={styles.headerStat}>
              <Text style={styles.headerStatValue}>{s.value}</Text>
              <Text style={styles.headerStatLabel}>{s.label}</Text>
            </View>
          ))}
        </View>
      </ScreenHeader>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <EvolutionChart data={report.chartData} />
        <ConceptChips title="Conceptos dominados" items={report.dominated} type="dominated" />
        <ConceptChips title="Conceptos pendientes" items={report.pending} type="pending" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.offwhite },
  headerStats: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  headerStat: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  headerStatValue: {
    fontFamily: fonts.heading,
    fontSize: 18,
    color: colors.white,
  },
  headerStatLabel: {
    fontFamily: fonts.body,
    fontSize: 11,
    color: 'rgba(255,255,255,0.65)',
    marginTop: 2,
  },
  content: { paddingHorizontal: 20, paddingBottom: 110 },
});
