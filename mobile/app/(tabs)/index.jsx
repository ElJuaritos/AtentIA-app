/**
 * Dashboard principal — resumen del aprendizaje del niño.
 */
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Bell, BarChart3, CheckCircle, Clock, Medal, Target } from 'lucide-react-native';
import ChildCard from '../../components/screens/dashboard/ChildCard';
import TopicProgress from '../../components/screens/dashboard/TopicProgress';
import WeeklyChart from '../../components/screens/dashboard/WeeklyChart';
import ScreenHeader from '../../components/ui/ScreenHeader';
import StatCard from '../../components/ui/StatCard';
import { colors, fonts, radius, shadows } from '../../constants/theme';
import { mockData } from '../../data/mockData';
import { getChild, getDashboard } from '../../services/api';

export default function DashboardScreen() {
  const router = useRouter();
  const [parent, setParent] = useState(mockData.parent);
  const [child, setChild] = useState(mockData.child);
  const [dashboard, setDashboard] = useState(mockData.dashboard);

  useEffect(() => {
    getChild().then((data) => {
      setParent(data.parent);
      setChild(data.child);
    });
    getDashboard().then(setDashboard);
  }, []);

  return (
    <View style={styles.root}>
      <ScreenHeader
        subtitle={`Hola, ${parent?.name?.split(' ')[0] || 'Mamá'} 👋`}
        title="Panel familiar"
        rightAction={
          <Pressable style={styles.bell}>
            <Bell size={20} color={colors.white} />
            <View style={styles.notifDot} />
          </Pressable>
        }
      >
        <ChildCard child={child} />
      </ScreenHeader>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.statsRow}>
          <StatCard icon={Clock} value={dashboard.stats.weeklyTime} label="Esta semana" iconColor={colors.navy} />
          <StatCard icon={CheckCircle} value={String(dashboard.stats.lessons)} label="Lecciones" iconColor={colors.olive} />
          <StatCard icon={Target} value={`${dashboard.stats.accuracy}%`} label="Precisión" iconColor={colors.coral} />
        </View>

        <WeeklyChart data={dashboard.weeklyActivity} trend={dashboard.stats.trend} />
        <TopicProgress topics={dashboard.activeTopics} />

        <View style={styles.ctaRow}>
          <Pressable style={styles.ctaPrimary} onPress={() => router.push('/(tabs)/reportes')}>
            <BarChart3 size={20} color={colors.white} />
            <Text style={styles.ctaPrimaryTitle}>Ver reportes</Text>
            <Text style={styles.ctaPrimarySub}>Análisis detallado</Text>
          </Pressable>
          <Pressable style={styles.ctaSecondary}>
            <View style={styles.medalWrap}>
              <Medal size={22} color={colors.coral} />
            </View>
            <Text style={styles.ctaSecondaryTitle}>Logros</Text>
            <Text style={styles.ctaSecondarySub}>{dashboard.achievements} nuevos esta semana</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.offwhite },
  bell: { padding: 8, position: 'relative' },
  notifDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.coral,
  },
  scroll: { flex: 1, marginTop: -8 },
  content: { paddingHorizontal: 20, paddingBottom: 110 },
  statsRow: { flexDirection: 'row', gap: 10, marginBottom: 4 },
  ctaRow: { flexDirection: 'row', gap: 12, marginTop: 20 },
  ctaPrimary: {
    flex: 1.2,
    backgroundColor: '#111E31',
    borderRadius: radius.xl,
    padding: 16,
    shadowColor: '#111E31',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  ctaPrimaryTitle: {
    fontFamily: fonts.headingBold,
    fontSize: 16,
    color: colors.white,
    marginTop: 10,
  },
  ctaPrimarySub: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: 'rgba(255,255,255,0.65)',
    marginTop: 2,
  },
  ctaSecondary: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: radius.xl,
    padding: 16,
    shadowColor: '#111E31',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  medalWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${colors.coral}33`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaSecondaryTitle: {
    fontFamily: fonts.headingBold,
    fontSize: 15,
    color: colors.navy,
    marginTop: 8,
  },
  ctaSecondarySub: {
    fontFamily: fonts.body,
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 2,
  },
});
