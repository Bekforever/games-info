import { ParentPlatform } from 'src/redux/games/Games.types'
import { BsXbox, BsNintendoSwitch, BsPlaystation } from 'react-icons/bs'
import { SiLinux, SiIos, SiMacos } from 'react-icons/si'
import { HiDesktopComputer } from 'react-icons/hi'
import { AiFillAndroid } from 'react-icons/ai'

type TPropsGameCardPlatform = { platforms: ParentPlatform[] }

const GameCardPlatform: React.FC<TPropsGameCardPlatform> = platforms => {
	return (
		<>
			{platforms.platforms.map((item, i) => {
				switch (item.platform.slug) {
					case 'playstation':
						return <BsPlaystation key={i} />
					case 'xbox':
						return <BsXbox key={i} />
					case 'pc':
						return <HiDesktopComputer key={i} />
					case 'android':
						return <AiFillAndroid key={i} />
					case 'nintendo':
						return <BsNintendoSwitch key={i} />
					case 'ios':
						return <SiIos key={i} />
					case 'macos':
						return <SiMacos key={i} />
					case 'linux':
						return <SiLinux key={i} />
				}
			})}
		</>
	)
}
export { GameCardPlatform }
