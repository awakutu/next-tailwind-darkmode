import ThemeSwitch from './theme-switch';

const Header: React.FC = () => {
  return (
    <header className="py-2">
      <div className="flex justify-between items-center">
        
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;