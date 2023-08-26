import { api } from '../index.api'
import { IPlatformsDataResult } from './shared.types'

export const sharedApi = api.injectEndpoints({
	endpoints: builder => ({
		getPlatforms: builder.query<IPlatformsDataResult, void>({
			query: () => ({
				url: '/platforms?key=3e49c7b55bf4452bac85435423b53726',
			}),
		}),
	}),
})
