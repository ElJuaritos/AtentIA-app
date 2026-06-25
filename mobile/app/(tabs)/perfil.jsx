/**
 * Perfil del padre — cuenta, dispositivo y preferencias.
 */
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Bell,
  ChevronRight,
  CreditCard,
  Globe,
  HelpCircle,
  Smartphone,
  Star,
  Sun,
  User,
} from 'lucide-react-native';
import { colors, fonts, radius } from '../../constants/theme';
import { mockData } from '../../data/mockData';
import { getChild } from '../../services/api';

const SECTIONS = [
  {
    title: 'CUENTA',
    items: [
      { icon: User, label: 'Datos personales', type: 'link' },
      { icon: CreditCard, label: 'Suscripción Unlimited', type: 'badge', badge: 'Activa' },
    ],
  },
  {
    title: 'DISPOSITIVO',
    items: [{ icon: Smartphone, label: 'Mi consola matIA', type: 'link' }],
  },
  {
    title: 'PREFERENCIAS',
    items: [
      { icon: Bell, label: 'Notificaciones', type: 'switch', key: 'notifications' },
      { icon: Sun, label: 'Modo oscuro', type: 'switch', key: 'darkMode' },
    ],
  },
  {
    title: 'AYUDA',
    items: [
      { icon: HelpCircle, label: 'Centro de ayuda', type: 'link' },
      { icon: Globe, label: 'Contactar soporte', type: 'link' },
    ],
  },
];

export default function PerfilScreen() {
  const router = useRouter();
  const [parent, setParent] = useState(mockData.parent);
  const [switches, setSwitches] = useState({ notifications: true, darkMode: false });

  useEffect(() => {
    getChild().then((d) => setParent(d.parent));
  }, []);

  return (
    <View style={styles.root}>
      <LinearGradient colors={[colors.navy, '#1a2d4a']} style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.initials}>{parent.initials}</Text>
        </View>
        <Text style={styles.name}>{parent.name}</Text>
        <Text style={styles.email}>{parent.email}</Text>
        <View style={styles.planBadge}>
          <Star size={12} color={colors.coral} fill={colors.coral} />
          <Text style={styles.planText}>{parent.planLabel}</Text>
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {SECTIONS.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionCard}>
              {section.items.map((item, idx) => {
                const Icon = item.icon;
                const isLast = idx === section.items.length - 1;
                return (
                  <Pressable
                    key={item.label}
                    style={[styles.row, !isLast && styles.rowBorder]}
                    disabled={item.type === 'switch'}
                  >
                    <View style={styles.rowIcon}>
                      <Icon size={18} color={colors.olive} />
                    </View>
                    <Text style={styles.rowLabel}>{item.label}</Text>
                    {item.type === 'link' && <ChevronRight size={18} color={colors.textMuted} />}
                    {item.type === 'badge' && (
                      <View style={styles.activeBadge}>
                        <Text style={styles.activeBadgeText}>{item.badge}</Text>
                      </View>
                    )}
                    {item.type === 'switch' && (
                      <Switch
                        value={switches[item.key]}
                        onValueChange={(v) => setSwitches((s) => ({ ...s, [item.key]: v }))}
                        trackColor={{ false: colors.border, true: colors.olive }}
                        thumbColor={colors.white}
                      />
                    )}
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={styles.logout}
          activeOpacity={0.85}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.offwhite },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 32,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  initials: { fontFamily: fonts.heading, fontSize: 24, color: colors.white },
  name: { fontFamily: fonts.heading, fontSize: 22, color: colors.white, marginTop: 12 },
  email: { fontFamily: fonts.body, fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 4 },
  planBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.12)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: radius.pill,
    marginTop: 12,
  },
  planText: { fontFamily: fonts.bodySemi, fontSize: 12, color: colors.white },
  content: { paddingHorizontal: 20, paddingBottom: 110, paddingTop: 8 },
  section: { marginTop: 20 },
  sectionTitle: {
    fontFamily: fonts.bodySemi,
    fontSize: 11,
    color: colors.textMuted,
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: radius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: colors.border },
  rowIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: `${colors.mint}33`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rowLabel: { flex: 1, fontFamily: fonts.bodyMedium, fontSize: 15, color: colors.navy },
  activeBadge: {
    backgroundColor: `${colors.mint}55`,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.pill,
    marginRight: 8,
  },
  activeBadgeText: { fontFamily: fonts.bodySemi, fontSize: 11, color: colors.olive },
  logout: {
    marginTop: 24,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: `${colors.coral}99`,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoutText: {
    fontFamily: fonts.bodySemi,
    fontSize: 15,
    color: colors.olive,
  },
});
