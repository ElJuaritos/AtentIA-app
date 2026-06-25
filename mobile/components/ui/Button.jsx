/**
 * Botón reutilizable con variantes de la paleta matIA.
 */
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { colors, fonts, radius, shadows } from '../../constants/theme';

const variants = {
  primary: {
    bg: colors.olive,
    text: colors.white,
    border: colors.olive,
  },
  secondary: {
    bg: colors.white,
    text: colors.navy,
    border: colors.borderStrong,
  },
  coral: {
    bg: colors.coral,
    text: colors.navy,
    border: colors.coral,
  },
  navy: {
    bg: colors.navy,
    text: colors.white,
    border: colors.navy,
  },
  ghost: {
    bg: 'transparent',
    text: colors.coral,
    border: 'transparent',
  },
};

export default function Button({
  label,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  style,
  textStyle,
}) {
  const v = variants[variant] || variants.primary;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: v.bg,
          borderColor: v.border,
          opacity: pressed || disabled ? 0.85 : 1,
        },
        variant === 'primary' && shadows.olive,
        variant === 'navy' && shadows.soft,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={v.text} />
      ) : (
        <Text style={[styles.label, { color: v.text }, textStyle]}>{label}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.pill,
    borderWidth: 1.5,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: fonts.bodySemi,
    fontSize: 16,
  },
});
