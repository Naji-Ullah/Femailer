export default function UserDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <div className="grid gap-4">
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Welcome to Femailer</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Your temporary email service dashboard
          </p>
        </div>
      </div>
    </div>
  )
}
