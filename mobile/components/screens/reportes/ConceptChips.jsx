/**
 * Chips de conceptos dominados o pendientes.
 */
import { StyleSheet, Text, View } from 'react-native';
import { Check, Target } from 'lucide-react-native';
import Badge from '../../ui/Badge';
import Card from '../../ui/Card';
import { colors, fonts, radius } from '../../../constants/theme';

export default function ConceptChips({ title, items = [], type = 'dominated' }) {
  const isDominated = type === 'dominated';
  const Icon = isDominated ? Check : Target;
  const iconColor = isDominated ? colors.olive : colors.coral;
  const chipBg = isDominated ? `${colors.mint}55` : `${colors.coral}44`;
  const chipText = isDominated ? colors.olive : colors.navy;

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <View style={[styles.iconWrap, { backgroundColor: `${iconColor}20` }]}>
            <Icon size={16} color={iconColor} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Badge label={String(items.length)} tone={isDominated ? 'mint' : 'coral'} />
      </View>
      <View style={styles.chips}>
        {items.map((item) => (
          <View key={item} style={[styles.chip, { backgroundColor: chipBg }]}>
            {isDominated && <Check size={12} color={colors.olive} style={{ marginRight: 4 }} />}
            <Text style={[styles.chipText, { color: chipText }]}>{item}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: 14 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  iconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  title: { fontFamily: fonts.headingBold, fontSize: 15, color: colors.navy },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: radius.pill,
  },
  chipText: { fontFamily: fonts.bodyMedium, fontSize: 12 },
});
