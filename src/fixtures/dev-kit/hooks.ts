import { providers } from 'ethers'
import { whenDefined } from '@devprotocol/util-ts'
import useSWR from 'swr'
import { addresses } from '@devprotocol/dev-kit'
import BigNumber from 'bignumber.js'
import { contractFactory } from '@devprotocol/dev-kit/l2'

const NETWORK = import.meta.env.VITE_L2_NETWORK
const PROJECT_ID = import.meta.env.VITE_INFURA_PROJECT_ID
const PROVIDER_URL = `https://${NETWORK}.infura.io/v3/${PROJECT_ID}`

const getProvider = () => {
  return new providers.JsonRpcProvider(PROVIDER_URL)
}

const calculateMaxRewardsPerBlock = async (prov: providers.BaseProvider) => {
  const registry = addresses.polygon.mainnet
  const contract = contractFactory(prov)
  const totalLocked = await contract.lockup(registry.lockup).totalLocked()
  const totalAssets = await contract.metricsFactory(registry.metricsFactory).metricsCount()
  const c = await contract.registry(registry.registry).registries('Policy')
  const maxRewards = contract.policy(c).rewards(totalLocked, totalAssets.toString())
  return maxRewards
}

const getTotalStakingAmountOnProtocol = async (prov: providers.BaseProvider) => {
  const registry = addresses.polygon.mainnet
  const contract = contractFactory(prov)
  return contract.lockup(registry.lockup).totalLocked()
}

const holdersShare = async (prov: providers.BaseProvider, amount: string, lockedups: string) => {
  const registry = addresses.polygon.mainnet
  const contract = contractFactory(prov)
  const c = await contract.registry(registry.registry).registries('Policy')
  return contract.policy(c).holdersShare(amount, lockedups)
}

export const useAPY = () => {
  const provider = getProvider()
  const { data: maxRewards, error: maxRewardsError } = useSWR(
    'calculateMaxRewardsPerBlock',
    () => whenDefined(provider, x => calculateMaxRewardsPerBlock(x).catch(() => '0')),
    {
      onError: err => {
        console.log(err)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  const { data: totalStaking, error: totalStakingError } = useSWR(
    'getTotalStakingAmountOnProtocol',
    () => whenDefined(provider, x => getTotalStakingAmountOnProtocol(x)),
    {
      onError: err => {
        console.log(err)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  const { data: holders, error: holdersError } = useSWR(
    'holdersShare',
    () =>
      maxRewards && totalStaking ? whenDefined(provider, x => holdersShare(x, maxRewards, totalStaking)) : undefined,
    {
      onError: err => {
        console.log(err)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )

  const stakers = maxRewards && holders ? new BigNumber(maxRewards).minus(new BigNumber(holders)) : undefined
  const year = new BigNumber(31536000)
  const apy = stakers && totalStaking ? stakers.times(year).div(totalStaking).times(100) : undefined

  return { apy, error: maxRewardsError || totalStakingError || holdersError }
}
