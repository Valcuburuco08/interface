import Fuse from 'fuse.js'
import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'src/components/buttons/Button'
import { CurrencyLogo } from 'src/components/CurrencyLogo'
import { Box } from 'src/components/layout'
import { Text } from 'src/components/Text'
import { TextWithFuseMatches } from 'src/components/text/TextWithFuseMatches'
import { TokenOption } from 'src/components/TokenSelector/types'
import { formatNumberBalance, formatUSDPrice } from 'src/utils/format'
import { Flex } from '../layout'

interface OptionProps {
  option: TokenOption
  onPress: () => void
  matches: Fuse.FuseResult<TokenOption>['matches']
  metadataType: 'balance' | 'disabled'
  icon?: ReactElement | null
}

export function Option({ option, onPress, matches, metadataType, icon }: OptionProps) {
  const symbolMatches = matches?.filter((m) => m.key === 'symbol')
  const nameMatches = matches?.filter((m) => m.key === 'name')
  const { currency, quantity, balanceUSD } = option
  const { t } = useTranslation()

  return (
    <Button testID={`currency-option-${currency.chainId}-${currency.symbol}`} onPress={onPress}>
      <Flex row alignItems="center" flexShrink={1} justifyContent="space-between" py="sm">
        <Flex row gap="sm" overflow="hidden">
          <Flex row alignItems="center" gap="xs">
            <CurrencyLogo currency={currency} size={32} />
            <Flex alignItems="flex-start" flexShrink={1} gap="none">
              <Flex centered row gap="xs">
                <TextWithFuseMatches
                  matches={nameMatches}
                  text={currency.name ?? ''}
                  variant="subhead"
                />
                {icon}
              </Flex>
              <Flex row>
                <TextWithFuseMatches
                  matches={symbolMatches}
                  text={currency.symbol ?? ''}
                  variant="caption"
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {metadataType !== 'disabled' ? (
          <Flex row justifyContent="flex-end">
            {quantity && quantity !== 0 ? (
              <DataFormatter
                main={formatNumberBalance(quantity)}
                sub={formatUSDPrice(balanceUSD)}
              />
            ) : null}
          </Flex>
        ) : (
          <Flex backgroundColor="translucentBackground" borderRadius="md" padding="sm">
            <Text variant="mediumLabel">{t('Not available')}</Text>
          </Flex>
        )}
      </Flex>
    </Button>
  )
}

interface DataFormatterProps {
  pre?: React.ReactNode
  main: React.ReactNode
  sub?: React.ReactNode
}

/** Helper component to format rhs metadata for a given token. */
function DataFormatter({ pre, main, sub }: DataFormatterProps) {
  return (
    <Flex row>
      {pre}
      <Box alignItems="flex-end" minWidth={70}>
        <Text variant="body">{main}</Text>
        {sub && (
          <Text color="textSecondary" variant="bodySmall">
            {sub}
          </Text>
        )}
      </Box>
    </Flex>
  )
}
