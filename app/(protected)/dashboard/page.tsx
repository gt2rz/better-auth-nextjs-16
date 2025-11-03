import React from 'react'

const Dashboard = () => {
  const handleLogout = async () => {
    "use server";
    const { signOut } = await import('@/server/auth');
    await signOut();
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-black">
    <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center bg-white dark:bg-black">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      <button onClick={handleLogout} className="mt-6 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"> 
        Cerrar Sesión
      </button>
    </main>
    </div>
  )
}

export default Dashboard