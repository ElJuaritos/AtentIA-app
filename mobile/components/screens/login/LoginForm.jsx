/**
 * Formulario de login minimalista — inputs con icono y CTA visible.
 */
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react-native';
import { colors, fonts, radius } from '../../../constants/theme';

function InputField({
  icon: Icon,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  rightAction,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={[
        styles.inputWrap,
        focused && styles.inputWrapFocused,
      ]}
    >
      <Icon size={18} color={focused ? colors.olive : colors.textMuted} style={styles.inputIcon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={styles.input}
      />
      {rightAction}
    </View>
  );
}

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('maria@familia.com');
  const [password, setPassword] = useState('123456');
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={styles.form}>
      <InputField
        icon={Mail}
        value={email}
        onChangeText={setEmail}
        placeholder="Correo electrónico"
        keyboardType="email-address"
      />

      <InputField
        icon={Lock}
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry={!showPass}
        rightAction={
          <Pressable onPress={() => setShowPass(!showPass)} hitSlop={8} style={styles.eyeBtn}>
            {showPass ? (
              <EyeOff size={18} color={colors.textMuted} />
            ) : (
              <Eye size={18} color={colors.textMuted} />
            )}
          </Pressable>
        }
      />

      {/* TouchableOpacity + estilos inline: NativeWind no anula el fondo */}
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onSubmit}
        style={styles.primaryBtn}
      >
        <Text style={styles.primaryBtnText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Pressable style={styles.forgotBtn}>
        <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
      </Pressable>

      <View style={styles.divider} />

      <Pressable style={styles.secondaryBtn}>
        <Text style={styles.secondaryBtnText}>Crear cuenta nueva</Text>
      </Pressable>

      <Text style={styles.legal}>
        Al continuar aceptas nuestros{' '}
        <Text style={styles.legalLink}>Términos</Text> y{' '}
        <Text style={styles.legalLink}>Privacidad</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { width: '100%' },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: colors.border,
    marginBottom: 14,
    paddingHorizontal: 14,
    minHeight: 52,
  },
  inputWrapFocused: {
    borderColor: colors.olive,
    backgroundColor: `${colors.mint}18`,
  },
  inputIcon: { marginRight: 10 },
  input: {
    flex: 1,
    fontFamily: fonts.body,
    fontSize: 15,
    color: colors.navy,
    paddingVertical: 14,
  },
  eyeBtn: { padding: 4 },
  primaryBtn: {
    backgroundColor: '#658E74',
    borderRadius: 16,
    minHeight: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    width: '100%',
    shadowColor: '#658E74',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  primaryBtnText: {
    fontFamily: fonts.bodySemi,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  forgotBtn: { alignSelf: 'center', marginTop: 20, padding: 4 },
  forgotText: {
    fontFamily: fonts.bodyMedium,
    fontSize: 14,
    color: colors.olive,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 24,
  },
  secondaryBtn: {
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: `${colors.navy}30`,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  secondaryBtnText: {
    fontFamily: fonts.bodySemi,
    fontSize: 15,
    color: colors.navy,
  },
  legal: {
    marginTop: 24,
    textAlign: 'center',
    fontFamily: fonts.body,
    fontSize: 11,
    color: colors.textMuted,
    lineHeight: 16,
  },
  legalLink: {
    color: colors.olive,
    fontFamily: fonts.bodyMedium,
  },
});
