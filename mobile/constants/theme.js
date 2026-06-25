/** Paleta de marca matIA — app digital de padres */
export const colors = {
  navy: '#111E31',
  coral: '#FFAEB2',
  mint: '#B2D7C8',
  olive: '#658E74',
  white: '#FFFFFF',
  offwhite: '#FAFAFA',
  text: '#111E31',
  textMuted: 'rgba(17, 30, 49, 0.55)',
  textSoft: 'rgba(17, 30, 49, 0.7)',
  border: 'rgba(17, 30, 49, 0.1)',
  borderStrong: 'rgba(17, 30, 49, 0.2)',
};

export const colorMap = {
  navy: colors.navy,
  coral: colors.coral,
  mint: colors.mint,
  olive: colors.olive,
};

export const fonts = {
  heading: 'Nunito_800ExtraBold',
  headingBold: 'Nunito_700Bold',
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemi: 'Inter_600SemiBold',
};

export const shadows = {
  soft: {
    shadowColor: colors.navy,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  olive: {
    shadowColor: colors.olive,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
};
