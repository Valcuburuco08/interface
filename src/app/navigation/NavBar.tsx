import { ShadowProps, useResponsiveProp } from '@shopify/restyle'
import { BlurView } from 'expo-blur'
import { selectionAsync } from 'expo-haptics'
import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'
import { TapGestureHandler, TapGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import {
  cancelAnimation,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg'
import { useAppDispatch, useAppTheme } from 'src/app/hooks'
import { GradientBackground } from 'src/components/gradients/GradientBackground'
import { AnimatedBox, AnimatedFlex, Box, Flex } from 'src/components/layout'
import { Text } from 'src/components/Text'
import { openModal } from 'src/features/modals/modalSlice'
import { ModalName } from 'src/features/telemetry/constants'
import { prepareSwapFormState } from 'src/features/transactions/swap/utils'
import { Theme } from 'src/styles/theme'
import { CurrencyId } from 'src/utils/currencyId'
import SearchIcon from '../../assets/icons/search.svg'

export const NAV_BAR_HEIGHT_XS = 52
export const NAV_BAR_HEIGHT_SM = 72

export const SWAP_BUTTON_HEIGHT = 56
const SWAP_BUTTON_SHADOW_OFFSET: ShadowProps<Theme>['shadowOffset'] = { width: 0, height: 4 }

export const NavBar = (): JSX.Element => {
  const insets = useSafeAreaInsets()
  const theme = useAppTheme()
  const isDarkMode = useColorScheme() === 'dark'

  const BUTTONS_OFFSET =
    useResponsiveProp({ xs: theme.spacing.spacing24, sm: theme.spacing.none }) ?? theme.spacing.none

  return (
    <>
      <Box pointerEvents="none" style={StyleSheet.absoluteFill}>
        <GradientBackground overflow="hidden">
          <Svg height="100%" opacity={isDarkMode ? '1' : '0.3'} width="100%">
            <Defs>
              <LinearGradient id="background" x1="0%" x2="0%" y1="85%" y2="100%">
                <Stop offset="0" stopColor={theme.colors.black} stopOpacity="0" />
                <Stop offset="1" stopColor={theme.colors.black} stopOpacity="0.5" />
              </LinearGradient>
            </Defs>
            <Rect fill="url(#background)" height="100%" opacity={1} width="100%" x="0" y="0" />
          </Svg>
        </GradientBackground>
      </Box>
      <Flex
        row
        alignItems="center"
        bottom={0}
        gap="none"
        justifyContent="flex-end"
        left={0}
        pointerEvents="box-none"
        position="absolute"
        right={0}
        style={{ paddingBottom: insets.bottom + BUTTONS_OFFSET }}>
        <Flex
          row
          alignItems="center"
          flex={1}
          gap="spacing12"
          justifyContent="space-between"
          mx="spacing24"
          pointerEvents="auto">
          <ExploreTabBarButton />
          <SwapFAB />
        </Flex>
      </Flex>
    </>
  )
}

type SwapTabBarButtonProps = {
  /**
   * The value to scale to when the Pressable is being pressed.
   * @default 0.95
   */
  activeScale?: number
  inputCurrencyId?: CurrencyId
} & WithSpringConfig

const SwapFAB = memo(({ activeScale = 0.95, inputCurrencyId }: SwapTabBarButtonProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const theme = useAppTheme()
  const isDarkMode = useColorScheme() === 'dark'

  const onPress = useCallback(() => {
    selectionAsync()

    dispatch(
      openModal({
        name: ModalName.Swap,
        initialState: prepareSwapFormState({ inputCurrencyId }),
      })
    )
  }, [dispatch, inputCurrencyId])

  const scale = useSharedValue(1)
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }), [scale])
  const onGestureEvent = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onStart: () => {
      cancelAnimation(scale)
      scale.value = withSpring(activeScale)
    },
    onEnd: () => {
      runOnJS(onPress)()
    },
    onFinish: () => {
      cancelAnimation(scale)
      scale.value = withSpring(1)
    },
  })

  return (
    <Box alignItems="center" bg="none" pointerEvents="box-none" position="relative">
      <TapGestureHandler onGestureEvent={onGestureEvent}>
        <AnimatedBox
          alignItems="center"
          height={SWAP_BUTTON_HEIGHT}
          justifyContent="center"
          pointerEvents="auto"
          px="spacing24"
          py="spacing16"
          shadowColor="shadowBranded"
          shadowOffset={SWAP_BUTTON_SHADOW_OFFSET}
          shadowOpacity={isDarkMode ? 0.6 : 0.4}
          shadowRadius={theme.borderRadii.rounded20}
          style={[animatedStyle]}>
          <Box
            borderRadius="rounded32"
            bottom={0}
            left={0}
            overflow="hidden"
            pointerEvents="auto"
            position="absolute"
            right={0}
            top={0}>
            <Svg height="100%" width="100%">
              <Defs>
                <LinearGradient id="background" x1="0%" x2="0%" y1="0%" y2="100%">
                  <Stop offset="0" stopColor="#F160F9" stopOpacity="1" />
                  <Stop offset="1" stopColor="#FB36D0" stopOpacity="1" />
                </LinearGradient>
              </Defs>
              <Rect fill="url(#background)" height="100%" opacity={1} width="100%" x="0" y="0" />
            </Svg>
          </Box>
          <Text color="textOnBrightPrimary" variant="buttonLabelMedium">
            {t('Swap')}
          </Text>
        </AnimatedBox>
      </TapGestureHandler>
    </Box>
  )
})

const ACTIVE_SEARCH_BUTTON_SCALE = 0.985
function ExploreTabBarButton(): JSX.Element {
  const dispatch = useAppDispatch()
  const theme = useAppTheme()
  const isDarkMode = useColorScheme() === 'dark'
  const { t } = useTranslation()

  const onPress = (): void => {
    dispatch(openModal({ name: ModalName.Explore }))
  }
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }), [scale])
  const onGestureEvent = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onStart: () => {
      cancelAnimation(scale)
      scale.value = withSpring(ACTIVE_SEARCH_BUTTON_SCALE)
    },
    onEnd: () => {
      runOnJS(onPress)()
    },
    onFinish: () => {
      cancelAnimation(scale)
      scale.value = withSpring(1)
    },
  })

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.searchBar, { borderRadius: theme.borderRadii.roundedFull }]}
      onPress={onPress}>
      <TapGestureHandler onGestureEvent={onGestureEvent}>
        <AnimatedFlex borderRadius="roundedFull" overflow="hidden" style={animatedStyle}>
          <BlurView intensity={100}>
            <Flex
              grow
              row
              alignItems="center"
              bg={isDarkMode ? 'background2' : 'background1'}
              borderRadius="roundedFull"
              flex={1}
              gap="spacing8"
              justifyContent="flex-start"
              opacity={isDarkMode ? 0.6 : 0.8}
              p="spacing16"
              shadowColor={isDarkMode ? 'background3' : 'textTertiary'}
              shadowOffset={SWAP_BUTTON_SHADOW_OFFSET}
              shadowOpacity={isDarkMode ? 0.6 : 0.4}
              shadowRadius={theme.borderRadii.rounded20}>
              <SearchIcon color={theme.colors.textSecondary} />
              <Text color="textSecondary" variant="bodyLarge">
                {t('Search web3')}
              </Text>
            </Flex>
          </BlurView>
        </AnimatedFlex>
      </TapGestureHandler>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    flexGrow: 1,
  },
})