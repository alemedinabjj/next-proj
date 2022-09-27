export const Dashboard = ({ themeToggle }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={themeToggle}>Toggle Theme</button>
    </div>
  );
};
