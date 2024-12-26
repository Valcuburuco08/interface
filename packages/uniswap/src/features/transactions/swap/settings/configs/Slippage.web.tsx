import { SlippageControl } from 'uniswap/src/features/transactions/swap/settings/SlippageControl'
import { SwapSettingConfig } from 'uniswap/src/features/transactions/swap/settings/configs/types'

export const Slippage: SwapSettingConfig = {
  renderTitle: (t) => t('swap.slippage.settings.title'),
  renderTooltip: (t) => t('swap.settings.slippage.description'),
  settingId: 'slippage',
  Control() {
    return <SlippageControl saveOnBlur={false} />
  },
}