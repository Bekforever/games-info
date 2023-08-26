import { IGamePlatform } from 'src/redux/games/Games.types'
import { BsXbox, BsNintendoSwitch } from 'react-icons/bs'
import {
	SiLinux,
	SiNintendo3Ds,
	SiIos,
	SiMacos,
	SiPlaystation5,
	SiPlaystation4,
	SiPlaystation3,
	SiPlaystation2,
} from 'react-icons/si'
import { HiDesktopComputer } from 'react-icons/hi'
import { AiFillAndroid } from 'react-icons/ai'

type TPropsGameCardPlatform = { platforms: IGamePlatform[] }

const GameCardPlatform: React.FC<TPropsGameCardPlatform> = platforms => {
	return (
		<>
			{platforms?.platforms.map((item, i) => {
				if (item.platform.slug === 'playstation5') {
					return <SiPlaystation5 key={i} />
				} else if (item.platform.slug === 'playstation4') {
					return <SiPlaystation4 key={i} />
				} else if (item.platform.slug === 'playstation3') {
					return <SiPlaystation3 key={i} />
				} else if (item.platform.slug === 'playstation2') {
					return <SiPlaystation2 key={i} />
				} else if (item.platform.slug === 'xbox360') {
					return <BsXbox key={i} />
				} else if (item.platform.slug === 'pc') {
					return <HiDesktopComputer key={i} />
				} else if (item.platform.slug === 'android') {
					return <AiFillAndroid key={i} />
				} else if (item.platform.slug === 'nintendo-switch') {
					return <BsNintendoSwitch key={i} />
				} else if (item.platform.slug === 'nintendo-3ds') {
					return <SiNintendo3Ds key={i} />
				} else if (item.platform.slug === 'ios') {
					return <SiIos key={i} />
				} else if (item.platform.slug === 'macos') {
					return <SiMacos key={i} />
				} else if (item.platform.slug === 'linux') {
					return <SiLinux key={i} />
				}
			})}
		</>
	)
}
export { GameCardPlatform }
