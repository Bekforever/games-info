import { key } from 'src/config/url.config'
import { api } from '../index.api'
import { IPlatformsDataResult } from './shared.types'

export const sharedApi = api.injectEndpoints({
	endpoints: builder => ({
		getPlatforms: builder.query<IPlatformsDataResult, void>({
			query: () => ({
				url: `/platforms?${key}`,
			}),
		}),
	}),
})
