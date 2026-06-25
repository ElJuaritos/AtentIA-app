/**
 * Lista de temas activos con barra de progreso.
 */
import { StyleSheet, Text, View } from 'react-native';
import Badge from '../../ui/Badge';
import Card from '../../ui/Card';
import ProgressBar from '../../ui/ProgressBar';
import { colorMap, colors, fonts, radius } from '../../../constants/theme';

export default function TopicProgress({ topics = [] }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.header}>
        <Text style={styles.title}>Temas activos</Text>
        <Badge label={`${topics.length} activos`} tone="mint" />
      </View>
      {topics.map((topic) => (
        <Card key={topic.id} style={styles.topicCard}>
          <View style={styles.row}>
            <View style={[styles.iconBox, { backgroundColor: `${colorMap[topic.color] || colors.olive}20` }]}>
              <Text style={styles.iconText}>{topic.icon}</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.topRow}>
                <Text style={styles.name}>{topic.name}</Text>
                <Text style={styles.percent}>{topic.progress}%</Text>
              </View>
              <ProgressBar progress={topic.progress} color={topic.color} />
            </View>
          </View>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginTop: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  title: { fontFamily: fonts.headingBold, fontSize: 17, color: colors.navy },
  topicCard: { marginBottom: 10, padding: 14 },
  row: { flexDirection: 'row', alignItems: 'center' },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: { fontFamily: fonts.bodySemi, fontSize: 14, color: colors.navy },
  content: { flex: 1, marginLeft: 12 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  name: { fontFamily: fonts.bodySemi, fontSize: 15, color: colors.navy },
  percent: { fontFamily: fonts.bodySemi, fontSize: 14, color: colors.textSoft },
});
