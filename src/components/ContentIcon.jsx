import { BoltIcon, DeviceIcon, LayoutIcon, ShieldIcon, WindowIcon } from './Icons'

const icons = {
  bolt: BoltIcon,
  device: DeviceIcon,
  layout: LayoutIcon,
  shield: ShieldIcon,
  window: WindowIcon,
}

function ContentIcon({ name }) {
  const Icon = icons[name]
  return Icon ? <Icon /> : null
}

export default ContentIcon
