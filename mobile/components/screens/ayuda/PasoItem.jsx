/**
 * Item de checklist interactivo para pasos accionables de la guía.
 */
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Check } from 'lucide-react-native';
import { colors, fonts, radius } from '../../../constants/theme';

export default function PasoItem({ text, done, onToggle, accentColor = colors.olive }) {
  return (
    <Pressable
      onPress={onToggle}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: done }}
    >
      <View
        style={[
          styles.checkbox,
          done && { backgroundColor: accentColor, borderColor: accentColor },
        ]}
      >
        {done && <Check size={14} color={colors.white} strokeWidth={3} />}
      </View>
      <Text style={[styles.text, done && styles.textDone]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    paddingVertical: 8,
  },
  rowPressed: {
    opacity: 0.75,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: radius.md - 4,
    borderWidth: 2,
    borderColor: colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
    flexShrink: 0,
  },
  text: {
    flex: 1,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 21,
    color: colors.text,
  },
  textDone: {
    color: colors.textMuted,
    textDecorationLine: 'line-through',
  },
});
