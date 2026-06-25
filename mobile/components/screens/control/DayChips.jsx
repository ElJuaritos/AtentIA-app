/**
 * Selector de días de la semana para controles parentales.
 */
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius } from '../../../constants/theme';

const DAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

export default function DayChips({ enabledDays = [], onToggle }) {
  return (
    <View style={styles.row}>
      {DAYS.map((day) => {
        const active = enabledDays.includes(day);
        return (
          <Pressable
            key={day}
            onPress={() => onToggle(day)}
            style={[styles.chip, active && styles.chipActive]}
          >
            <Text style={[styles.text, active && styles.textActive]}>{day.slice(0, 1)}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  chip: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.offwhite,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipActive: { backgroundColor: colors.navy, borderColor: colors.navy },
  text: { fontFamily: fonts.bodySemi, fontSize: 13, color: colors.textSoft },
  textActive: { color: colors.white },
});
