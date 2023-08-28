import { ParentPlatform } from 'src/redux/games/Games.types'
import { BsXbox, BsNintendoSwitch, BsPlaystation } from 'react-icons/bs'
import { SiLinux, SiIos, SiMacos } from 'react-icons/si'
import { HiDesktopComputer } from 'react-icons/hi'
import { AiFillAndroid } from 'react-icons/ai'

type TPropsGameCardPlatform = { platforms: ParentPlatform[] }

const GameCardPlatform: React.FC<TPropsGameCardPlatform> = platforms => {
	return (
		<>
			{platforms?.platforms.map((item, i) => {
				if (item.platform.slug === 'playstation') {
					return <BsPlaystation key={i} />
				} else if (item.platform.slug === 'xbox') {
					return <BsXbox key={i} />
				} else if (item.platform.slug === 'pc') {
					return <HiDesktopComputer key={i} />
				} else if (item.platform.slug === 'android') {
					return <AiFillAndroid key={i} />
				} else if (item.platform.slug === 'nintendo') {
					return <BsNintendoSwitch key={i} />
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
