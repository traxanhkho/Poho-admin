function Dashboard({ children }) {
  return (
    <div className="p-5 bg-c-gray-5 min-h-[calc(100vh-64px)]">
      <div className="rounded-2xl bg-[white]">{children}</div>
    </div>
  );
}

export default Dashboard;
