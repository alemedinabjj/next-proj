import { IconContext } from "react-icons";
import * as Icon from 'react-icons/fa'
import { useTheme } from '@hooks/ThemeContext'


export function BaseIcon({ name, size, color }: any) {
  const { theme } = useTheme();
  const IconName = Icon[name]
  return (
    <IconContext.Provider value={{ 
      color: color ? color : theme === 'dark' ? '#fff' : '#fff',
      size: size ? size : '1.5rem',
      className: 'global-class-name'
     }}>
      <IconName />
    </IconContext.Provider>
  )
}