/**
 * Filtro horizontal por edad para la biblioteca.
 */
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { colors, fonts, radius } from '../../../constants/theme';

const AGES = ['Todos', '5 años', '6 años', '7 años', '8 años', '9 años', '10 años'];

export default function AgeFilter({ selected, onSelect }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
      {AGES.map((age) => {
        const active = selected === age;
        return (
          <Pressable
            key={age}
            onPress={() => onSelect(age)}
            style={[styles.chip, active && styles.chipActive]}
          >
            <Text style={[styles.text, active && styles.textActive]}>{age}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { marginVertical: 12 },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: radius.pill,
    backgroundColor: colors.offwhite,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipActive: { backgroundColor: colors.navy, borderColor: colors.navy },
  text: { fontFamily: fonts.bodyMedium, fontSize: 13, color: colors.navy },
  textActive: { color: colors.white },
});
