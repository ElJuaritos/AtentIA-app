/**
 * Controles parentales — límites, horarios y permisos.
 */
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { Brain, Clock, Lock } from 'lucide-react-native';
import DayChips from '../../components/screens/control/DayChips';
import Card from '../../components/ui/Card';
import ScreenHeader from '../../components/ui/ScreenHeader';
import { colors, fonts, radius } from '../../constants/theme';
import { mockData } from '../../data/mockData';
import { getChild, getControls } from '../../services/api';

const AGE_OPTIONS = ['5–6 años', '7–8 años', '9–10 años'];

export default function ControlScreen() {
  const [child, setChild] = useState(mockData.child);
  const [controls, setControls] = useState(mockData.controls);
  const [hours, setHours] = useState(mockData.controls.dailyLimitHours);
  const [days, setDays] = useState(mockData.controls.enabledDays);
  const [aiOnline, setAiOnline] = useState(mockData.controls.aiOnline);
  const [privateMode, setPrivateMode] = useState(mockData.controls.privateMode);
  const [contentAge, setContentAge] = useState(mockData.controls.contentAge);

  useEffect(() => {
    getChild().then((d) => setChild(d.child));
    getControls().then((c) => {
      setControls(c);
      setHours(c.dailyLimitHours);
      setDays(c.enabledDays);
      setAiOnline(c.aiOnline);
      setPrivateMode(c.privateMode);
      setContentAge(c.contentAge);
    });
  }, []);

  const toggleDay = (day) => {
    setDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <View style={styles.root}>
      <ScreenHeader
        title="Controles parentales"
        subtitle={`Configuración de uso para ${child.name.split(' ')[0]}`}
      />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.iconWrap, { backgroundColor: `${colors.mint}44` }]}>
              <Clock size={18} color={colors.olive} />
            </View>
            <View>
              <Text style={styles.cardTitle}>Límite diario de uso</Text>
              <Text style={styles.cardSub}>Tiempo máximo por día</Text>
            </View>
          </View>
          <View style={styles.stepper}>
            <Pressable style={styles.stepBtn} onPress={() => setHours(Math.max(1, hours - 1))}>
              <Text style={styles.stepBtnText}>−</Text>
            </Pressable>
            <View style={styles.stepValue}>
              <Text style={styles.stepNumber}>{hours}</Text>
              <Text style={styles.stepUnit}>h</Text>
              <Text style={styles.stepLabel}>por día</Text>
            </View>
            <Pressable style={[styles.stepBtn, styles.stepBtnActive]} onPress={() => setHours(Math.min(6, hours + 1))}>
              <Text style={[styles.stepBtnText, { color: colors.white }]}>+</Text>
            </Pressable>
          </View>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Horarios permitidos</Text>
          <Text style={styles.cardSub}>Días habilitados para usar matIA</Text>
          <DayChips enabledDays={days} onToggle={toggleDay} />
          <View style={styles.scheduleRow}>
            <View>
              <Text style={styles.scheduleLabel}>Horario de uso</Text>
              <Text style={styles.scheduleValue}>{controls?.schedule || '8:00 AM – 8:00 PM'}</Text>
            </View>
            <Pressable style={styles.editBtn}>
              <Text style={styles.editBtnText}>Editar</Text>
            </Pressable>
          </View>
        </Card>

        <Card style={styles.card}>
          <ToggleRow
            icon={Brain}
            iconBg={`${colors.mint}44`}
            iconColor={colors.olive}
            title="IA Online"
            subtitle="Permite respuestas en tiempo real con IA"
            value={aiOnline}
            onValueChange={setAiOnline}
          />
          <View style={styles.divider} />
          <ToggleRow
            icon={Lock}
            iconBg={`${colors.coral}44`}
            iconColor={colors.navy}
            title="Modo privado"
            subtitle="No guarda historial de conversaciones"
            value={privateMode}
            onValueChange={setPrivateMode}
          />
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Clasificación de contenido</Text>
          <View style={styles.ageRow}>
            {AGE_OPTIONS.map((age) => (
              <Pressable
                key={age}
                onPress={() => setContentAge(age)}
                style={[styles.ageChip, contentAge === age && styles.ageChipActive]}
              >
                <Text style={[styles.ageText, contentAge === age && styles.ageTextActive]}>{age}</Text>
              </Pressable>
            ))}
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}

function ToggleRow({ icon: Icon, iconBg, iconColor, title, subtitle, value, onValueChange }) {
  return (
    <View style={styles.toggleRow}>
      <View style={[styles.iconWrap, { backgroundColor: iconBg }]}>
        <Icon size={18} color={iconColor} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSub}>{subtitle}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: colors.border, true: colors.olive }}
        thumbColor={colors.white}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.offwhite },
  content: { paddingHorizontal: 20, paddingBottom: 110, paddingTop: 8 },
  card: { marginBottom: 14 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardTitle: { fontFamily: fonts.headingBold, fontSize: 15, color: colors.navy },
  cardSub: { fontFamily: fonts.body, fontSize: 12, color: colors.textMuted, marginTop: 2 },
  stepper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 24 },
  stepBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.offwhite,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  stepBtnActive: { backgroundColor: '#111E31', borderColor: '#111E31' },
  stepBtnText: { fontFamily: fonts.heading, fontSize: 22, color: colors.navy },
  stepValue: { alignItems: 'center' },
  stepNumber: { fontFamily: fonts.heading, fontSize: 36, color: colors.navy },
  stepUnit: { fontFamily: fonts.bodySemi, fontSize: 16, color: colors.textSoft },
  stepLabel: { fontFamily: fonts.body, fontSize: 12, color: colors.textMuted },
  scheduleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  scheduleLabel: { fontFamily: fonts.body, fontSize: 12, color: colors.textMuted },
  scheduleValue: { fontFamily: fonts.bodySemi, fontSize: 15, color: colors.navy, marginTop: 2 },
  editBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: radius.pill,
    backgroundColor: colors.offwhite,
    borderWidth: 1,
    borderColor: colors.border,
  },
  editBtnText: { fontFamily: fonts.bodySemi, fontSize: 13, color: colors.navy },
  toggleRow: { flexDirection: 'row', alignItems: 'center' },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: 14 },
  ageRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 },
  ageChip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: radius.pill,
    backgroundColor: colors.offwhite,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ageChipActive: { backgroundColor: '#111E31', borderColor: '#111E31' },
  ageText: { fontFamily: fonts.bodyMedium, fontSize: 13, color: colors.navy },
  ageTextActive: { color: colors.white },
});
