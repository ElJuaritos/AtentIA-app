/**
 * Tarjeta de estadística compacta para dashboard y reportes.
 */
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, shadows } from '../../constants/theme';

export default function StatCard({ icon: Icon, value, label, iconColor = colors.olive }) {
  return (
    <View style={styles.card}>
      {Icon && (
        <View style={[styles.iconWrap, { backgroundColor: `${iconColor}20` }]}>
          <Icon size={18} color={iconColor} />
        </View>
      )}
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: radius.lg,
    padding: 14,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.soft,
  },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  value: {
    fontFamily: fonts.heading,
    fontSize: 20,
    color: colors.navy,
  },
  label: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
});
