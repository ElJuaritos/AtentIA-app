/**
 * Biblioteca de cartuchos y temas educativos.
 */
import { useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Search, Zap } from 'lucide-react-native';
import AgeFilter from '../../components/screens/biblioteca/AgeFilter';
import TopicCard from '../../components/screens/biblioteca/TopicCard';
import ScreenHeader from '../../components/ui/ScreenHeader';
import { colors, fonts, radius } from '../../constants/theme';
import { mockData } from '../../data/mockData';
import { getCartridges } from '../../services/api';

export default function BibliotecaScreen() {
  const [data, setData] = useState(mockData.cartridges);
  const [search, setSearch] = useState('');
  const [ageFilter, setAgeFilter] = useState('Todos');

  useEffect(() => {
    getCartridges().then(setData);
  }, []);

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.topics.filter((t) => {
      const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
      const matchAge =
        ageFilter === 'Todos' || ageFilter.startsWith(String(t.age));
      return matchSearch && matchAge;
    });
  }, [data, search, ageFilter]);

  return (
    <View style={styles.root}>
      <ScreenHeader title="Biblioteca" subtitle="Cartuchos y cuentos" />

      <View style={styles.searchWrap}>
        <Search size={18} color={colors.textMuted} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar lecciones..."
          placeholderTextColor={colors.textMuted}
          style={styles.search}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={
          <>
            <Text style={styles.filterLabel}>FILTRAR POR EDAD</Text>
            <AgeFilter selected={ageFilter} onSelect={setAgeFilter} />

            <LinearGradient colors={[colors.navy, '#1a2d4a']} style={styles.featured}>
              <View style={styles.featuredTag}>
                <Zap size={14} color={colors.coral} />
                <Text style={styles.featuredTagText}>{data.featured.tag}</Text>
              </View>
              <Text style={styles.featuredTitle}>{data.featured.title}</Text>
              <Text style={styles.featuredSub}>
                {data.featured.lessons} lecciones · {data.featured.ageRange}
              </Text>
              <TouchableOpacity style={styles.featuredBtn} activeOpacity={0.85}>
                <Text style={styles.featuredBtnText}>Activar cartucho</Text>
              </TouchableOpacity>
            </LinearGradient>
          </>
        }
        renderItem={({ item }) => <TopicCard topic={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.offwhite },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: -16,
    borderRadius: radius.lg,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.body,
    fontSize: 15,
    color: colors.navy,
  },
  filterLabel: {
    fontFamily: fonts.bodySemi,
    fontSize: 11,
    color: colors.textMuted,
    letterSpacing: 0.8,
    marginTop: 16,
    marginBottom: 4,
  },
  featured: {
    borderRadius: radius.xl,
    padding: 20,
    marginTop: 8,
    marginBottom: 8,
  },
  featuredTag: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 10 },
  featuredTagText: {
    fontFamily: fonts.bodySemi,
    fontSize: 11,
    color: colors.coral,
    letterSpacing: 1,
  },
  featuredTitle: {
    fontFamily: fonts.heading,
    fontSize: 20,
    color: colors.white,
  },
  featuredSub: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
    marginBottom: 16,
  },
  featuredBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFAEB2',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: radius.lg,
  },
  featuredBtnText: {
    fontFamily: fonts.bodySemi,
    fontSize: 14,
    color: '#111E31',
  },
  list: { paddingHorizontal: 14, paddingBottom: 110 },
});
