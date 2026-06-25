/**
 * Contenedor tipo card con sombra suave.
 */
import { StyleSheet, View } from 'react-native';
import { colors, radius, shadows } from '../../constants/theme';

export default function Card({ children, style, variant = 'default' }) {
  return (
    <View
      style={[
        styles.card,
        variant === 'dark' && styles.dark,
        variant === 'mint' && styles.mint,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: radius.xl,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.soft,
  },
  dark: {
    backgroundColor: colors.navy,
  },
  mint: {
    backgroundColor: `${colors.mint}33`,
  },
});
