import { BaseIcon } from '@utils/BaseIcon';
import { useTheme } from '@hooks/ThemeContext';
import { Logo } from '@utils/IconsSvg';


export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
   
   <header
    className="w-full dark:bg-primary bg-darkprimary text-white flex justify-between items-center px-20 py-4"
   >
    <Logo />
    <div className='flex items-center gap-6'>
      <button onClick={toggleTheme}>
        {
          theme === 'dark' ? (
            <BaseIcon name="FaSun" size={undefined} color={undefined} />
          ) : (
            <BaseIcon name="FaMoon" size={undefined} color={undefined} />
          )
        }
      </button>
      <div className='px-6 py-1 dark:bg-darkprimary bg-primary rounded flex items-center gap-2'>
        <p>Sign In</p>
        <BaseIcon name="FaUser" size={undefined} color={undefined} />
      </div>
    </div>
   </header>
  );
};