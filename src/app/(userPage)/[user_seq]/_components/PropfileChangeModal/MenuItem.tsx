import { ClickContainer, Icon, IconContainer, TextStyle } from './ProfileChangeModalStyle'

type MenuitemProps = {
  title: string
  isSelected?: boolean
}

export default function Menuitem({ title, isSelected = false }: MenuitemProps) {
  return (
    <ClickContainer $isSelected={isSelected}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <TextStyle>{title}</TextStyle>
    </ClickContainer>
  )
}
