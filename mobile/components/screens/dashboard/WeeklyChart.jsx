/**
 * Gráfica semanal de actividad con barras.
 */
import { StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import Card from '../../ui/Card';
import { colors, fonts } from '../../../constants/theme';

export default function WeeklyChart({ data = [], trend }) {
  const barData = data.map((d) => ({
    value: d.value,
    label: d.day,
    frontColor: colors.navy,
    topLabelComponent: () => null,
  }));

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Actividad semanal</Text>
        <Text style={styles.link}>Ver todo</Text>
      </View>
      <BarChart
        data={barData}
        barWidth={22}
        spacing={18}
        roundedTop
        roundedBottom
        hideRules
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={styles.axis}
        xAxisLabelTextStyle={styles.axis}
        noOfSections={3}
        maxValue={80}
        height={140}
        barBorderRadius={6}
        isAnimated
      />
      {trend && (
        <Text style={styles.trend}>↗ {trend} vs semana anterior</Text>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  title: { fontFamily: fonts.headingBold, fontSize: 16, color: colors.navy },
  link: { fontFamily: fonts.bodySemi, fontSize: 13, color: colors.coral },
  axis: { fontFamily: fonts.body, fontSize: 11, color: colors.textMuted },
  trend: { fontFamily: fonts.bodySemi, fontSize: 13, color: colors.olive, marginTop: 8 },
});
