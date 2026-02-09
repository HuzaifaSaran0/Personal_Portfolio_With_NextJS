import prisma from '@/lib/prisma';
import { auth, signOut } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function AdminDashboard() {
  // 1. Check session on the server
  const session = await auth();
  if (!session) redirect('/admin/login');

  // 2. Fetch stats from database in parallel (handle null prisma)
  let projectCount = 0;
  let skillCount = 0;
  let experienceCount = 0;

  if (prisma) {
    [projectCount, skillCount, experienceCount] = await Promise.all([
      prisma.project.count(),
      prisma.skill.count(),
      prisma.experience.count(),
    ]);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, {session.user.name}</p>
          </div>
          
          <form action={async () => {
            'use server';
            await signOut();
          }}>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
              Logout
            </button>
          </form>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard title="Projects" count={projectCount} link="/admin/projects" color="bg-blue-600" />
          <StatCard title="Skills" count={skillCount} link="/admin/skills" color="bg-purple-600" />
          <StatCard title="Experiences" count={experienceCount} link="/admin/experiences" color="bg-green-600" />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
          <div className="flex gap-4">
            <Link 
              href="/admin/projects/new" 
              className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition"
            >
              + New Project
            </Link>
            <Link 
              href="/" 
              className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition"
            >
              View Public Site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Stat Card Component
function StatCard({ title, count, link, color }) {
  return (
    <Link href={link} className="block group">
      <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-transparent group-hover:border-indigo-500 transition-all">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold text-gray-900">{count}</p>
          <span className={`h-2 w-2 rounded-full ${color}`}></span>
        </div>
      </div>
    </Link>
  );
}