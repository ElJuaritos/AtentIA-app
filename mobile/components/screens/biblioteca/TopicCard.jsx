/**
 * Tarjeta de tema/cartucho en la biblioteca.
 */
import { StyleSheet, Text, View } from 'react-native';
import Card from '../../ui/Card';
import ProgressBar from '../../ui/ProgressBar';
import { colorMap, colors, fonts, radius } from '../../../constants/theme';

export default function TopicCard({ topic, style }) {
  return (
    <Card style={[styles.card, style]}>
      <View style={[styles.iconBox, { backgroundColor: `${colorMap[topic.color] || colors.mint}25` }]}>
        <Text style={styles.icon}>{topic.icon}</Text>
      </View>
      <Text style={styles.name}>{topic.name}</Text>
      <Text style={styles.lessons}>{topic.lessons} lecciones</Text>
      <ProgressBar progress={topic.progress} color={topic.color} height={6} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, margin: 6, minHeight: 150 },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: { fontSize: 16, fontFamily: fonts.bodySemi, color: colors.navy },
  name: { fontFamily: fonts.headingBold, fontSize: 15, color: colors.navy },
  lessons: { fontFamily: fonts.body, fontSize: 12, color: colors.textMuted, marginVertical: 6 },
});
