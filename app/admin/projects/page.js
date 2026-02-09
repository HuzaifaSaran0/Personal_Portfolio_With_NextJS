// app/projects/page.js
import prisma from '@/lib/prisma';

// Ensure this is an async Server Component
export default async function ProjectsPage() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { sortOrder: 'asc' },
      include: { skills: { include: { skill: true } } }
    });

    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-6">My Projects</h1>
        <div className="grid gap-4">
          {projects.length === 0 ? (
            <p>No projects found. Add some in the admin dashboard!</p>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="border p-4 rounded shadow">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p>{project.description}</p>
              </div>
            ))
          )}
        </div>
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return <div>Error loading projects.</div>;
  }
}