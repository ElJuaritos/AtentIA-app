/**
 * Gráfica de evolución por materia en reportes.
 */
import { StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import Card from '../../ui/Card';
import { colors, fonts } from '../../../constants/theme';

export default function EvolutionChart({ data = [] }) {
  const mathData = data.map((d, i) => ({ value: d.math, label: d.week, dataPointText: `${d.math}` }));
  const readingData = data.map((d) => ({ value: d.reading }));

  return (
    <Card style={styles.card}>
      <Text style={styles.title}>Evolución por materia</Text>
      <Text style={styles.subtitle}>Progreso mensual (%)</Text>
      <LineChart
        data={mathData}
        data2={readingData}
        color1={colors.navy}
        color2={colors.coral}
        startFillColor1={colors.navy}
        startFillColor2={colors.coral}
        startOpacity={0.15}
        endOpacity={0.02}
        areaChart
        curved
        hideRules
        spacing={48}
        thickness={3}
        yAxisTextStyle={styles.axis}
        xAxisLabelTextStyle={styles.axis}
        height={160}
        isAnimated
      />
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.dot, { backgroundColor: colors.navy }]} />
          <Text style={styles.legendText}>Matemáticas</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.dot, { backgroundColor: colors.coral }]} />
          <Text style={styles.legendText}>Lectura</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: 16 },
  title: { fontFamily: fonts.headingBold, fontSize: 16, color: colors.navy },
  subtitle: { fontFamily: fonts.body, fontSize: 12, color: colors.textMuted, marginBottom: 8 },
  axis: { fontFamily: fonts.body, fontSize: 10, color: colors.textMuted },
  legend: { flexDirection: 'row', gap: 16, marginTop: 12 },
  legendItem: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  legendText: { fontFamily: fonts.body, fontSize: 12, color: colors.textSoft },
});
